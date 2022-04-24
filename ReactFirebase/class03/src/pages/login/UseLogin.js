import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// actions
import { doLogin } from "../../store/actions/AuthActions";

export default function UseLogin() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const onSubmitHandler = () => {
    console.log("submit button clicked");
    if ( !email || !password) {
      toast.error("please add all inputs")
      return;
    }

    // do some logics with the form data

    let user = {
      password: password,
      email: email,
    };

    // action
    dispatch(doLogin(user, setLoader));

    setPassword("");
    setEmail("");
  };

  return {
    onSubmitHandler,
    setPassword,
    setEmail,
    email,
    password,
    loader,
  };
}
