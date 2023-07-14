import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../store/CartSlice/CartSlice";



export const Cart = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.carts
    });
    const state = useSelector((state) => {
        return state.search
    });

    const naviget = useNavigate()

    // ------ remove add to cart item ---------
    const henldeRemove = (payload) => {
        dispatch(removeCart(payload)) 
    }

    let total = data.reduce((res, sum) => res += sum.price, 0)
    total = Math.ceil(total)

    const backhome = () => {
        naviget('/desboard')
    }

    const filterItem = data.filter((item) => {
        if (state.search === "") {
          return item
        }
        else if (item.title.toLowerCase().includes(state.search.toLowerCase())) {
          return item
        }
      })

    return (
        <>

            <div className="container">

                {
                   filterItem.length > 0 ?
                   filterItem.map((item, index) => {
                    return (
                        <>
                            <div className="row mb-4 justify-content-between rows">
                                <div className="col_1 col-md-5 col-lg-5">
                                    <div className="product_image" >
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="detail pt-4">
                                        <h5>{item.title}</h5>
                                        <p className="pt-2">Price: {item.price}</p>
                                    </div>
                                </div>

                                <div className="col_2 col-md-7 col-lg-6">
                                    <h2>{item.title}</h2>
                                    <p className="mt-4">{item.description}</p>
                                    <p>Reating: <span>{item.rating.rate}</span></p>
                                    <button onClick={() => henldeRemove(index)}>Delete</button>
                                </div>
                            </div>
                        </>
                    )
                }) :
                <h4 className="text-center mb-5">Data note Found</h4>
                }

                <button style={{ margin: '20px auto', display: 'block' }}>Total Bill: ${total}</button>
                <button className="position-fixed " style={{bottom: '20px', right: '30px'}} onClick={backhome}>Back</button>
            </div>
        </>
    )
}

