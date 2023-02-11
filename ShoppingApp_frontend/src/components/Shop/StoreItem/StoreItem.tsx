import "./StoreItem.css"
import {CurrencyFormater} from "../../utility/CurrencyFormater";

type StoreItemProps = {
 productname: string,
 amount: number,
 price: number,
 image: string



}
export function StoreItem({ productname, amount, price, image}: (StoreItemProps)) {

    const quantity = 0;


    return(
        <>
        <div className="card-container">
            <div className="card-image">
                <img src={image} alt="default"/>
            </div>
        </div>

        <div className="span-container">
            <span className="span-item">{productname}</span>
            <span className="span-item">{CurrencyFormater(price)}</span>
        </div>
        <div className="quantity-amount">
            {quantity === 0 ? (
            <button className="addcart">+ Add to Cart</button>
            ) : <div className="in_decrease_container">
                <button className="in_decrease">-</button>
                <span className="in_decrease_amount">
                    {quantity} in Cart
                </span>
                <button className="in_decrease">+</button>
                <div className="remove_amount">
                    <button className="rmv">Remove</button>
                </div>
            </div>
            }
        </div>
        </>
    )
}
