import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteUser, MultipleDeleteUser, ViewUser } from '../Redux/action/UserAction'

const ViewEmp = () => {
    const [status, setStatus] = useState("")
    const [mulripleDelete, setMultipleDelete] = useState([])
    let [fil, setFil] = useState("")
    const navigate = useNavigate()
    const DeleteEmp = (userId) => {
        dispatch(DeleteUser(userId))
        alert("Delete Employee Successfully")
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ViewUser())
    }, [])
    const users = useSelector(state => state.form.userList)
    const handlechangedelete = (id, checked) => {
        console.log(id)
        let all = [...mulripleDelete];
        if (checked) {
            all.push(id)
        } else {
            all = all.filter(val => val != id)
        }
        setMultipleDelete(all)
    }
    const MultipleDelete = () => {
        console.log(mulripleDelete);
        dispatch(MultipleDeleteUser(mulripleDelete))
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Salary</th>
                                            <th scope="col">Degignation</th>
                                            <th scope="col">Status</th>
                                            <th scope='col'>Delete</th>
                                            <th scope='col'>Edit</th>
                                            <th>
                                                <button onClick={() => MultipleDelete()}  className='btn btn-primary'>Multiple-Delete</button>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            users && Object.entries(users).map(([key, value]) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{key}</td>
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.password}</td>
                                                        <td>{value.city}</td>
                                                        <td>{value.salary}</td>
                                                        <td>{value.degignation}</td>
                                                        <td>
                                                            {
                                                                value.status == "Active" ? (
                                                                    <button style={{ color: "green", border: 0, background: "none", fontWeight: 700 }}>{value.status}</button>
                                                                ) : (
                                                                    <button style={{ color: "red", border: 0, background: "none", fontWeight: 700 }}>{value.status}</button>
                                                                )
                                                            }
                                                        </td>
                                                        <td>
                                                            <button onClick={() => DeleteEmp(key)}
                                                                className="btn btn-danger">Delete</button>

                                                        </td>
                                                        <td>
                                                            &nbsp; &nbsp; &nbsp;
                                                            <button
                                                                onClick={() => navigate('/Edit', { state: [key, value] })}
                                                                className="btn btn-primary">
                                                                Edit</button>
                                                        </td>
                                                        <td>
                                                            <input type="checkbox" onChange={(e) => handlechangedelete(key, e.target.checked)}
                                                                style={{ width: "100%" }} />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                                <Link to={"/"}>Add</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmp
