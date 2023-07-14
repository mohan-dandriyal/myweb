import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtoCart } from "../store/CartSlice/CartSlice"

export const Product = (props) => {

    const addData = useDispatch()
    const navigete = useNavigate()

    const hendleaddtoCart = (payload) => {
        addData(addtoCart(payload))
    }

    const chackCard = () => {
        navigete('/add-cart')
    }
    return (
        <>
            <div className="cart">
                <div className="product_img text-center">
                    <img src={props.img} height="100%" width="90%" alt="" />
                </div>
                <div className="card_body mt-3 text-center">
                    <h4>{props.category}</h4>
                    <p>Price: ${props.price}</p>
                    <button onClick={chackCard} className="me-2">By Now</button>
                    <button
                        onClick={() => hendleaddtoCart({
                            image: props.img,
                            id: props.id,
                            category: props.category,
                            rating: props.rating,
                            price: props.price,
                            title: props.title,
                            description: props.description
                        })}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}