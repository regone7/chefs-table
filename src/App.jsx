
import { useEffect, useState } from 'react';
import './App.css'
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Card from './Components/Card';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [products, setProducts] = useState([]);
  const [card, setCart] = useState([]);
  const [cook, setCook] = useState([]);
  useEffect(() => {
    fetch("./mydata.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
  }, [])

  const handelCard = (p) => {
    const isExits = card.find(pd => pd.recipe_id == p.recipe_id);
    if (!isExits) {
      setCart([...card, p])
    }
    else {
      toast("exits only one click accept");
    }
  }
  // console.log(card)
  // const handelCook = (p) => {
  //   const isExits = cook.find(pd => pd.recipe_id == p.recipe_id);
  //   if (!isExits) {
  //     setCook([...cook, p])
  //   }

  // }
  // console.log(cook)

  const handelPreparing = (food) => {
   
    const newCard = card.filter(item => item.recipe_id != food.recipe_id);
    setCart(newCard);
    const isCooking = cook.find(pd => pd.recipe_id == food.recipe_id);
    if (!isCooking) {
      setCook([...cook, food])
    }


    // const isCooking = cook.find(pd => pd.recipe_id == id);
    // console.log(isCooking)
  
    

  }


  return (
    <>

      <div className='container mx-auto '>
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className='container mx-auto '>
        <h1 className='text-3xl font-semibold text-center my-5'>Our Recipes</h1>
        <p className='text-center my-7'>Search and filter through our entire library of delicious recipes. Cherish your loved ones and feed them well.</p>
      </div>
      <div className='container mx-auto '>
        <div className='lg:flex lg:space-x-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-[50%] gap-5'>
            {
              products.map((pd) => <Card key={pd.recipe_id} card={pd} handelCard={handelCard}></Card>)
            }
          </div>
          <div className='w-96'>
            <h1 className='font-bold text-center'>Want to Cook : {card.length}  </h1>
            <div class="overflow-x-auto">
              <table class="table">

                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="overflow-x-auto">
              {
                card.map((item, index) => (
                  <table class="table">

                    <tbody>

                      <tr>
                        <th>{index + 1}</th>
                        <td>{item.recipe_name}</td>
                        <td>{item.preparing_time}</td>
                        <td>{item.calories}</td>
                        <button className='btn btn-primary btn-sm rounded-full ' onClick={() => handelPreparing(item)}>Preparing</button>
                      </tr>

                    </tbody>
                  </table>
                ))
              }

            </div>
            <h1 className='font-bold text-center mt-16'>Ready to Cook: {cook.length}</h1>
            <div class="overflow-x-auto">
              <table class="table">

                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="overflow-x-auto">
              {
                cook.map((item1, index) =>(
                  <table class="table">

                    <tbody>

                      <tr>
                        <th>{index + 1}</th>
                        <td>{item1.recipe_name}</td>
                        <td>{item1.preparing_time}</td>
                        <td>{item1.calories}</td>
                      </tr>

                    </tbody>
                  </table>
                ))
              }

            </div>
          </div>

          <ToastContainer />
        </div>


      </div>




    </>
  )
}

export default App
