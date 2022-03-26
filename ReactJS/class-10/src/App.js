import React, { Component } from "react";
const data = [
  {
    uid: 1,
    name: "naveed",
    email: "learnwithnaveedsarwar@gmail.com",
    rollNo: 234234,
    className: "web and mobile",
  },

  {
    uid: 2,
    name: "Umar",
    email: "umar@gmail.com",
    rollNo: 2342002334,
    className: "web and mobile",
  },

  {
    uid: 3,
    name: "Ali",
    email: "Ali@gmail.com",
    rollNo: 23,
    className: "web and mobile",
  },
];

class App extends Component {
  constructor(props) {
    console.log("constructor");

    super(props);
    this.state = {
      userName: "",
      email: "",
      rollNo: "",
      className: "",
      students: data,
      isUpdate: false,
      updateUid: 0,
    };

  }

  componentWillMount(){
    console.log("componentWillMount");
  }


  componentDidMount(){
    console.log("componentDidMount");
  }


  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");

  }

  shouldComponentUpdate(){
  
    console.log("shouldComponentUpdate");
    if(this.state.isUpdate){
      return true
    }
    return true

  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps");
  }

  onChangeNameHandler = (e) => {
    console.log("event---", e.target.value);
    this.setState({ userName: e.target.value });
  };

  onSubmitHandler = () => {
    console.log("submit button clicked");
    if (
      !this.state.userName ||
      !this.state.email ||
      !this.state.rollNo ||
      !this.state.className
    ) {
      alert("All inputs are required");
      return;
    }

    // do some logics with the form data

    let student = {
      uid: 8,
      name: this.state.userName,
      email: this.state.email,
      rollNo: this.state.rollNo,
      className: this.state.className,
    };

    this.setState({
      students: [...this.state.students, student],
      userName: "",
      email: "",
      className: "",
      rollNo: "",
    });
  };

  onDeleteHandler = (uid) => {
    console.log("email", uid);

    let newStudents = this.state.students.filter(
      (student) => student.uid !== uid
    );

    this.setState({ students: newStudents });
  };

  onUpdateHandler = (item) => {
    this.setState({
      userName: item.name,
      email: item.email,
      className: item.className,
      rollNo: item.rollNo,
      updateUid: item.uid,
      isUpdate: true,
    });
  };

  onCtaUpdate = () => {
    let student = {
      uid: 8,
      name: this.state.userName,
      email: this.state.email,
      rollNo: this.state.rollNo,
      className: this.state.className,
    };

    let newStudents = this.state.students.map((item, index) => {
      if (item.uid === this.state.updateUid) {
        return student;
      } else {
        return item;
      }
    });

    this.setState({
      students: newStudents,
      userName: "",
      email: "",
      className: "",
      rollNo: "",
      isUpdate: false,
    });
  };

  render() {
    console.log("render");

    return (
      <div>
        <h1>Student SignUp Form</h1>
        <div>
          Name:{" "}
          <input
            onChange={(e) => this.setState({ userName: e.target.value })}
            value={this.state.userName}
            placeholder="enter your name"
            type="text"
          />{" "}
        </div>
        <div>
          Email:{" "}
          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            value={this.state.email}
            placeholder="enter your Email"
            type="text"
          />{" "}
        </div>
        <div>
          Roll No.:{" "}
          <input
            onChange={(e) => this.setState({ rollNo: e.target.value })}
            value={this.state.rollNo}
            placeholder="enter your Roll No."
            type="text"
          />{" "}
        </div>
        <div>
          Class:{" "}
          <input
            onChange={(e) => this.setState({ className: e.target.value })}
            value={this.state.className}
            placeholder="enter your Class"
            type="text"
          />{" "}
        </div>
        {this.state.isUpdate ? (
          <button onClick={this.onCtaUpdate}>Update</button>
        ) : (
          <button onClick={this.onSubmitHandler}>Submit</button>
        )}

        <h1>List of Students</h1>

        <table>
          <tr className="customTable">
            <th>No.</th>
            <th>UID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No.</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>

          {this.state.students.map((item, index) => {
            return (
              <tr key={index} className="customTable">
                <td>{index + 1}</td>
                <td>{item.uid}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.rollNo}</td>
                <td>{item.className}</td>
                <td>
                  <button onClick={() => this.onDeleteHandler(item.uid)}>
                    Delete
                  </button>
                  <button onClick={() => this.onUpdateHandler(item, index)}>
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
