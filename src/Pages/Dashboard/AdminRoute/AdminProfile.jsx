import { useEffect, useState } from "react";
import useAuth from "../../../Components/hooks/useAuth";
import useAxiosRandom from "../../../Components/hooks/useAxiosRandom";
import useAgreement from "../../../Components/hooks/useAgreement";
import useUser from "../../../Components/hooks/useUser";

const AdminProfile = () => {
    const { user } = useAuth()

    const [roomData, setRoomData] = useState()

    const axiosRandom = useAxiosRandom()
    const [agreement] = useAgreement()
    const { User } = useUser()

    useEffect(() => {
        axiosRandom.get('/apartment')
            .then(res => {
                setRoomData(res.data.length)
            })
    }, [axiosRandom])

    // available rooms and booked rooms code here

    const result = agreement.filter((item) => item?.request === 'booked')
    // .map(agreeCard => console.log(agreeCard?.length) )
    const bookedRooms = result.length;
    const totalRooms = roomData;

    const availableRooms = totalRooms - bookedRooms;
    const availablePercentage = (availableRooms / totalRooms) * 100;

    const bookedPercentage = (bookedRooms / totalRooms) * 100;

    console.log(availablePercentage)

    // user and member related code

    const userData = User?.filter((item) => item?.role === 'guest')

    const memberData = User?.filter((item) => item?.role === 'member')


    return (
        <div>

            <a href="#" className="flex w-3/4  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={user?.photoURL} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Admin Name: {user?.displayName}</h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Admin Email: {user?.email}</h5>
                </div>
            </a>

            <div className="py-5 w-3/4  px-5">
                <p className="mb-3 text-xl text-success font-medium dark:text-gray-400">Total number of rooms in the database :
                    {roomData}</p>
                <p className="mb-3 text-xl text-success font-medium dark:text-gray-400">Total number of Users in the database :
                    {userData.length}</p>
                <p className="mb-3 text-xl text-success font-medium dark:text-gray-400">Total number of Members in the database :
                    {memberData?.length}</p>
            </div>

            <div className="flex gap-5 w-3/4  p-5 border">

                <div className="text-center">
                    <div className="radial-progress text-success" style={{ "--value": availablePercentage }} role="progressbar">{availablePercentage} %</div>
                    <p className="text-center">Available rooms In database</p>
                </div>

                <div className="text-center">
                    <div className="radial-progress text-success" style={{ "--value": bookedPercentage }} role="progressbar">{bookedPercentage} %</div>
                    <p className="text-center">Booked rooms In database</p>
                </div>
            </div>

        </div>
    );
};

export default AdminProfile;