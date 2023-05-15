import './button.style.scss'

const Button = ({ children, ...otherProps }) => {
  return (
    <button
      className="custom-button bg-orange text-white flex"
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
