import Lottie from 'lottie-react';
import couponGig from '../../../assets/Animation - 1701014748886.json'
import useAxiosRandom from '../../../Components/hooks/useAxiosRandom';
import { useState } from 'react';

const Coupon = () => {

    const [couponData , setCouponData] = useState()

    const axiosRandom = useAxiosRandom()

    const handleCouponSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const code = form.code.value;
        const discount = form.discount.value
        const description = form.description.value

        const couponData = { code, discount, description }
        // console.log(code, discount, description)
        axiosRandom.post('/coupon', couponData)
            .then(res => {
                console.log(res.data)
            })
        form.reset()
    }

    axiosRandom.get('/coupon')
    .then(res => {
        setCouponData(res.data)
    })


    return (
        <div>
            <h1 className='text-4xl font-medium text-center mb-2 font-lora'>Available Coupon For Users And Members </h1>
            <div className='grid md:grid-cols-2 w-3/4 mx-auto mt-4'>
                <div className='flex justify-center items-center'>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-success text-white text-2xl font-rancho" onClick={() => document.getElementById('my_modal_5').showModal()}>Create Coupon</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form onSubmit={handleCouponSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Coupon Code</span>
                                    </label>
                                    <input type="text" name='code' placeholder="Coupon Code" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">discount percentage</span>
                                    </label>
                                    <input type="text" name='discount' placeholder="discount
percentage" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">coupon description</span>
                                    </label>
                                    <input type="text" name='description' placeholder="coupon description" className="input input-bordered" required />
                                </div>
                                <div className="form-control  mt-6">
                                    <button className="btn  btn-primary">Add Coupon</button>
                                </div>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div>
                    <Lottie className='lg:w-1/2' animationData={couponGig}></Lottie>
                </div>
            </div>
            <h1 className='text-3xl font-medium text-center py-4'>All Created Coupon are Here</h1>

            <div className="overflow-x-auto">
                <table className="table text-lg table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coupon Code</th>
                            <th>Coupon Discount</th>
                            <th>Coupon description</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        couponData?.map((item,index) => <tr key={item._id}>
                            <th>{index +1}</th>
                            <td>{item?.code}</td>
                            <td>{item?.discount} %</td>
                            <td>{item?.description}</td>
                        </tr> )
                    }

                        {/* row 1 */}
                       

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Coupon;