import { getDatabase, onValue, ref, remove, set, update } from "firebase/database";
import { app } from "../../firebaseConfig";
const db = getDatabase(app)
export const AddUser = (emp) => {
    return async (dispatch) => {
        try {
            set(ref(db, "emp/" + emp.id), {
                name: emp.name,
                email: emp.email,
                password: emp.password,
                city: emp.city,
                salary: emp.salary,
                degignation: emp.degignation,
                status: emp.status
            });
            dispatch({
                type: 'adduser',
                payload: emp
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const ViewUser = () => {
    return async (dispatch) => {
        try {
            let Usersref = ref(db, "emp")
            onValue(Usersref, (val) => {
                let data = val.val()
                console.log(data)
                dispatch({
                    type: 'viewuser',
                    payload: data
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteUser = (userId) => {
    return async (dispatch) => {
        try {
            const UserRow = ref(db, "emp/" + userId)
            await remove(UserRow)
            dispatch({
                type: 'deleteuser',
                payload: userId
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const MultipleDeleteUser = (data) => {
    return async (dispatch) => {
        try {
            const multipleDelete = ref(db, "emp/" + data)
            await remove(multipleDelete)
            dispatch({
                type: 'multipledeleteuser',
                payload: data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const UpdateRecord = (user) => {
    return async (dispatch) => {
        console.log(user);
        try {
            const UserRow = ref(db, "emp/" + user.id)
            await update(UserRow,{
                name: user.name,
                email: user.email,
                password: user.password,
                city: user.city,
                salary: user.salary,
                degignation: user.degignation,
                status: user.status
            })
            dispatch({
                type: 'updateuser',
                payload: user
            })
           
        } catch (err) {
            console.log(err)
        }
    }
}