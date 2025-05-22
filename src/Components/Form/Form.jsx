import './Form.css'
import Input from '../Inputs/Input'
import Button from '../Button/Button'
const Form = () => {
  return (
    <section className='register'>
        <form>
            <h3>Registro</h3>
            <Input placeholder="Escribe tu usuario" type="text" required/>
            <Input placeholder="Escribe tu correo" type="email" required/>
            <Input placeholder="Escribe tu contraseña" type="password" required/>
            <Input placeholder="Confirma tu contraseña" type="password" required/>
            <Button/>
        </form>
    </section>
  )
}

export default Form