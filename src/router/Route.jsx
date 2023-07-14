import { Route, Routes } from 'react-router-dom'
import { Product } from '../product/Prodect';
import { Cart } from '../cart/Cart';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/CartSlice/CartSlice';


export const Routers = () => {

  const dispeatch = useDispatch()
  const state = useSelector((state) => {
    return state.search
  })
  const getdata = useSelector((state) => {
    return state.apiInt
  })

  useEffect(() => {
    dispeatch(getData())
  }, [])


  //=======> search bar ========> =========>
      //  =======> search bar ========> =========>

  const searchItem = getdata.data &&  getdata.data?.filter((item) => {
    if (state.search === "") {
      return item
    }
    else if (item.category.toLowerCase().includes(state.search.toLowerCase())) {
      return item
    }
  }) 


  return (

    <>

      <Routes>
        <Route path='desboard' element={
          searchItem ? searchItem?.map((item, index) => <Product category={item.category}
          img={item.image}
          id={item.id}
          price={item.price}
          key={index}
          title={item.title}
          description={item.description}
          rating={item.rating}
        />) :   getdata.isLoading && '...Loading'
      } />
        <Route path='/add-cart' element={<Cart />} />
       
      </Routes>
    </>
  );
}