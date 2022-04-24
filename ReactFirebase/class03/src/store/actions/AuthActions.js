import { toast } from "react-toastify";
import { auth,db } from "../../config/Firebase";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";

export const doLogin = (user, setLoader) => async (dispatch) => {
  try {
    setLoader(true);
    // firebase login
    const userCredential = await auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
    var userData = userCredential.user;
    if (userData) {
      dispatch({
        type: LOGIN,
        payload: userData,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    // alert
  } finally {
    setLoader(false);
  }
  // login details
};

export const doLogout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    // alert
  }
};


export const doSignUp = (user, setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        // firebase login
        // firestore - collect user add 
        const userCredential = await auth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );
        var userData = userCredential.user;
        let resValue = await db.collection("users").add({
            ...user,
            id: userData.id
        });

        if (userData) {
          dispatch({
            type: SIGNUP,
            payload: userData,
          });
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        // alert
      } finally {
        setLoader(false);
      }
      // login details
};


export const getCurrentUser = (setLoader) => async (dispatch) => {
  try {
    setLoader(true);
    // firebase login
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: LOGIN,
          payload: user,
        });
        setLoader(false);
      } else {
        // User is signed out
      }
    });
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    // alert
  } finally {
    setLoader(false);
  }
};
