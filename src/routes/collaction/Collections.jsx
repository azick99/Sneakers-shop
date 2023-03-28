import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/CategoriesPreview'
import './collaction.style.scss'

const Collections = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  )
}

export default Collections
