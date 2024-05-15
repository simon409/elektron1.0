import React from 'react'
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BsApple } from 'react-icons/bs';
import { LoginUser } from '@/utils/userApis';
const FormSchema = z.object({
    identifier: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),
  })

const LoginForm = ({onclick}) => {

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            identifier: "",
            password: "",
        },
    })

    async function onSubmit(data) {
        await LoginUser(data.identifier, data.password).then((res) => {
            console.log(res);
        });
    }
  return (
    <div className='m-auto h-fit w-2/5 p-10 rounded-lg flex flex-col gap-5 relative'>
                <div className='absolute w-full h-full backdrop-blur-md bg-white/80 rounded-lg left-0 top-0'></div>
                <div className='flex flex-col items-center z-10'>
                    <h1 className='text-3xl font-bold'>Welcome Back</h1>
                    <p className='text-gray-500'>Please enter your details to Login</p>
                </div>
                <div className='flex h-full gap-5 z-10'>
                    <a href="#" className='p-4 border border-gray-400 hover:bg-white transition-colors duration-300 ease-in-out rounded-md w-1/3 text-xl flex'><span className='mx-auto'><BsApple /></span></a>
                    <a href="#" className='p-4 border border-gray-400 hover:bg-white transition-colors duration-300 ease-in-out rounded-md w-1/3 flex'><span className='mx-auto'><img src='/assets/google.svg' className='w-[20px] h-[20px]' /></span></a>
                    <a href="#" className='p-4 border border-gray-400 hover:bg-white transition-colors duration-300 ease-in-out rounded-md w-1/3 flex'><span className='mx-auto'><img src='/assets/facebook.svg' className='w-[20px] h-[20px]' /></span></a>
                </div>
                <div className='relative z-10'>
                    <hr className='border-gray-400' />
                    <p className='text-center absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E1DFDC] px-4'>Or</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 z-10">
                        <FormField
                        control={form.control}
                        name="identifier"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="bg-[#3B37FF] w-full px-10">LOGIN</Button>

                    </form>
                </Form>
                <div className='z-10'>
                    <span>Not a member?</span> {" "}
                    <button onClick={onclick} className='text-[#3B37FF] font-bold'>Sign Up</button>
                </div>
            </div>
  )
}

export default LoginForm;