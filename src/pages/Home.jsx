import { useState } from "react";
import Banner from "../components/Banner";
import EmployeeTalk from "../components/EmployeeTalk";
import BrandsList from "../components/Service/BrandsList";

import AboutUs from "../components/other/AboutUs";
import { useEffect } from "react";

const Home = () => {

    const [brand, setBrand] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBrand(data))
            .catch (error => console.error(error));
    },[]);
    return (
        <div>
            <Banner></Banner> 
            <AboutUs></AboutUs>
            <BrandsList brandslist={brand}></BrandsList>
            <EmployeeTalk></EmployeeTalk>
        </div>
    );
};

export default Home;