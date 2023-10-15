import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, detals, photo} =coffee;


    const handleUpdateCoffee = event => {
        console.log('addCoffee called with');
event.preventDefault();
const form = event.target;
const name = form.name.value;
const quantity = form.quantity.value;
const supplier = form.supplier.value;
const taste = form.taste.value;
const category = form.Category.value;
const detals = form.detals.value;
const photo = form.photo.value;
const updateCoffee = {name, quantity, supplier, taste, category, detals, photo}
console.log(updateCoffee);

// send data to the server
fetch(`http://localhost:5000/coffee/${_id}`, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(updateCoffee)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if (data.modifiedCount > 0) {
    Swal.fire({
      title: 'success!',
      text: ' Coffee update successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
})

    }

    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center">Update Coffee</h2>
             <form onSubmit={handleUpdateCoffee}>
    {/* 1 */}
 <div className="md:flex gap-3">

            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Coffee Name" name="name" defaultValue={name} className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Availble Quantity</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Availble Quantity" name="quantity" defaultValue={quantity} className="input input-bordered w-full" />
  </label>
</div>
        </div>

{/* 2 */}
        
        <div className="flex gap-3">
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Enter coffee supplier" name="supplier" defaultValue={supplier} className="w-full input input-bordered" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Enter coffee taste" name="taste" defaultValue={taste} className="input input-bordered w-full" />
  </label>
</div>
        </div>

{/* 3 */}

        <div className="flex gap-3">
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Enter coffee Category" name="Category" defaultValue={category} className="w-full input input-bordered" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Enter coffee detals" name="detals" defaultValue={detals} className="w-full input input-bordered" />
  </label>
</div>
        </div>

        {/* 4 */}
        <div className="form-control w-full">
  <label className="label">
    <span className="label-text">photo</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Enter photo URl" name="photo" defaultValue={photo} className="input input-bordered w-full" />
  </label>
</div>
{/* 5 */}
<button className="w-full btn mt-3 bg-orange-400">Update</button>

 </form>
        </div>
    );
};

export default UpdateCoffee;