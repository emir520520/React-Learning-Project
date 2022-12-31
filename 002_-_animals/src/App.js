import {useState} from "react";
import AnimalShow from './AnimalShow';
import './css/App.css';

function getRandomAnimal(){
    const animals=['bird','cat','cow','dog','gator','horse'];

    return animals[Math.floor(Math.random()*animals.length)];
}

function App() {
    const [animals, setAnimal]=useState([]);
    const handleClick=()=>{
        setAnimal([...animals, getRandomAnimal()]);
    };

    const renderedAnimals=animals.map((animalType, index)=>{
        return (<AnimalShow type={animalType} key={index} />);
    });

  return (
      <div className="app">
        <button onClick={handleClick}>Add animal</button>
          <div className="list">{renderedAnimals}</div>
      </div>
  );
}

export default App;