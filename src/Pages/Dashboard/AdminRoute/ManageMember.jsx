import { FaTrash } from "react-icons/fa";
import useUser from "../../../Components/hooks/useUser";
import useAxiosRandom from "../../../Components/hooks/useAxiosRandom";

const ManageMember = () => {
    const { User } = useUser();
    const axiosRandom = useAxiosRandom();

    const handleUpdate = (id) => {
        const updateData = {

            role: 'guest'
        };

        axiosRandom.put(`/users/${id}`, updateData)
            .then(res => {
                console.log(res.data);
                // Optionally, you can update the state or perform other actions upon a successful update.
            })
            .catch(error => {
                console.error('Error updating user role:', error);
            });
    };

    return (
        <div>
            <h1 className="text-4xl text-center font-medium font-lora">Manage All Members</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                User?.filter(item => item?.role === 'member').map((user, index) => (
                                    <tr key={user?._id}>
                                        <th>{index + 1}</th>
                                        <td>{user?.email}</td>
                                        <td>{user?.email}</td>
                                        <td onClick={() => handleUpdate(user?._id)} className="btn"><FaTrash /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageMember;
