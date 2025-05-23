import './Form.css'
import Input from '../Inputs/Input'
import Button from '../Button/Button'
import { useState } from 'react'
const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <section className='register'>
        <form onSubmit={handleSubmit}>
            <h3>Registro</h3>
            <Input placeholder="Escribe tu usuario" type="text" required name="username" onChange={handleChange}/>
            <Input placeholder="Escribe tu correo" type="email" required name="email" onChange={handleChange}/>
            <Input placeholder="Escribe tu contraseña" type="password" required name="password" onChange={handleChange}/>
            <Input placeholder="Confirma tu contraseña" type="password" required name="confirmPassword" onChange={handleChange}/>
            <Button type="submit">Registrar</Button>
        </form>
    </section>
  )
}

export default Form