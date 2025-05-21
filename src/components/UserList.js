import { useDispatch, useSelector } from "react-redux"
import { selectError, selectLoading, selectUsers } from "../redux/user/user.selector";
import { useEffect } from "react";
import { deleteUser, deleteUserRequest, fetchUsers, fetchUsersRequest } from "../redux/user/user.slice";
import { Link } from 'react-router-dom';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(()=>{
        dispatch(fetchUsersRequest());
    },[dispatch])

    const handleDelete = (id) => {
        dispatch(deleteUserRequest(id));
      };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h2>User List</h2>
        <Link to="/create">Add User</Link>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email}) - 
              <Link to={`/edit/${user.id}`}>Edit</Link>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default UserList;