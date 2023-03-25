import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoriesContext } from '../../context/categories.context'

const Categories = () => {
  const { title } = useParams()
  const { categories } = useContext(CategoriesContext)
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
