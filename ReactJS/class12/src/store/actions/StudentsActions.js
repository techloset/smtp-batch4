
export const DELETE_STUDENT = "DELETE_STUDENT"
export const UPDATE_STUDENT = "UPDATE_STUDENT"

export function deleteStudent(id) {
    return {
     type:DELETE_STUDENT,
     payload: id
    }
}

export function updateStudent(data) {
    return {
     type: UPDATE_STUDENT,
     payload: data
    }
}