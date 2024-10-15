// import React from 'react'

const Card = ({ name, image, lastcost, newcost }) => {
  return (
    <div className="card w-[210px]">
      <div className="image">
        <div className="image h-[250px] w-[200px] overflow-hidden">
        <img src={image} alt={name} className="h-[250px] w-[200px] hover:scale-110 "/>

        </div>

      </div>
      <div className="text flex flex-col items-center m-4">
        <span className="text-center">{name}</span>
        <p>{newcost}$ <del>{lastcost}$</del></p>
      </div>
    </div>
  );
};

export default Card;
