/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";
import useAuth from "../../../Components/hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
// import useAxiosRandom from "../../../Components/hooks/useAxiosRandom";


const CheckoutForm = ({ paymentInfo }) => {

    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [error, setError] = useState('');

    const { email, floor, block, apartment, month, taka } = paymentInfo;
    console.log(paymentInfo)



    // console.log(paymentData.taka)

    const { user } = useAuth()

    const axiosSecure = useAxiosSecure()
    // const axiosRandom = useAxiosRandom()

    const stripe = useStripe();
    const elements = useElements();
    // let isMounted = false;
    useEffect(() => {
        if (taka > 0) {
            axiosSecure.post('/create-payment-intent', { price: taka })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [axiosSecure, taka])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email,
                    month,
                    taka,
                    transactionId: paymentIntent.id,
                    date: new Date()
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                // refetch();
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the Payment taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }

            }
        }

    }






    return (
        <form className="p-5" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn-success btn mt-2" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};
export default CheckoutForm;






