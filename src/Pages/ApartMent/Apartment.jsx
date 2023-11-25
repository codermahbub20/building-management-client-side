import { useLoaderData } from "react-router-dom";
// import useApartments from "../../Components/hooks/useApartments";
import Card from "./Card";
import { useEffect, useState } from "react";
// import ApartmentCard from "./ApartmentCard";

const Apartment = () => {


    const [apartments, setApartments] = useState([])
    // const [apartments] = useApartments();
    console.log(apartments)

    const { count } = useLoaderData()
    console.log(count)

    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

    const numberOfPage = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPage).keys()];


    const handleItemsPerPage = e => {
        console.log(e.target.value)
        const value = parseInt(e.target.value)
        setItemsPerPage(value);
        setCurrentPage(0);
    }
    console.log(itemsPerPage)
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages?.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    // pagination related all code here

    useEffect(() => {
        fetch(`http://localhost:5000/apartment?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setApartments(data)
            })
    }, [currentPage, itemsPerPage])


    return (
        <div>
            <div className="hero min-h-[60vh]" style={{ backgroundImage: 'url(https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/single-listing/property_header_1.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 font-rancho text-5xl font-bold">Our High Quality and Available Apartment Here ....</h1>
                    </div>
                </div>
            </div>
            <h1 className="text-5xl font-rancho text-center mt-5">All Apartment Here</h1>
            <div className="md:w-10/12 mt-10 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    apartments?.map(apartment => <Card key={apartment._id} apartment={apartment}></Card>)
                }
            </div>

            <div className="w-1/2 gap-2 mx-auto text-center">
                <button onClick={handlePrevPage} className="btn btn-sm">Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'bg-[#FF3811] text-white hover:bg-[#FF3811] btn ml-2  mb-4' : "btn ml-2  mb-4"}
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page}</button>)
                }
                <button onClick={handleNextPage} className="btn ml-1 btn-sm">Next</button>

                <select value={itemsPerPage} onChange={handleItemsPerPage} className="btn btn-sm ml-4" name="" id="">
                    <option value="2">2</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                </select>

            </div>

        </div>
    );
};

export default Apartment;