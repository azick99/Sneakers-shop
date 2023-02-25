import './button.style.scss'
const costumButton = 'custom-button bg-orange text-white flex'

const Button = ({ children }) => {
  return <button className={costumButton}>{children}</button>
}

export default Button
