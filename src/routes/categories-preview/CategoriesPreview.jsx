import { useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import CategoryPreview from '../category-preview/CategoryPreview'

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <div className=" container">
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </div>
  )
}

export default CategoriesPreview
