import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import { useSelector } from 'react-redux'
import { selectCategories } from '../../store/categories/category.selector'

const Categories = () => {
  const { title } = useParams()
  const  categories  = useSelector(selectCategories)
  const category = Object.keys(categories).find((t) => t === title)
  return (
    <div className="slide-left container">
      <h2>{category}</h2>
          <div className="products-container ">
            {category.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
    </div>
  )
}

export default Categories
