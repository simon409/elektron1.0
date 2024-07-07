import React from 'react'
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs';
import { registerUser } from '@/utils/userApis';
const FormSchema = z.object({
    username: z.string().min(3, {
        message: "Username must be at least 3 characters",
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),

  })

const SignUpForm = ({onclick}) => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    async function onSubmit(data) {
        await registerUser(data).then((res) => {
            alert(res);
        });
    }
  return (
    <div className='m-auto h-fit w-2/5 p-10 rounded-lg flex flex-col gap-5 relative'>
                <div className='absolute w-full h-full backdrop-blur-md bg-white rounded-lg left-0 top-0'></div>
                <div className='flex flex-col items-center z-10'>
                    <h1 className='text-3xl font-bold'>Welcome</h1>
                    <p className='text-gray-500'>Please enter your details to create your account</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5 z-10">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="password" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="bg-[#3B37FF] w-full px-10">SIGN UP</Button>

                    </form>
                </Form>
                <div className='z-10'>
                    <span>Already a member?</span> {" "}
                    <button onClick={onclick} className='text-[#3B37FF] font-bold'>Login</button>
                </div>
            </div>
  )
}

export default SignUpForm