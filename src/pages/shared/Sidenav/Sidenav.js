import React from 'react';
import { Sidebar, Button } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { NavLink, Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    
     <div className='m-0'>
       <Sidebar aria-label="Sidebar with multi-level dropdown example" className='m-0 p-0'>
      <Sidebar.Items className='bg-gray-400 h-screen'>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={HiShoppingBag}
            label="E-commerce"
          >
            <Sidebar.Item href="#">
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Sales
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Refunds
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Shipping
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item
            href="#"
            icon={HiInbox}
          >
            <p>
              Inbox
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            icon={HiUser}
          >
            <Link to='/admin/users'>
            <p>
              Users
            </p>
            </Link>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiShoppingBag}
          >
            <p>
              Products
            </p>
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmRight}>
            <NavLink to='/admin/login'>
            
              AdminLogin
           
            </NavLink>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiTable}
          >
            <p>
              Sign Up
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <div className='mt-5'>
        <NavLink className='' to="/">
          <Button  gradientDuoTone="pinkToOrange">Back to Home</Button>
        </NavLink>
      </div>

      </Sidebar.Items>

      

    </Sidebar>
     </div>
    
  );
};

export default Sidenav;