import React from 'react';
import { useQuery } from 'react-query';
//Components
import { Drawer } from '@mui/material';
import LinearProgress from '@mui/material';
import Grid from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import Badge from '@mui/material';
//styles
import { Wrapper } from './App.style';

//Types
export type CartItemType={
  id:number;
  category:string;
  description:string;
  image:string;
  title:string;
  amount:number

}

const getProducts =async():Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();


const  App=()=> {
  const {data,isLoading,error} =useQuery<CartItemType[]>(
    "products",
    getProducts
  )
console.log(data);

const getTotalItems =()=>null;
const handleAddToCart =()=>null;
const handleRemoveFromCart=()=>null;

if(isLoading) return <h1>Loading...</h1>;
if(error) return <div>Something went wrong</div>


  return (
    <div className="App">
      <h1>TS with React</h1>
    </div>
  );
}

export default App;
