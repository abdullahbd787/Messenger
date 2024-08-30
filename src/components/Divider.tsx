import React from "react";

const Divider = () => {
  return (
    <div className="w-full flex">
      <div className="min-w-[360px] bg-red-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, unde!
      </div>
      <div className=" bg-pink-300 w-screen flex justify-between">
        <a href="#">Left</a>
        <a href="#">right</a>
      </div>
      <div className="min-w-[360px] bg-yellow-400 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        sunt corporis ut ducimus, quam velit accusantium incidunt sint nulla
        esse! Non dignissimos quo a alias quos magnam fugit nulla.
      </div>
    </div>
  );
};

export default Divider;
