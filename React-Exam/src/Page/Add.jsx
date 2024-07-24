import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddUser } from "../Redux/action/UserAction";
import { Link } from "react-router-dom";

const AddEmp = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [degignation, setDegignation] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Date.now(),
      name: name,
      email: email,
      password: password,
      city: city,
      salary: salary,
      degignation: degignation,
      status: status,
    };
    console.log(obj);
    dispatch(AddUser(obj));
    setname("");
    setEmail("");
    setPassword("");
    setCity("");
    setSalary("");
    setDegignation("");
    setStatus("");
    alert("Add..!");
  };

  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Salary
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setSalary(e.target.value)}
                  value={salary}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Degination
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setDegignation(e.target.value)}
                  value={degignation}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Status
                </label>
                <select className="form-control" onChange={(e) => setStatus(e.target.value)} value={status}>
                                                <option> Select Employee Status </option>
                                                <option value="Active">Active</option>
                                                <option value="Deactive">Deactive</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to={"/view"}>View</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
