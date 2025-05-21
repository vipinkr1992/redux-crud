import axios from '../../api/api'
import { USER_ACTION_TYPES } from './user.types';

//thunk
export const fetchUsers = () => async dispatch => {
    dispatch({type:USER_ACTION_TYPES.FETCH_USERS_REQUEST});
    try{
        const response = await axios.get('/users');
        dispatch({type:USER_ACTION_TYPES.FETCH_USERS_SUCCESS,payload:response.data});
    }
    catch(error){
        dispatch({type:USER_ACTION_TYPES.FETCH_USERS_FAILURE,payload:error.message});
    }
}

export const addUser = (user) => async dispatch => {
    const response = await axios.post('/users',user);
    dispatch({type:USER_ACTION_TYPES.ADD_USER,payload:response.data});
} 

export const updateUser = (updateUser) => async dispatch => {
    const response = await axios.put(`/users/${updateUser.id}`,updateUser);
    dispatch({type:USER_ACTION_TYPES.UPDATE_USER,payload:response.data});
}

export const deleteUser = (id) => async dispatch => {
    await axios.delete(`/users/${id}`);
    dispatch({type:USER_ACTION_TYPES.DELETE_USER,payload:id});
}