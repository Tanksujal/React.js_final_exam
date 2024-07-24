import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddUser, UpdateRecord } from '../Redux/action/UserAction';
import { Link, useLocation } from 'react-router-dom';

const EditEmp = () => {

    const location = useLocation()
    console.log(location);
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")
    const [salary, setSalary] = useState("")
    const [degignation, setDegignation] = useState("")
    const [status, setStatus] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: location.state[0],
            name: name,
            email: email,
            password: password,
            city: city,
            salary: salary,
            degignation: degignation,
            status: status
        }
        dispatch(UpdateRecord(obj));
        setname("");
        setEmail("");
        setPassword("");
        setCity("");
        setSalary("");
        setDegignation("");
        setStatus("");

    }
    useEffect(() => {
        setname(location?.state[1]?.name);
        setEmail(location.state[1].email);
        setPassword(location.state[1].password);
        setCity(location.state[1].city);
        setSalary(location.state[1].salary);
        setDegignation(location.state[1].degignation);
        setStatus(location.state[1].status);
    }, [location.state])

    return (
        <div >
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
                  Sakary
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
              <Link to={"/view"}>view</Link>
            </form>
          </div>
        </div>
      </div>
        </div>
    )

}

export default EditEmp