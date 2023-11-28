import Lottie from 'lottie-react';
import couponGig from '../../../assets/Animation - 1701014748886.json'

import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosPublic from '../../../Components/hooks/useAxiosPublic';

const UpdateCoupon = () => {


    const couponData = useLoaderData()
    const {_id} = couponData;

    console.log(couponData)

    const handleUpdate = (e) => {

        e.preventDefault()
        const form = e.target;
        const code = form.code.value;
        const discount = form.discount.value
        const description = form.description.value

        const updateInfo = { code, discount, description }

        console.log(updateInfo)

        axiosPublic.put(`/coupon/${_id}`, updateInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coupon data Was Updated',
                        icon: 'success',
                        confirmButtonText: 'Great',
                    });

                }
            })
            .catch((error) => {
                console.error('Error updating agreement:', error);
            });

    }



    return (
        <div>
            <h1 className='text-4xl font-medium text-center mb-2 font-lora'>Available Coupon For Users And Members </h1>
            <div>
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coupon Code</span>
                        </label>
                        <input type="text" name='code' defaultValue={couponData?.code} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">discount percentage</span>
                        </label>
                        <input type="text" name='discount' defaultValue={couponData?.discount} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">coupon description</span>
                        </label>
                        <input type="text" name='description' defaultValue={couponData?.description} className="input input-bordered" required />
                    </div>
                    <div className="form-control  mt-6">
                        <button className="btn  btn-primary">Update Coupon</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoupon;



