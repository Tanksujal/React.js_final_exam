let initialState = {
    userList: [],
    error: null
}

const UserReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'adduser':
            return {
                ...state,
                userList: [...state.userList, action.payload]
            }

        case 'viewuser':
            return {
                ...state,
                userList: action.payload
            }

        case 'deleteuser':
            return {
                ...state,
                userList: state.userList.filter((val) => val.id !== action.payload)
            }
        case 'multipledeleteuser':
            const updatedList = { ...state.userList };
            action.payload.forEach(id => {
                delete updatedList[id];
            });
            console.log(updatedList);
            return {
                ...state,
                userList: updatedList
            }
        case 'updateuser' : 
        return {
            ...state,
            userList: state.userList.map((val) => {
                if (val.id === action.payload.id) {
                    return action.payload;
                }
            })
        }
        default:
            return state;
    }

}
export default UserReducer;