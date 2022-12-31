import {useState} from "react";

import './css/AnimalShow.css';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const imgMap={
  bird, cat, cow, dog, gator, horse
};

function AnimalShow({type}) {
  const [clicks, addClick]=useState(0);

  const handleClicks=()=>{
    addClick(clicks+1);
  };

  return (
      <div className="item" onClick={handleClicks}>
        <img className="img-animal" alt="animal" src={imgMap[type]} style={{width: '250px', height: '200px'}} />
        <img className="img-heart" alt="heart" src={heart} style={{width: 25+10*clicks+'px', height: 20+10*clicks+'px'}} />
      </div>
  );
}

export default AnimalShow;
