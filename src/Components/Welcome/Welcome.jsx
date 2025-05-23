import './Welcome.css'
import Button from '../Button/Button'
import { useLocation, useNavigate } from 'react-router-dom'
const Welcome = () => {
    const location = useLocation();
    const {email} = location.state || {};
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem("username", "false");
        navigate("/login");
    }
  return (
    <section className="welcome">
        <nav>
            <h3>Bienvenido</h3>
            <p>Gracias por registrarte, {email}</p>
            <Button onClick={handleLogout}>Cerrar sesión</Button>
        </nav>
        <div className="container">
            
        </div>
    </section>
  )
}

export default Welcome