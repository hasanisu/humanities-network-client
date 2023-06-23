import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const AdminLogin = () => {

    const handleToLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }

    return (
        <div className='flex justify-center '>
            <form onSubmit={handleToLogin} className="flex w-6/12 h-80 flex-col gap-4 bg-red-500 text-center mt-20 ">
                <h2 className='text-2xl'>Login into your Account</h2>
                <div>

                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <input className=' w-72' id="email1" placeholder="name@flowbite.com" required type="email" name="email" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div> 
                    <input className=' w-72' id="password1" placeholder="your password" required type="password" name="password" />
                </div>

                <Button className=' w-96 mx-auto' type="submit"> Login </Button>
            </form>
        </div>
    );
};

export default AdminLogin;