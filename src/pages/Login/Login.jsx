import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signIn } = useAuth();
    // const { signIn } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    console.log('location login', location);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        setLoginError('');
        setSuccess('');


        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                const user = { email }
                // Swal.fire({
                //     title: "Login Successful !",
                //     text: "You clicked the button!",
                //     icon: "success"
                // });
                // event.target.reset();
                // navigate(location?.state ? location?.state : '/')


                // get access token
                axios.post('https://58-car-doctor-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            Swal.fire({
                                title: "Login Successfully !",
                                icon: "success"
                            });
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: (error.message.slice(9, 41))
                });
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mx-auto mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='mr-4 text-center pb-6'>New to Car Doctors? <Link className='text-orange-700' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;