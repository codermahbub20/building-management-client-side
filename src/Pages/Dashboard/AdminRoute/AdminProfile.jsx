import { useEffect, useState } from "react";
import useAuth from "../../../Components/hooks/useAuth";
import useAxiosRandom from "../../../Components/hooks/useAxiosRandom";

const AdminProfile = () => {
    const { user } = useAuth()

    const [roomData, setRoomData] = useState()
    const [bookedRooms, setBookedRooms] = useState(0);
    const [percentageBooked, setPercentageBooked] = useState(0);

    const axiosRandom = useAxiosRandom()

    useEffect(() => {
        axiosRandom.get('/apartment')
            .then(res => {
                setRoomData(res.data.length)
            })
    }, [axiosRandom])

    // console.log(roomData)
    

    return (
        <div>

            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={user?.photoURL} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Admin Name: {user?.displayName}</h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Admin Email: {user?.email}</h5>
                </div>
            </a>
            <p className="mb-3 text-xl text-success font-medium dark:text-gray-400">Total number of rooms in the database :
                {roomData}</p>

        </div>
    );
};

export default AdminProfile;