const employeeInitialState = [
    {
        id:new Date(),
        firstName: 'tom',
        lastName: 'hank',
        DOB: '07/23/1995',
        profilePhoto: 'https://bit.ly/3eNp3Dw',
        designation:'developer',
        experience: 9
    },
    {
        id:new Date(),
        firstName: 'kevin',
        lastName: 'smith',
        DOB: '07/07/1992',
        profilePhoto: 'https://bit.ly/3eNp3Dw',
        designation:'tester',
        experience: 8
    },
    {
        id:new Date(),
        firstName: 'john',
        lastName: 'henry',
        DOB: '09/13/1985',
        profilePhoto: 'https://bit.ly/3eNp3Dw',
        designation:'manager',
        experience: 14
    },

];

const employeeReducer = (state = employeeInitialState, action) => {
    switch (action.type) {
        case 'EMPLOYEE_LIST':
            return [...state];
        case 'ADD_EMPLOYEE':
            return [...state,action.payload];
        case 'DELETE_EMPLOYEE':{
            return state.filter((item)=>{
                if(item.firstName!==action.payload){
                    return {...item}
                }
            })
        }
        default:
            return [...state]
    }
}

export default employeeReducer;