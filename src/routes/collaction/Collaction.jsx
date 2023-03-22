import { useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import { ProductContext } from '../../context/product.context'
import './collaction.style.scss'

const Collaction = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className="products-container slide-left container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Collaction
