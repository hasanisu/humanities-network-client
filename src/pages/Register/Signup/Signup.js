import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const Signup = () => {

    const handleToRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleToRegister} className="flex w-6/12 h-96 flex-col gap-4 bg-red-500 mx-auto text-center mt-20 rounded-lg">
                <h2 className='text-2xl'>Register your account</h2>
                <div>
                    <div className="mb-2  block">
                        <Label htmlFor="email1" value="Your name" />
                    </div>
                    <input className=' w-72' id="name" placeholder="name" required type="text" name="name" />
                </div>

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
                    <input className=' w-72' id="password1" placeholder='password' required type="password" name="password" />
                </div>

                <Button className='w-96 mx-auto' type="submit"> Register </Button>
            </form>
        </div>
    );
};

export default Signup;