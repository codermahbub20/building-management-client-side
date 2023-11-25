import { useEffect, useState } from "react";

const useApartments = () => {

    const [apartments, setApartments] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/apartment')
            .then(res => res.json())
            .then(data => {
                setApartments(data)
            })
    }, [])
    return [apartments]
};

export default useApartments;