import './button.style.scss'
const costumButton = 'custom-button bg-orange text-white flex '

const Button = ({ children, checkout, paddingInline }) => {
  return (
    <button
      className={
        checkout ? costumButton + checkout : costumButton + paddingInline
      }
    >
      {children}
    </button>
  )
}

export default Button
