/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import useCoupon from "../../../Components/hooks/useCoupon";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";

const PaymentCard = () => {
    const location = useLocation();
    const { Coupon } = useCoupon();
    const [coupon, setCoupon] = useState('');
    const [discountedRent, setDiscountedRent] = useState(null);
console.log("from paymentcard")

    const paymentData = location.state?.paymentInfo;

    const { email, floor, block, apartment, month, taka } = paymentData || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const enteredCoupon = form.coupon.value;


        const validCoupon = Coupon.find(item => item.code === enteredCoupon);
        
        if (validCoupon) {

            const discountPercentage = validCoupon.discount;
            console.log(discountPercentage)
            const rentAmount = parseFloat(taka);
            console.log(rentAmount)
            if (!isNaN(rentAmount)) {
                const discountAmount = (rentAmount * discountPercentage) / 100;
                const newRent = rentAmount - discountAmount;
                setDiscountedRent(newRent);
                setCoupon(enteredCoupon);
            } else {
                console.error("Invalid rent amount");
                setCoupon('');
                setDiscountedRent(null);
            }
        } else {

            console.log("Invalid coupon");
            setCoupon('');
            setDiscountedRent(null);
        }
    };

    // const paymentDetails = {
    //     email ,
    //     floor,
    //     block,
    //     apartment,
    //     month,
    //     taka,
    //     discountedRent
    // }



    // Payment related
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key)


    return (
        <div className="w-3/4 mx-auto grid grid-cols-2">
            <div className="">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Coupon Code</span>
                        </label>
                        <input type="text" name="coupon" placeholder="Enter Your Coupon Code" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>

                {/* Display the discounted rent if available */}
                {discountedRent !== null ? (
                    <div className="mt-4">
                        <p>Original Rent: <span className="text-xl text-red-500">{taka}</span> Taka</p>
                        <p>Discounted Rent with Coupon {coupon}: <span className="text-red-500 text-xl">{discountedRent.toFixed(2)}</span> Taka</p>
                    </div>
                )
                    :
                    <div className="mt-4">
                        <h1 className="text-xl text-red-700">The Coupon Code Is not Valid </h1>
                        <p>Please payment: <span className="text-xl text-red-500">{taka}</span> Taka</p>
                    </div>
                }
            </div>

            <div>
                <Elements stripe={stripePromise}>

                    <CheckoutForm paymentInfo={paymentData } >

                    </CheckoutForm>

                </Elements>
            </div>
        </div>
    );
};

export default PaymentCard;
