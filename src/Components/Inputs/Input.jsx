import './Input.css'

const Input = ({ placeholder, type, required, name, onChange }) => {
  return (
    <div className="inputs">
      <label htmlFor=""></label>
      <input type={type || 'text'} placeholder={placeholder} required={required} name={name} onChange={onChange} />
    </div>
  )
}

export default Input