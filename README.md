# Install App

- One Step:
Gereksiz dosyaları temizle
- import react-query

```ts
#  QueryClient,QueryClientProvider  import et App sarmala
import { QueryClient,QueryClientProvider } from 'react-query';

const client=new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <QueryClientProvider client={client}>
     <App />
   </QueryClientProvider>
   
 
);
#App.tsx
- Types,Styles,Iconslar ile useQuery methodu ile data apiden çekiyoruz.👇

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
  const {data,isLoading,error} =useQuery<CartItemType[]>( // [] dikkat et
    "products",
    getProducts
  )
console.log(data);//20 tane json tipinde datamız geldi
  return (
    <div className="App">
     
      <h1>TS with React</h1>
    </div>
  );
}

export default App;


#functions,loading,error

_______-console.log(data)_____________-;

const getTotalItems =()=>null;
const handleAddToCart =()=>null;
const handleRemoveFromCart=()=>null;

if(isLoading) return <h1>Loading...</h1>;
if(error) return <div>Something went wrong</div>

```

- Two Step:

- Three Step:

- Four Step: