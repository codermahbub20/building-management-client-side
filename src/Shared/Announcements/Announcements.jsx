import Lottie from 'lottie-react';
import announce from '../../assets/announce.json'
import { useEffect, useState } from 'react';
import useAxiosRandom from '../../Components/hooks/useAxiosRandom';

const Announcements = () => {

    const [announcement, setAnnouncement] = useState()
    const axiosRandom = useAxiosRandom()

    useEffect(()=>{
        axiosRandom.get('/announce')
        .then(res =>{
            setAnnouncement(res.data)
        })
    },[axiosRandom])


    return (
        <div>
            <h1 className="text-4xl text-center font-medium font-lora">Improtant Announcement From Users And members Here</h1>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        {
                            announcement?.map(item => <div className='space-y-3' key={item._id}>
                                <h1 className='text-3xl font-medium text-center '>Announcement Here</h1>
                                    <h1 className='text-3xl font-medium'>Title : {item?.title}</h1>
                                    <p className='text-xl font-lora'><span className='font-bold'>Description:</span> {item?.description}</p>
                            </div>) 
                        }
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Lottie animationData={announce}></Lottie>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Announcements;