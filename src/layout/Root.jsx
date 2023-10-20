import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";

const Root = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
      setIsDarkTheme((prevTheme) => !prevTheme);
    };
    return (
        <div className="max-w-8xl mx-auto font-roboto"
        data-theme={isDarkTheme ? "dark" : "light"}
        >
            <NavBar toggleTheme={toggleTheme}></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;