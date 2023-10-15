
import Swal from 'sweetalert2'
const AddCoffee = () => {


    const handleAddCoffee = event => {
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
const newCoffee = {name, quantity, supplier, taste, category, detals, photo}
console.log(newCoffee);

// send data to the server
fetch('http://localhost:5000/coffee', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(newCoffee)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if (data.insertedId) {
    Swal.fire({
      title: 'success!',
      text: 'coffee added successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
})

    }
    return (
        <div className="bg-[#F4F3F0] p-20">
            <h2 className="text-3xl font-extrabold text-center">Add a Coffee</h2>
 <form onSubmit={handleAddCoffee}>
    {/* 1 */}
 <div className="md:flex gap-3">
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Availble Quantity</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Availble Quantity" name="quantity" className="input input-bordered w-full" />
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
    <input type="text" placeholder="Enter coffee supplier" name="supplier" className="w-full input input-bordered" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered w-full" />
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
    <input type="text" placeholder="Enter coffee Category" name="Category" className="w-full input input-bordered" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Enter coffee detals" name="detals" className="w-full input input-bordered" />
  </label>
</div>
        </div>

        {/* 4 */}
        <div className="form-control w-full">
  <label className="label">
    <span className="label-text">photo</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Enter photo URl" name="photo" className="input input-bordered w-full" />
  </label>
</div>
{/* 5 */}
<button className="w-full btn mt-3 bg-orange-400">Add Coffee</button>

 </form>
        
        </div>
    );
};

export default AddCoffee;