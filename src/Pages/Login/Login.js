import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import SocialLogin from './SocialLogin';
import login from '../../assets/login.gif'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                toast.success('login successfully');
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    return (
        <div className='flex flex-col justify-center lg:flex-row lg:justify-center items-center'>
            <div className="text-center lg:w-2/5 w-96 mt-12 lg:mt-0">
                <img src={login} alt="" />
            </div>

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 shadow-2xl m-12">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            {...register("email", { required: "Email Address is required" })}
                        />
                        {errors.email && <p className='text-red-500 font-semibold'>{errors.email?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <p className='text-red-500 font-semibold'>{errors.password?.message}</p>}
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <button>Forgot Password?</button>
                        </div>
                    </div>
                    <div>
                        {
                            loginError && <p className='text-red-500 font-semibold'>{loginError}</p>
                        }
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-gray-500 text-white">Sign in</button>
                </form>

                <div className="divider">OR</div>

                <div className='flex justify-center'>
                    <SocialLogin></SocialLogin>
                </div>

                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link to='/signup' className="underline dark:text-gray-100">Sign up</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;