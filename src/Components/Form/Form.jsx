import './Form.css'
import Input from '../Inputs/Input'
import Button from '../Button/Button'
const Form = () => {
  return (
    <section className='register'>
        <form>
            <h3>Registro</h3>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Button/>
        </form>
    </section>
  )
}

export default Form