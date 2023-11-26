import Lottie from "lottie-react";
import announce from '../../../assets/announce.json';
import useAxiosRandom from "../../../Components/hooks/useAxiosRandom";
import Swal from "sweetalert2";


const AdminAnnouncement = () => {

    const axiosRandom = useAxiosRandom()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;

        const announceData = { title, description }

        axiosRandom.post('/announce', announceData)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Announce Done',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }
            })
        form.reset()
    }


    return (
        <div>
            <h1 className="text-6xl text-center font-rancho">Make Announcement</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-10 w-3/4 mx-auto">
                <div>
                    <Lottie className="md:w-3/4" animationData={announce}>
                    </Lottie>
                </div>

                <div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title Here...." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Description</span>
                            </label>
                            <textarea placeholder="Description" name="description" className="textarea textarea-bordered textarea-md w-full " ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white btn-success">Announce</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminAnnouncement;