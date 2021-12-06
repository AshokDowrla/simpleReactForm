
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";



const Form = (props) => {
  if (props.SignUp) {
    return <SignUp />;
  } else {
    return <Login />;
  }
};

export default Form;
