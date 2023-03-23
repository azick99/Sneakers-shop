import { ReactComponent as Plus } from '../../assets/images/icon-plus.svg'
import { ReactComponent as Minus } from '../../assets/images/icon-minus.svg'

const Counter = ({ handleAddToCart, handleRemoveFromCart, productCounter }) => {
  return (
    <div className="count-container flex">
      <div onClick={handleRemoveFromCart}>
        <Minus />
      </div>
      <span className="count text-bold text-dark">{productCounter}</span>
      <div onClick={handleAddToCart}>
        <Plus />
      </div>
    </div>
  )
}

export default Counter
