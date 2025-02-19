import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
  const [msg, setMsg]=useState("");
  const [products,setProducts]=useState([]);

  useEffect(()=>{

    async function getdata(){

      await axios.get('http://localhost:7000/products')
      .then((response)=>{
        setProducts(response.data);
      })
      // console.log(response.data);
      // setProducts( response.data);
    }

   getdata();
  },[])
  // console.log(products)

  return (
    <>
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10">🛒 Our Products</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full max-w-7xl">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
              <p className="text-md text-gray-600 mt-2 font-semibold">${product.price}</p>
              <button className="mt-4 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default App