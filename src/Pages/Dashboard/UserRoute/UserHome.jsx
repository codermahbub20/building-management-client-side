import useAgreement from "../../../Components/hooks/useAgreement";
import useAuth from "../../../Components/hooks/useAuth";


const UserHome = () => {

    const { user } = useAuth()
    const [agreement] = useAgreement()

    // console.log(agreement)


    return (
        <div>
            <div className="w-3/4  md:flex mx-auto gap-10 items-center mb-[100px] md:mb-4 rounded-xl h-[200px] bg-red-200">
                <div className="flex-1">
                    <img className="h-[200px] w-full rounded-xl" src={user?.photoURL} alt="" />
                </div>
                <div className="flex-1 md:text-2xl space-y-3 font-medium font-lora">
                    <h1>User Name: {user?.displayName}</h1>
                    <h1>User Email: {user?.email}</h1>
                </div>
            </div>
            <h1 className="text-5xl font-rancho text-center sm:mt-20 mb-4 md:mt-5">My All Rented Apartment Info</h1>
            <div className="w-3/4 grid lg:grid-cols-2 sm:mt-[200px] md:mt-3 gap-5 mx-auto">
                {
                    agreement
                        .filter((item) => item.status === 'checked' && user?.email === item?.userEmail)
                        .map(agreeCard => <div key={agreeCard._id}>

                            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                                <h5 className="mb-2 text-2xl text-success font-bold tracking-tight  dark:text-white">Rented Apartment info</h5>
                                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Block Name: {agreeCard?.block_name}</p>
                                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Floor No:{agreeCard?.floor_no}</p>
                                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Room No:{agreeCard?.room_no}</p>
                                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Apartment No:{agreeCard?.apartment_no}</p>
                                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Agreement Date:{agreeCard?.agreement_date}</p>
                                <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Rent Per Month:{agreeCard?.rent}</p>
                            </a>

                        </div>)
                }
            </div>
        </div>
    );
};

export default UserHome;