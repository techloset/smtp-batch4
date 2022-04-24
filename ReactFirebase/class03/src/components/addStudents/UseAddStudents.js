import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// actions
import { addStudent } from "../../store/actions/StudentsActions";

export default function UseAddStudents() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false)
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [className, setClassName] = useState("");

  const onSubmitHandler = () => {
    console.log("submit button clicked");
    if (!userName || !email || !rollNo || !className) {
      toast.error("please add all inputs")
      return;
    }

    // do some logics with the form data
    console.log("Values", userName, email, rollNo, className);

    let student = {
      name: userName,
      email: email,
      rollNo: rollNo,
      className: className,
    };

    // action
    console.log(" student in com", student);
    dispatch(addStudent(student, setLoader));

    setClassName("");
    setUserName("");
    setRollNo("");
    setEmail("");
  };

  return {
    onSubmitHandler,
    setUserName,
    setEmail,
    setRollNo,
    setClassName,
    userName,
    email,
    rollNo,
    className,
    loader,
  };
}
