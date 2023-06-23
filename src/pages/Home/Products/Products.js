import React from 'react';
import { Button, Card } from 'flowbite-react';

const Products = ({ product }) => {
    const {img, name, id} = product;
    return (

        <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <img src={img} alt="" />
            </h5>
            <h2 className='font-bold'>
                Name: {name}
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </p>
            <Button>
                <p>
                    Read more
                </p>

            </Button>
        </Card>

    );
};

export default Products;