import React, { useEffect, useState } from 'react'
import './departmentdashboard.css'
import axios from 'axios'

const DepartmentDashboard = () => {
    const [Departments, setDepartments] = useState([])
    useEffect(() => {
       const fetchData = async () => {
         const response = axios.get(`http://localhost:8000/api/v1/departments`)
         console.log((await response).data);
         setDepartments((await response).data)
       }

       fetchData()
    }, [])



  return (
    <div>
        <div className="container">
        <div className="navbar">
            <div className="logo">
                <h2>eduVerse</h2>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="actions">
                <div className="actions-icons">
                    <i className="fas fa-user"></i>
                    <i className="fa-solid fa-bell"></i>
                </div>
                <div className="schoolprofile">
                    <img src="" alt=""/>
                    <h3>Name of School</h3>
                </div>
            </div>
        </div>
        <div className="container-body">
            <div className="left-sidebar">
                <h3>Menu</h3>
                <div className="controls">
                    <ul>
                        <li>
                            <a href="">Dashboard</a>
                        </li>
                        <li>
                            <a href="">Instructors</a>
                        </li>
                        <li>
                            <a href="">Students</a>
                        </li>
                        <li>
                            <a href="">Courses</a>
                        </li>
                        <li>
                            <a href="">Classes</a>
                        </li>
                        <li>
                            <a href="">Employees</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-body">
                <div className="main-container">
                    <div className="search-classes">
                        <div className="search-actions">
                            <h3>Students</h3>
                            <i className="fas fa-home"></i>
                        </div>
                        <input type="search" name="" id="" placeholder="Search Students..."/>
                    </div>
                    <div className="table-contain">
                        <h4>All Students List</h4>
                
                        <div className="controls">
                            <button className="btn-add"><i className="fas fa-plus"></i> Add New</button>
                        </div>
                
                        
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Department ID</th>
                                        <th>Department Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                {
                                    Departments.map((department) => (

                                <tbody key={department.department_id}>
                                    <tr>
                                        <td>{department.department_id}</td>
                                        <td>{department.department_name}</td>
                                        <td>
                                            <button className="btn-edit"><i className="fas fa-pen"></i></button>
                                            <button className="btn-delete"><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DepartmentDashboard