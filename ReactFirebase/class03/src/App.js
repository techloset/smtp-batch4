import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routing from "./routing/Routing";
import { getCurrentUser } from "./store/actions/AuthActions";

export default function App() {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser(setLoader));
  }, []);

  return (
    <div>
      <ToastContainer />
      {loader ? <div>Fetching User ......</div> : <Routing />}
    </div>
  );
}
