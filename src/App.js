import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  // state variable to store poekemon data from API
  const [pokemons, setPokemons] = useState([])

  // useEffect - to do API calls only when the component first renders. 
  useEffect(()=> {
    axiosPokemons();
  },[])

  // use Axios 
  const axiosPokemons = () => {
    // console.log('axios button is working too!')
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((res) => {
        console.log(res.data.results)
        setPokemons(res.data.results)
      })
      .catch(err => console.log(err))
  }

    
// use Vanila JS 
  // const fetchPokemons = ()=> {
  //   console.log('fetch button is working!')
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(jsonRes => {
  //       setPokemons(jsonRes.results)
  //       console.log(jsonRes.results)
  //     })
  //     .catch(someErr => console.log(someErr))
  // }

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={axiosPokemons}>Fetch Pokemons</button>
      <hr/>
      {/* {JSON.stringify(pokemons)} */}
      
      <ul>
        {
              pokemons.map((pokemon, i)=>{
                return (
                  <li key={i}>{pokemon.name}</li> 
                  
                              
                )
              })
            }
      </ul>
        
      
        
      

    </div>
  );
}

export default App;
