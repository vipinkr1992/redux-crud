import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUsers } from "../redux/user/user.selector";
import { useEffect, useState } from "react";
import { updateUser, updateUserRequest } from "../redux/user/user.slice";


const EditUser =()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(selectUsers);
    const {id} = useParams();

    const existingUser = users.find(user => user.id === id);
    const [formData, setFormData] = useState(existingUser || { name: '', email: '' });
  
    useEffect(() => {
      if (existingUser) setFormData(existingUser);
    }, [existingUser]);

    const handleChange = e => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateUserRequest({ ...formData, id: id }));
        navigate('/');
      };

      if (!existingUser) return <p>User not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <input name="name" value={formData.name} onChange={handleChange} required />
      <input name="email" value={formData.email} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );

}

export default EditUser;