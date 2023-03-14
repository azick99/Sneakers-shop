import './form-input.syle.scss'
const FormInput = ({ icons, alts, label, ...otherProps }) => {
  return (
    <div className="input-box">
      <span className="icon">
        <img src={icons} alt={alts} />
      </span>
      <input {...otherProps} />
      <label>{label}</label>
    </div>
  )
}

export default FormInput
