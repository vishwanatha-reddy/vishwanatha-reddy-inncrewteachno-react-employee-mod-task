
//get employee list

export const asyncEmployeeList=()=>{
    return (dispatch)=>{
        dispatch(setEmployeeList())
    }
}

export const setEmployeeList=()=>{
    return {
        type:'EMPLOYEE_LIST'
    }
}

//delete employee record

export const asyncDeleteEmployee=(firstName)=>{
    return (dispatch)=>{
        dispatch(setDeleteEmployee(firstName))
    }
}

export const setDeleteEmployee=(name)=>{
    return {
        type:'DELETE_EMPLOYEE',
        payload:name
    }
}

// add employee record

export const asyncAddEmployee=(employeeRecord)=>{
    return (dispatch)=>{
        dispatch(setAddEmployee(employeeRecord))
    }
}

export const setAddEmployee=(employeeRecord)=>{
    return {
        type:'ADD_EMPLOYEE',
        payload:employeeRecord
    }
}
