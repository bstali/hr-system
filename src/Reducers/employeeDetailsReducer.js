const defaultState = {
    employeeDetails: {}
}

const employeeDetailsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "EMPLOYEE_DETAILS":
            return {
                ...state,
                employeeDetails: action.employeeDetails
            }
            
        default:
            return state;
    }
}

export default employeeDetailsReducer;