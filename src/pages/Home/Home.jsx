import React from 'react';
import Search from './Search/Search';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import { useEffect } from 'react';
import Products from './Products/Products';
import Typical from 'react-typical'
const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

//     const [search, setSearch] = useState([]);
//     e.prevendDeafult();
//     const form = e.target;

//    const searchBar = e =>{
//     console.log(e.target.value)


  
    return (
        <div className='w-11/12 mx-auto'>
            <h2>Total Products = {products.length}</h2>
            <p>I am <Typical 
            loop={Infinity}
            wrapper='b'
            steps={[
                'web developer',
                1000,
                'web designer',
                1000,
                'a husband',
                1000,
            ]}
            /></p>
            
           <form className='flex  justify-center rounded-lg mt-5 mb-20'>
            
                <input type="text" placeholder=''
                onChange={(e) => e.target.value}
                />
                <div>
                <Button className=' rounded-none' gradientDuoTone="pinkToOrange" outline>Search</Button>
                </div>

            

           </form>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            products.map(product => <Products
            key={product.id}
            product={product}
            ></Products>)
        }
        </div>

        </div>
    );
};

export default Home;