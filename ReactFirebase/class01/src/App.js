import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/counter/Counter";
import Student from "./components/students/Student";

import { db } from "./config/Firebase";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const store = useSelector((store) => store.CounterReducer);
  console.log("store in app.js", store);



  const deleteUser = async(id)=> {
    try {

      await db.collection("users").doc(id).delete()
      
    } catch (error) {
      
    }
  }

  const updateUser = async(id)=> {
    try {

      let data = {
        userName: 'Ali'
      }

      await db.collection("users").doc(id).update(data)
      
    } catch (error) {
      
    }
  }

  const addUser = async () => {
    try {
      let data = {
        userName: "Naveed",
        email: "test@naveed.com",
        phone: "2323",
      };

      let resValue = await db.collection("users").add(data);
      // let resUpdate = await db.collection("users").update(data)
      // let resDelete = await db.collection("users").delete(data)
      console.log("sadf");
      console.log("resValue", resValue);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getUsers = async () => {
    setLoading(true)
    try {
      let users = [];
      let resValueGet = await db.collection("users").get()
      resValueGet.forEach((doc) => {
        users.push({id:doc.id,...doc.data()});
        console.log(doc.id, " => ", doc.data());
      });

      console.log("resValueGet users", users);
      setUsers(users)
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false)
    }
  };

  const addUserOld = () => {
    let data = {
      userName: "Naveed",
      email: "test@naveed.com",
      phone: "2323",
    };

    db.collection("users")
      .add(data)
      .then((success) => {
        console.log("success", success);
        db.collection("users")
          .update(data)
          .then((result) => {
            db.collection("users")
              .delete(data)
              .then(() => {});
          })
          .catch((error) => {
            console.log("error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });

    // console.log("sadf");
    // console.log("resValue", resValue);
  };

  if (loading) {
    return <h1>Loading ....</h1>
  }

  return (
    <div>
      <button onClick={addUser}>Add Data</button>
      {users.length > 0 ? (
        users.map((item, index) => {
          return (
            <div>
              <p>
                Id:{item.id}, UserName: {item.userName}
              </p>
            </div>
          );
        })
      ) : (
        <div>No Data Found</div>
      )}

      {/* <Counter/>
     <Student/> */}
    </div>
  );
}

// submit (Action) > Action RUn Firebase > Reducer > Store
