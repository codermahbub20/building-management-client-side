import  { useEffect, useState } from "react";
import { Box, Button, Grid, MenuItem, Select, Typography, createTheme } from "@mui/material";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";

const Apartment = () => {
    const [apartments, setApartments] = useState([]);
    const { count } = useLoaderData();
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`https://building-management-server-lemon.vercel.app/apartment?page=${currentPage}&size=${itemsPerPage}`)
            .then((res) => res.json())
            .then((data) => {
                setApartments(data);
            });
    }, [currentPage, itemsPerPage]);

    const handleItemsPerPage = (e) => {
        const value = parseInt(e.target.value);
        setItemsPerPage(value);
        setCurrentPage(0);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pages?.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };


    const theme = createTheme({
        typography: {
          fontFamily: 'Balsamiq Sans',
        },
      });


    return (
        <Box>
            <div className="hero min-h-[100vh] lg:min-h-[60vh]" style={{ backgroundImage: 'url(https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/single-listing/property_header_1.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Our Beautiful And Available Apartment Here .............</h1>
                    </div>
                </div>
            </div>
            <Typography variant="h3" theme={theme} textAlign="center" mt={5}>
                All Apartment Here
            </Typography>
            <Grid container spacing={3} sx={{ width: '85%', margin: 'auto', }} justifyContent="center" mt={5}>
                {apartments?.map((apartment) => (
                    <Grid item key={apartment._id} xs={12} sm={6} md={4}>
                        <Card apartment={apartment} />
                    </Grid>
                ))}
            </Grid>
            <Box mt={5} textAlign="center">
                <Button onClick={handlePrevPage} variant="contained" size="small">
                    Prev
                </Button>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        variant={currentPage === page ? 'contained' : 'outlined'}
                        size="small"
                        sx={{ ml: 2, mb: 4 }}
                    >
                        {page + 1}
                    </Button>
                ))}
                <Button onClick={handleNextPage} variant="contained" size="small" sx={{ ml: 1 }}>
                    Next
                </Button>
                <Select value={itemsPerPage} onChange={handleItemsPerPage} size="small" sx={{ ml: 4 }}>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
            </Box>
        </Box>
    );
};

export default Apartment;


