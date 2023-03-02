import './button.style.scss'
const costumButton = 'custom-button bg-orange text-white flex '

const Button = ({ children, checkout, paddingInline, ...otherProps }) => {
  return (
    <button
      className={
        checkout ? costumButton + checkout : costumButton + paddingInline
      }
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
