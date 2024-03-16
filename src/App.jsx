
import { useEffect, useState } from 'react';
import './App.css'
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Card from './Components/Card';



function App() {
  const [products, setProducts] = useState([]);
  const [card, setCart] = useState([]);
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
      alert('exit')
    }
  }
  console.log(card)

  return (
    <>

      <div className='container mx-auto '>
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className='container mx-auto '>
        <h1 className='text-3xl font-semibold text-center my-5'>Our Recipes</h1>
      </div>
      <div className='container mx-auto '>
        <div className='lg:flex lg:space-x-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-[50%] gap-5'>
            {
              products.map((pd) => <Card key={pd.recipe_id} card={pd} handelCard={handelCard}></Card>)
            }
          </div>
          <div className='w-96'>
            <h1 className='font-bold text-center'>Want to Cook</h1>
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
                card.map(item=>(
                  
                  <table class="table">

                <tbody>

                  <tr>
                    <th>1</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                    <button className='btn btn-primary btn-sm rounded-full '>Preparing</button>
                  </tr>

                </tbody>
              </table>
                ))
              }
              
            </div>
          </div>

        </div>

      </div>




    </>
  )
}

export default App
