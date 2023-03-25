import Plus from '../../assets/images/icon-plus.svg'
import Minus from '../../assets/images/icon-minus.svg'

const Counter = ({ quantity, addToCart, removeFromCart }) => {
  return (
    <div className="count-container flex">
      <div onClick={removeFromCart}>
        <img src={Minus} alt="minus" />
      </div>
      <span className="count text-bold text-dark">{quantity}</span>
      <div onClick={addToCart}>
        <img src={Plus} alt="plus" />
      </div>
    </div>
  )
}

export default Counter
