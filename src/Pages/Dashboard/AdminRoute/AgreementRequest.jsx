
import Swal from 'sweetalert2';
import useAgreement from '../../../Components/hooks/useAgreement';
import axiosPublic from '../../../Components/hooks/useAxiosPublic';
import useUser from '../../../Components/hooks/useUser';
import useRole from '../../../Components/hooks/useRole';
import useAxiosSecure from '../../../Components/hooks/useAxiosSecure';

const AgreementRequest = () => {
    const [agreement, loading, refetch] = useAgreement();
    const [roles] = useRole();
    const { User } = useUser();
    const axiosSecure = useAxiosSecure();

    const handleAccept = (id, userEmail) => {
        const agreementInfo = {
            status: 'checked',
            request: 'booked',
        };

        const userInfo = {
            role: 'member',
        };

        axiosSecure
            .patch(`/users/${userEmail}`, userInfo)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error('Error updating user role:', error);
            });

        axiosPublic
            .put(`/agreements/${id}`, agreementInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'The Agreement was Checked!',
                        icon: 'success',
                        confirmButtonText: 'Great',
                    });
                    refetch();
                }
            })
            .catch((error) => {
                console.error('Error updating agreement:', error);
            });
    };

    const handleReject = (id) => {
        const agreementInfo = {
            status: 'checked',
            request: 'canceled',
        };

        axiosPublic
            .put(`/agreements/${id}`, agreementInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Rejected',
                        text: 'The Agreement was Rejected !!',
                        icon: 'error',
                        confirmButtonText: 'Great',
                    });
                    refetch();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1 className="text-4xl text-center font-medium">All Pending Agreement Are Here</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
                {agreement
                    .filter((item) => item.status === 'pending')
                    .map((agreeCard) => (
                        <div key={agreeCard._id}>
                            <div className="max-w-sm bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                {/* ... rest of the component */}
                                <div className="p-5">
                                    <a href="#">
                                        <p className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">User Name: {agreeCard.userName}</p>
                                        <p className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">User Email: {agreeCard.userEmail}</p>
                                    </a>
                                    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Floor No: {agreeCard.floor_no}</p>
                                    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Block Name: {agreeCard.block_name}</p>
                                    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Room No: {agreeCard.room_no}</p>
                                    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Rent: {agreeCard.rent}</p>
                                    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Date: {agreeCard.agreement_date}</p>
                                    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Status: <span className="text-blue-700">{agreeCard.status}</span></p>
                                </div>

                                <button onClick={() => handleAccept(agreeCard._id, agreeCard.userEmail)} className="btn border-black w-full">
                                    Accept
                                </button>
                                <button onClick={() => handleReject(agreeCard._id)} className="btn w-full mb-2 mt-2">
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AgreementRequest;



















{/* <div className="max-w-sm bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div className="p-5">
    <a href="#">
        <p className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">User Name: {agreeCard.userName}</p>
        <p className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">User Email: {agreeCard.userEmail}</p>
    </a>
    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Floor No: {agreeCard.floor_no}</p>
    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Block Name: {agreeCard.block_name}</p>
    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Room No: {agreeCard.room_no}</p>
    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Rent: {agreeCard.rent}</p>
    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Date: {agreeCard.agreement_date}</p>
    <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">Status: <span className="text-blue-700">{agreeCard.status}</span></p>
</div>

<button onClick={() => handleAccept(agreeCard._id)} className="btn border-black w-full">Accept</button>

<button onClick={() => handleReject(agreeCard._id)} className="btn w-full mb-2 mt-2">Reject</button>
</div> */}