/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const CoffeeCard = ({coffee, setCoffees, coffees}) => {

const {_id, name, quantity, supplier, taste, category, detals, photo} = coffee;

const handleDelete = _id => {
console.log(_id);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        
          fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    'Your coffee has been deleted.',
                    'success'
                  )
                  const remaining = coffees.filter(cof =>cof._id !== _id);
                  setCoffees(remaining)
        
            }
          })
        }
      })
}



     return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="flex justify-between w-full pr-4 pl-4">
 <div>
 <h2 className="card-title">n<span className="font-bold text-2xl">Name:</span> {name}</h2>
    <p>detals: {detals}</p>
    <h2 className=""><span className="font-bold text-2xl">category:</span> {category}</h2>
    <h3><span className="font-bold text-2xl">quantity:</span> {quantity}</h3>

<p><span className="font-bold text-2xl">supplier:</span>  {supplier}</p>
<p><span className="font-bold text-2xl">taste:</span> {taste}</p>
  
 </div>
    <div className="">
    <div className="btn-group btn-group-vertical space-y-4">
    <button className="btn">View</button>

 <Link to={`/updateCoffee/${_id}`}>
  <button className="btn">Edit</button>
 </Link>
  <button onClick={() =>handleDelete(_id)} className="btn">Delets</button>
</div>
    </div>

  </div>
</div>
        </div>
    );
};

export default CoffeeCard;