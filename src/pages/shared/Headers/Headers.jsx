import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import {Link, NavLink} from 'react-router-dom';


const Headers = () => {
    const navigation =[
        {id:'1', name: 'Home', href:'/'},
        {id:'2', name: 'Login', href:'/login'},
        {id:'3', name: 'Register', href:'/register'},
        {id:'4', name: 'Create-product', href:'/hi'},
        {id:'5', name: 'About', href:'/by'},
    ]
    return (
        <Navbar
            fluid
            
            className=' sticky top-0'
        >
            <Navbar.Brand>
                    {/* <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg"
                    /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Humanities-Network
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                   
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        <Link to='/admin'>Dashboard</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {
                navigation.map(item =><NavLink
                key={item.id}
                to={item.href}
                className={({isActive}) => {
                   return 'px-3 py-2 rounded-md text-sm font-medium no-underline' + 
                   (isActive ? 'text-gray-300 bg-gray-400 hover:text-red-700' :
                      ' text-red-700 '  
                   )
                }}
                >

                    {item.name}
                </NavLink>)
                    
                }
               
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Headers;