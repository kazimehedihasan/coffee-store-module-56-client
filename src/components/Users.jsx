import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
const loadedUsers = useLoaderData();
const [users, setUsers] = useState(loadedUsers)

const handleDelete = id =>{
// make sure user is confirmed to delete
fetch(`http://localhost:5000/user/${id}`,{
  method: 'DELETE',
})
.then(res =>res.json())
.then(data =>{
  console.log(data);
  if (data.deletedCount > 0) {
    console.log('deleted successfully');
    // remove the user from the ui
const remainingUsers = users.filter(user => user._id !== id)
setUsers(remainingUsers)
  }
})

}


    return (
        <div>
            <h2>users: {loadedUsers.length}</h2>



            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>email</th>
        <th>created at</th>
        <th>Last logged in</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   {
   users.map(user =><tr key={user._id}>
        <th>1</th>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.lastLoggedAt}</td>
        <td><button className="btn " onClick={()=> handleDelete(user._id)}>delete</button></td>
      </tr>)
   }
   

   
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;