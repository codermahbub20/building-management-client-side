

const Map = () => {
    return (
        <div>
            <h1 className="text-4xl text-center py-4">Our Building location From Here.....</h1>
            <div className="md:flex  justify-center  gap-5 rounded-lg px-5">

                <div className="flex-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5496.837306991841!2d90.40445103982032!3d23.794346333811177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e90bb671d%3A0x7eab77d0896252c0!2sBanani%20Super%20Market!5e0!3m2!1sen!2sbd!4v1701061892822!5m2!1sen!2sbd" height="450" className="w-full py-4" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className=" lg:ml-20 text-xl flex-1">
                    <br />
                    <h1 className="text-2xl">Our Resedential Building location ..</h1>
                    <hr />
                    <p>Flat in Gulshan, Dhaka <br />
                        Address: Ghulshan-2,D-Block, Dhaka <br />
                        City: Dhaka <br />
                        Area: Gulshan <br />
                        Country: Bangladesh</p> <br /><br />

                    <h1 className="text-2xl">Our Most Rented Building location ..</h1>
                    <hr />
                    <p>Flat in Banani, Dhaka <br />
                        Address: Road-2,Block-A,Banani,Dhaka <br />
                        City: Dhaka <br />
                        Area: Banani <br />
                        Country: Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Map;