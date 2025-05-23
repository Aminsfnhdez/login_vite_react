
import './Button.css';

const Button = ({type = "button", children}) => {
  return (
    <button className="boton" type={type}>
      {children}
    </button>
  );
};

export default Button;
