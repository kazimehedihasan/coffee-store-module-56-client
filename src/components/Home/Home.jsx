import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const Home = () => {
  const  loddedCoffees = useLoaderData();

const [coffees , setCoffees] = useState(loddedCoffees);

  console.log(coffees);
    return (
        <div className="grid grid-cols-2 mt-9 gap-5">
          {
            coffees.map(coffee => <CoffeeCard 
                key={coffees._id} 
                coffee={coffee}
            
                coffees={coffees}
                setCoffees={setCoffees}
            
            ></CoffeeCard>)
          }
        </div>
    );
};

export default Home;