
export const DELETE_STUDENT = "DELETE_STUDENT"
export const UPDATE_STUDENT = "UPDATE_STUDENT"
export const ADD_STUDENT = "ADD_StUDENT"

export function deleteStudent(id) {
    console.log("delete action id catch from comp",  id);
    return {
     type:DELETE_STUDENT,
     payload: id
    }
}

export function updateStudent(data) {
  console.log("data in action", data);
    return {
     type: UPDATE_STUDENT,
     payload: data
    }
}


export function addStudent(data) {
    console.log("data in action", data);
      return {
       type: ADD_STUDENT,
       payload: data
      }
  }