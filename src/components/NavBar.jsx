import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error);
            });
    }
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>


            {user ?
                <>

                    <li>
                        <NavLink to="/addproduct">Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mycart">My Cart</NavLink>
                    </li>
                </>
                :
                <>    <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </>

            }
        </>
    );
    return (
        <div className="sticky top-0 z-50 bg-slate-50">
            <div className="navbar p-4 ">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost hover:bg-cyan-900 hover:text-white  focus:text-white lg:hidden">
                           <AiOutlineMenu className="w-6 h-6"></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-900 text-white rounded w-32">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="items-center normal-case text-cyan-800 font-serif font-extrabold text-4xl  hidden md:flex">
                        <img className="w-10 h-10 mx-auto" src={"https://i.ibb.co/ThYFm6z/logo.png"} alt="" />
                        TechMart
                    </Link>




                </div>
                <div className="navbar-center ">

                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-6">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="flex lg:hidden items-center normal-case text-cyan-800 font-serif font-extrabold text-4xl lg:text-4xl ">
                        <img className="w-10 h-10 lg:hidden mx-auto" src={"https://i.ibb.co/ThYFm6z/logo.png"} alt="" />
                        TechMart
                    </Link>

                </div>

                <div className="navbar-end">
                    <div className="flex-none gap-2">
                        {
                            user?.email ?

                                <div className="dropdown dropdown-end ">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar bg-cyan-900">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-cyan-900 text-white rounded w-32">
                                        <li>
                                            <a className="justify-between hover:text-white
                                            focus:text-white">
                                                {user.displayName}
                                            </a>
                                        </li>
                                        <li ><a onClick={handleLogOut} className="hover:text-white focus:text-white" >Logout</a></li>
                                    </ul>
                                </div>

                                :
                                <Link to="/login" className="btn btn-outline btn-info">Login</Link>

                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-cyan-800 "></div>

        </div>
    );
};

export default NavBar;