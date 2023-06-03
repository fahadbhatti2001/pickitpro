import React from 'react'
import { Header, UseUserAuth } from '@/Components'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export const Login = () => {
    const { signIn } = UseUserAuth();
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSignIn = async (data) => {
        try {
            if (data.email == "admin@gmail.com" && data.password == "123admin") {
                // await signIn(data.email, data.password)
                router.push("/admin")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Wrong Credentials",
                    background: '#ffffff',
                    toast: true,
                    animation: true,
                    position: "top",
                    timer: 2000,
                    iconColor: '#27272a',
                    showCancelButton: false,
                    showConfirmButton: false,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Unable to Login",
                background: '#ffffff',
                toast: true,
                animation: true,
                position: "top",
                timer: 2000,
                iconColor: '#27272a',
                showCancelButton: false,
                showConfirmButton: false,
            });
        }
    }
    return (
        <>
            <Header />
            <div className="md:h-[86vh] h-auto md:mt-0 mt-16 py-6 flex flex-col justify-center md:py-12 px-8">
                <div className="relative py-3 md:px-0 px-3 md:max-w-xl md:mx-auto md:w-1/3 w-full">
                    <div className="absolute md:block hidden inset-0 bg-gradient-to-r from-primary-1/70 to-primary-1 shadow-lg transform -skew-y-0 -rotate-6 rounded-3xl"></div>
                    <div className="absolute md:hidden block inset-0 bg-gradient-to-r from-primary-1/10 to-primary-1/10 shadow-lg rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white border border-zinc-100 shadow-lg md:rounded-3xl rounded-2xl md:p-20">
                        <h1 className="text-2xl font-semibold">Login</h1>
                        <div className="py-8 text-base space-y-6 text-gray-700">
                            <div className="relative">
                                {errors.email && (
                                    <span className="absolute right-0 -top-5 text-xs text-right text-rose-600">
                                        {errors.email.message}
                                    </span>
                                )}
                                <input {...register("email", { required: "email is required", pattern: { value: /\S+@\S+\.\S+/, message: "i.e: xyz@gmail.com" } })} autoComplete="off" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                <label for="email" className="text-gray-400 peer-focus:text-gray-600 absolute left-0 -top-5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div className="relative">
                                {errors.password && (
                                    <span className="absolute right-0 -top-5 text-xs text-right text-rose-600">
                                        {errors.password.message}
                                    </span>
                                )}
                                <input {...register("password", { required: "password is required", minLength: { value: 8, message: "min length is 8" } })} autoComplete="off" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label for="password" className="text-gray-400 peer-focus:text-gray-600 absolute left-0 -top-5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-sm">Password</label>
                            </div>
                            <button onClick={handleSubmit(onSignIn)} className="bg-primary-1 text-white rounded py-1 w-full">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
