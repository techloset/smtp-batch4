import { toast } from "react-toastify";

import { db } from "../../config/Firebase";

export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const ADD_STUDENT = "ADD_StUDENT";
export const FETCH_STUDENTS = "FETCH_STUDENTS";
export const FETCH_STUDENTS_ERROR = "FETCH_STUDENTS_ERROR";

export const deleteStudent = (id) => async (dispatch) => {
  console.log("delete action id catch from comp", id);
  try {
    await db.collection("students").doc(id).delete();
    dispatch({
      type: DELETE_STUDENT,
      payload: id,
    });
    toast.success("Successfully Deleted");
  } catch (error) {
    console.log("error", error);
    toast.error("something went wrong!");
  }
};

export function updateStudent(data) {
  console.log("data in action", data);
  return {
    type: UPDATE_STUDENT,
    payload: data,
  };
}

export const addStudent = (data, setLoader) => async (dispatch) => {
  try {
    setLoader(true);
    let resValue = await db.collection("students").add(data);
    console.log("resValue", resValue.id);
    dispatch({
      type: ADD_STUDENT,
      payload: {
        ...data,
        uid: resValue.id
      }
    })
  } catch (error) {
    console.log("error action", error);
  } finally {
    setLoader(false);
  }
};

export const fetchStudents = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    let students = [];
    let resValueGet = await db.collection("students").get();
    resValueGet.forEach((doc) => {
      students.push({ uid: doc.id, ...doc.data() });
      console.log(doc.id, " => ", doc.data());
    });
    console.log("resValueGet users", students);

    dispatch({
      type: FETCH_STUDENTS,
      payload: students,
    });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: FETCH_STUDENTS_ERROR,
      payload: error,
    });
  } finally {
    setLoading(false);
  }
};
