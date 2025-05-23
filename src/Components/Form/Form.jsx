import './Form.css'
import Input from '../Inputs/Input'
import Button from '../Button/Button'
import { useState } from 'react'
import { useNavigate, Link} from 'react-router-dom'
const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      setError("Las contraseñas no coinciden");
      return;
    }
    setError("");

    localStorage.setItem("username", JSON.stringify({
      email: formData.email,
      password: formData.password
    }));
    alert("Registro exitoso");
    navigate("/login");
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
            {error && <p className="error-message">{error}</p>}
            <Button type="submit">Registrar</Button>
            <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
        </form>
    </section>
  )
}

export default Form