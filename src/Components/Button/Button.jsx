
import './Button.css';

const Button = ({type = "button", children, onClick}) => {
  return (
    <button className="boton" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
