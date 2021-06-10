const defaultState = {
    userDetails: {}
}

const userDetailsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "USER_DETAILS":
            return {
                ...state,
                userDetails: action.userDetails

            }
        default:
            return state;
    }
}

export default userDetailsReducer;