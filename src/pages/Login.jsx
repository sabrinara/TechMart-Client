import { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    // const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Successfully Login');
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
                // setError(error.message.split('/')[1].slice(0, -2));
                toast('Login failed. Please check your email and password.');
            });
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                toast('Successfully Login');

            })
            .catch(error => {
                console.error(error);
                toast('Login failed. Please check your email and password.');
            });
    }
    return (
        <div>
            <div className="hero  min-h-screen bg-base-200 mb-6" style={{ height:'80vh',backgroundImage: 'url(https://i.ibb.co/B6bgwG4/bg.jpg)' }}>
                <div className="hero-content flex-col ">
                    <div className="text-center mt-8 mb-4">
                        <h1 className=" text-cyan-800 text-5xl  font-bold">Login Please.</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full md:w-[100rem] max-w-xl shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button className="p-3 bg-blue-600 text-white rounded-md">Login</button>
                            </div>

                        </form>

                        <div className="flex flex-col items-center justify-center mb-6">
                            <p className="text-[15px]">New in the Website? Please<Link to="/register"><button className="p-1 text-blue-700 font-bold">Register</button></Link></p>
                            <p>Or sign up with<button onClick={handleGoogleSignIn} className="btn text-blue-700 font-bold"><FaGoogle></FaGoogle>Google</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div>
    );
};

export default Login;