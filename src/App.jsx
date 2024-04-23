// import { useEffect } from "react";
// import { useState } from "react";
// import Loading from "./components/Loading";
// import Tours from "./components/Tours";


// const url = 'https://course-api.com/react-tours-project';


// const App = () => {
//   const [isLoading, setIsLoading]= useState(true)
//   const [tours, setTours] = useState([])


//   const FetchData = async()=>{
//     setIsLoading(false)
//     try {
//       const respons = await fetch(url);
//       const tours = await respons.json();
//       setTours(tours);
//     } catch (error) {
//       console.log(error);
//     }
//     setIsLoading(false)

//   }

//   useEffect(()=>{
//     FetchData()
//   },[])

//   if(isLoading){
//     return <main>

//     <Loading />
//     </main>
//   }

//   if(tours.length === 0){
//     return <main>
//       <div className="title">
//         <h2>No Tours Available</h2>
//         <button type="button" style={{marginTop: '2rem'}} className="btn" onClick={()=>FetchData()}>
//           Refresh Page
//         </button>
//       </div>
//     </main>
//   }


//   const handleRemoveTour = (id)=>{
//     setTours((tours)=>tours.filter((tour)=> tour.id !== id))
//   }
//   return (
//   <main>
//  <Tours tours={tours} handleRemoveTour={handleRemoveTour}/>
//   </main>);
// };
// export default App;

import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import Tour from './components/Tour';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    // will use later
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

