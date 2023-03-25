import { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoriesContext } from '../../context/categories.context'
import './collaction.style.scss'

const Collaction = () => {
  const { categories } = useContext(CategoriesContext)
  const navigate = useNavigate()
  const goToCategoryHandler = (navigation) => {
    navigate(`/${navigation}`)
  }

  return (
    <div className="slide-left container">
      {Object.keys(categories).map((title) => (
        <Fragment key={title}>
          <h2 onClick={() => goToCategoryHandler(title)}>{title}</h2>
          <div className="products-container ">
            {categories[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Collaction
