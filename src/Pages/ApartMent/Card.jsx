/* eslint-disable react/prop-types */
import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns/+esm';
import Swal from "sweetalert2";
import useAuth from "../../Components/hooks/useAuth";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";


// eslint-disable-next-line react/prop-types
const Card = ({ apartment }) => {

    const { apartment_image, block_name, apartment_no, floor_no, rent, _id } = apartment;
    const { user } = useAuth()
    console.log(user)
    const axiosSecure = useAxiosSecure()

    const today = new Date();
    const formattedDate1 = dateFns.format(today, 'dd MMMM yyyy');
    // console.log(formattedDate1);

    const agreementData = {
        userName: user?.displayName,
        userEmail: user?.email,
        floor_no,
        block_name,
        apartment_no,
        agreement_date: formattedDate1,
        rent,
        room_no: Math.floor((Math.random() * 40) + 20),
        status: 'pending'
    }

    const handleAdded = (id) => {
        console.log(id)
        axiosSecure.post(`/agreements`, agreementData)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    // show success popup
                    // reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.displayName} you Confirm Your Agreement`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>


            <div className="max-w-sm bg-white border  border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[300px] w-full" src={apartment_image} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span>Block Name: </span>{block_name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>Apartment No: </span>{apartment_no}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>Floor No: </span>{floor_no}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>Rent: </span>{rent} TK</p>

                    <button onClick={() => handleAdded(_id)} className="btn w-full">
                        Agreement
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card