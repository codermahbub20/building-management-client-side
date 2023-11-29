// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAgreement from "../../../Components/hooks/useAgreement";
import useAuth from "../../../Components/hooks/useAuth";


// import BookingModal from "./BookingModal";


const MakePayment = () => {

    const { user } = useAuth()
    // let [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const [agreement] = useAgreement()
    // console.log(agreement)

    // const closeModal = () =>{
    //     setIsOpen(false)
    // }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const floor = form.floor.value;
        const block = form.block.value;
        const apartment = form.apartment.value;
        const rent = form.rent.value;
        const month = form.month.value;
        const value = rent.split(" ")[1]
        const value1 = value.split(",")[0]
        const value2 = value.split(",")[1]
        const value3 = value1 + value2
        const taka = parseInt(value3)

        const paymentInfo = {
            email,
            floor,
            block,
            apartment,
            month,
            taka
        }


        navigate("paymentCard", {
            state: { paymentInfo }
        })
    }




    return (
        <div>
            <h1 className="text-3xl font-medium text-[#70e000] text-center">This is Payment Page , Are You Booked the Apartment Please Payment Here....</h1>
            <hr />
            <div className="grid lg:grid-cols-3 mt-10  gap-5">
                {
                    agreement
                        .filter((item) => item.userEmail === user?.email && item?.request === 'booked')
                        .map(agreeCard => <div key={agreeCard._id}>

                            <div className="card w-96 bg-base-100 border border-[#70e000] shadow-2xl">
                                <form onSubmit={handleSubmit} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Member Email</span>
                                        </label>
                                        <input type="text" name="email" value={agreeCard?.userEmail} readOnly className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Floor No:</span>
                                        </label>
                                        <input type="text" name="floor" value={agreeCard?.floor_no} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Block Name:</span>
                                        </label>
                                        <input type="text" name="block" value={agreeCard?.block_name} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Apartment No:</span>
                                        </label>
                                        <input type="text" name="apartment" value={agreeCard?.apartment_no} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rent:</span>
                                        </label>
                                        <input type="text" name="rent" value={agreeCard?.rent} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Pick The Month :</span>
                                        </label>
                                        <select name="month" className="select  select-ghost w-full max-w-xs">
                                            <option disabled selected>Pick the Month !</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </select>
                                    </div>
                                    <div className="form-control mt-6">

                                        <button className="btn w-full bg-[#70e000]">Pay</button>

                                    </div>
                                </form>
                            </div>
                        </div>

                        )
                }
            </div>

            {/* <BookingModal closeModal={closeModal}  isOpen={isOpen}></BookingModal> */}

        </div>
    );
};

export default MakePayment;

// example/