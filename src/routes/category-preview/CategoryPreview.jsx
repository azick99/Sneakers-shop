import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import './category-preview.style.scss'

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate()
  const navigateHanlder = () => {
    navigate(`/${title}`)
  }
  return (
    <div className="category-preview-container container">
      <h2  onClick={navigateHanlder}>
        {title.toUpperCase()}
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview
