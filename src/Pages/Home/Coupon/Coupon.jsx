import useCoupon from "../../../Components/hooks/useCoupon";

const Coupon = () => {

    const { Coupon } = useCoupon()
    console.log(Coupon)

    return (
        <div>
            <h1 className="text-4xl font-medium text-center my-3">Available Discount Coupon Here</h1>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    Coupon?.map(item => <div key={item._id}>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src="https://t3.ftcdn.net/jpg/02/71/22/14/360_F_271221478_nSLByVJRxrHQK4dWvZ38tIAKfDVv9WTm.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Coupon Code: <span>{item.code}</span> </h2>
                                <h2 className="card-title">Discount: <span>{item.discount} %</span> </h2>
                                <p>Description : {item.description}</p>
                                
                            </div>
                        </div>

                    </div>)
                }
            </div>
           
        </div>
    );
};

export default Coupon;