import React, { useEffect } from 'react'
import './studentdashboard.css'

const StudentDashboard = () => {
    useEffect(() => {
       const fetchData = async () => {
         axios.get('')
       }

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
                            <a href="./DepartmentDashboard">Departments</a>
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
                                        <th>Student ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Admission Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td>01</td>
                                        <td>Tiger</td>
                                        <td>Nixon</td>
                                        <td>info@example.com</td>
                                        <td>2011/04/25</td>
                                        <td>
                                            <button className="btn-edit"><i className="fas fa-pen"></i></button>
                                            <button className="btn-delete"><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>Garrett</td>
                                        <td>Winters</td>
                                        <td>info@example.com</td>
                                        <td>2011/07/25</td>
                                        <td>
                                            <button className="btn-edit"><i className="fas fa-pen"></i></button>
                                            <button className="btn-delete"><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    
                                </tbody>
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

export default StudentDashboard