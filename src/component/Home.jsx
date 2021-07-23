import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { asyncDeleteEmployee } from '../actions/employeeAction';
import { asyncAddEmployee } from '../actions/employeeAction';

const Home = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [DOB, setDOB] = useState('');
    const [designation, setDesignation] = useState('');
    const [profile, setProfile] = useState('');
    const [experience, setExperience] = useState('');
    const [list,setList]=useState([]);


    const dispatch = useDispatch();

    const employees = useSelector((store) => {
        return store.employeeList;
    })
    // useEffect(()=>{
    //     setList(employees)
    // },[employees])

    console.log(employees);

    const handleDelete = (firstName) => {
        console.log(firstName);
        dispatch(asyncDeleteEmployee(firstName));
    }

    //handle first name
    const handleFName = (e) => {
        const input = e.target.value;
        setFirstName(input);
    }

    //handle last name
    const handleLName = (e) => {
        const input = e.target.value;
        setLastName(input);
    }

    //handle DOB
    const handleDOB = (e) => {
        const input = e.target.value;
        setDOB(input);
    }

    //handle DOB
    const handleDesignation = (e) => {
        const input = e.target.value;
        setDesignation(input);
    }

    //handle profile image
    const handleProfileImage = (e) => {
        const input = e.target.value;
        setProfile(input);
    }

    //handle experinece
    const handleExperience = (e) => {
        const input = e.target.value;
        setExperience(input);
    }

    const clearAll = () => {
        setFirstName('');
        setLastName('');
        setProfile('');
        setDOB('');
        setDesignation('');
        setExperience('');
    }

    //handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const empRecord = {};
        empRecord.id = new Date();
        empRecord.firstName = firstName;
        empRecord.lastName = lastName;
        empRecord.DOB = DOB;
        empRecord.designation = designation;
        empRecord.profilePhoto= profile;
        empRecord.experience = experience;
        //dispatching action to add employee record
        dispatch(asyncAddEmployee(empRecord));
        clearAll();
    }


    return (
        <>
            <h2 className="text-center">Employee Details Form</h2>
            <form onSubmit={handleSubmit} style={{ border: '2px solid gray', padding: '2rem' }} >
                <div style={{ width: '35rem' }}>
                    <label style={{ display: 'block' }}>First Name</label>
                    <input type="text" value={firstName} onChange={(e) => { handleFName(e) }}
                        placeholder="Enter Employee first name"
                        style={{ width: '25rem' }}
                    />
                </div>
                <div style={{ width: '35rem' }}>
                    <label style={{ display: 'block' }}>Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => { handleLName(e) }}
                        placeholder="Enter Employee last name"
                        style={{ width: '25rem' }}
                    />
                </div>
                <div style={{ width: '35rem' }}>
                    <label style={{ display: 'block' }}>DOB</label>
                    <input type="text" value={DOB} onChange={(e) => { handleDOB(e) }}
                        placeholder="Enter Employee DOB"
                        style={{ width: '25rem' }}
                    />
                </div>
                <div style={{ width: '35rem' }}>
                    <label style={{ display: 'block' }}>Designation</label>
                    <input type="text" value={designation} onChange={(e) => { handleDesignation(e) }}
                        placeholder="Enter Employee Designation"
                        style={{ width: '25rem' }}
                    />
                </div>
                <div style={{ width: '35rem' }}>
                    <label style={{ display: 'block' }}>Profile photo</label>
                    <input type="text" value={profile} onChange={(e) => { handleProfileImage(e) }}
                        placeholder="Enter Employee profile photo link"
                        style={{ width: '25rem' }}
                    />
                </div>
                <div style={{ width: '35rem' }}>
                    <label style={{ display: 'block' }}>Experience</label>
                    <input type="text" value={experience} onChange={(e) => { handleExperience(e) }}
                        placeholder="Enter Employee Experience"
                        style={{ width: '25rem' }}
                    />
                </div>
                <input type="submit" value="Add Employee" className=" btn btn-success" style={{ marginTop: '2rem' }} />
            </form>

            <h2 className="text-center">Employees List</h2>
            <table className="table border border-dark">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>DOB</td>
                        <td>Designation</td>
                        <td>Profile Image</td>
                        <td>Experience</td>
                        <td>Edit details</td>
                        <td>Delete employee</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(({ id, firstName, lastName, DOB, designation, experience, profilePhoto }, i) => {
                            return <tr key={id + i}>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{DOB}</td>
                                <td>{designation}</td>
                                <td>{profilePhoto}</td>
                                <td>{experience}</td>
                                <td><button className="btn btn-primary">Edit</button></td>
                                <td><button onClick={() => { handleDelete(firstName) }} className="btn btn-danger">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </>
    );


}

export default Home;