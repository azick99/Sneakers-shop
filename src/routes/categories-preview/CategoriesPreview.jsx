import CategoryPreview from '../category-preview/CategoryPreview'
import { useSelector } from 'react-redux'
import { selectCategories } from '../../store/categories/category.selector'

const CategoriesPreview = () => {
  const  categories  = useSelector(selectCategories)

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
