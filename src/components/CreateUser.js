import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, addUserRequest } from "../redux/user/user.slice";


const CreateUser = () => {
    const [formData,setFormData] = useState({name:'',email:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addUserRequest(formData));
        navigate('/');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">Add</button>
        </form>
    )
}

export default CreateUser;