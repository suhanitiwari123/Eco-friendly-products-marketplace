'use client';
import data from "@/productData";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const Viewproduct = () => {

  const { id } = useParams();

  const [boughtProducts, setBoughtProducts] = useState(JSON.parse(localStorage.getItem('orders')) || []);

  const [productData, setProductData] = useState(data.find(item => item.id == id));

  const router = useRouter();

  const buyProduct = () => {
    const newData = [...boughtProducts, {...productData, orderedOn: new Date()}];
    localStorage.setItem('orders', JSON.stringify(newData));
    setBoughtProducts(newData);
    router.push('/orders');
  }

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">{productData.brand}</p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              {productData.title}

            </h2>
            <p className="text-gray-700 text-base md:text-lg">{productData.category}</p>
            <p className="text-3xl">₹{productData.price}</p>

            <button onClick={buyProduct} className="bg-blue-500 py-2 px-4 text-white rounded mt-4">Buy Now</button>
          </div>

        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-full">
            <img className="object-cover" src={productData.image} alt="" />
          </div>

        </div>
      </div>

    </div>
  );
};
export default Viewproduct