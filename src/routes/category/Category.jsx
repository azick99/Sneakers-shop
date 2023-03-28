import { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoriesContext } from '../../context/categories.context'
import './category.syle.scss'

const Category = () => {
  const { title } = useParams()
  const { categories } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categories[title])
  const navigate = useNavigate()
  const navigateCollectionsHandler = () => navigate('/collections')
  useEffect(() => {
    setProducts(categories[title])
  }, [categories, title])

  return (
    <div className="container">
      <h1 onClick={navigateCollectionsHandler} className="category-title">{title.toUpperCase()}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default Category
