import UseAddStudents from "./UseAddStudents";

export default function AddStudents() {
  const {
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
  } = UseAddStudents();

  return (
    <div>
      <h1>Student SignUp Form</h1>
      <div>
        Name:{" "}
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="enter your name"
          type="text"
        />{" "}
      </div>
      <div>
        Email:{" "}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="enter your Email"
          type="text"
        />{" "}
      </div>
      <div>
        Roll No.:{" "}
        <input
          onChange={(e) => setRollNo(e.target.value)}
          value={rollNo}
          placeholder="enter your Roll No."
          type="text"
        />{" "}
      </div>
      <div>
        Class:{" "}
        <input
          onChange={(e) => setClassName(e.target.value)}
          value={className}
          placeholder="enter your Class"
          type="text"
        />{" "}
      </div>
      {loader ? (
        <button>Loading...</button>
      ) : (
        <button onClick={onSubmitHandler}>Submit</button>
      )}
    </div>
  );
}
