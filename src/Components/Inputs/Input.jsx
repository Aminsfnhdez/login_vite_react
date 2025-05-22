import './Input.css'

const Input = ({placeholder, type, required}) => {
  return (
    <div className="inputs">
        <label htmlFor=""></label>
        <input type={type || 'text'} placeholder={placeholder} required={required}/>
    </div>
  )
}

export default Input