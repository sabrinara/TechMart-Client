import Banner from "../components/Banner";
import EmployeeTalk from "../components/EmployeeTalk";
import BrandsList from "../components/Service/BrandsList";

import AboutUs from "../components/other/AboutUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <AboutUs></AboutUs>
            <BrandsList></BrandsList>
            <EmployeeTalk></EmployeeTalk>
        </div>
    );
};

export default Home;