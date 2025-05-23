import React from 'react'
import Input from '../Inputs/Input'
import Button from '../Button/Button'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("username"));
        if(!user){
            setError("No hay usuarios registrados");
            return;
        }
        if(formData.email !== user.email || formData.password !== user.password){
            setError("Credenciales incorrectas");
            return;
        }
        setError("");
        alert("Login exitoso");
        navigate("/welcome", {state: {email: formData.email}});
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
            <h3>Inicio de sesión</h3>
            <Input placeholder="Escribe tu correo" type="email" required name="email" onChange={handleChange}/>
            <Input placeholder="Escribe tu contraseña" type="password" required name="password" onChange={handleChange}/>
            {error && <p className="error-message">{error}</p>}
            <Button type="submit">Iniciar sesión</Button>
            <p>¿No tienes una cuenta? <Link to="/">Registrarse</Link></p>
        </form>
    </section>
  )
}

export default Login