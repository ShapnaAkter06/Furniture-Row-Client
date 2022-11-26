import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate('/');
    }


    const handleSignUp = data => {
        setSignUpError('')
        //create user
        createUser(data.email, data.password)
            .then(result => {
                toast.success('User created successfully');
                saveUser(data.name, data.email, data.role)

                //update user profile
                updateUserProfile(data.name)
                    .then(() => { })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message)
            })
    }

    //save user in DB
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCreatedUserEmail(email)
            })
    }

    return (
        <div className='flex justify-center items-center'>

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 shadow-2xl m-12">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                    onSubmit={handleSubmit(handleSignUp)}
                >
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">User Name</label>
                        <input
                            type="name"
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className='text-red-500 font-semibold'>{errors.name?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                        <input
                            type="email"
                            placeholder="Username"
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
                        <div>
                            {
                                signUpError && <p className='text-red-500 font-semibold'>{signUpError}</p>
                            }
                        </div>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Are you Seller?</label>
                    <select  {...register("role")} className="select select-primary mx-2">
                        <option disabled defaultValue={true}>Buyer</option>
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-gray-500 text-white">Sign in</button>
                </form>

                <div className="divider">OR</div>

                <div className='flex justify-center'>
                    <SocialLogin></SocialLogin>
                </div>

                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link to='/login' className="underline dark:text-gray-100">Login</Link>
                </p>
            </div>

        </div>
    );
};

export default SignUp;