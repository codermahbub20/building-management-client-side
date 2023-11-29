/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";
import useAuth from "../../../Components/hooks/useAuth";
import axios from "axios";
// import useAxiosRandom from "../../../Components/hooks/useAxiosRandom";


const CheckoutForm = ({ paymentInfo }) => {

    const [clientSecret, setClientSecret] = useState('')
    const [transectionId, setTransectionId] = useState()

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
        if(taka  > 0 ){
            axiosSecure.post('/create-payment-intent', { price: taka })
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
        }
        
    }, [axiosSecure,taka])  

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName
                }
            }
        })
        if (confirmError) {
            console.log("confirm error")
        } else {
            console.log(paymentIntent)
        }

    };

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



























// if(paymentIntent.status === 'succeeded'){
    // setTransectionId(paymentIntent.id)
    // const paymentsDataInfo = {
    //     email,
    //     month,
    //     taka,
    //     transectionId : paymentIntent.id,
    //     date: new Date()
    //     } 
