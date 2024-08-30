import "./example.css";
import { useState } from "react";

const Example = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="triangle bg-gray-200 min-h-40 w-20 m-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
      iusto!
      <button className="bg-purple-200" onClick={() => setShow(!show)}>
        Toggle
      </button>
      <div className={show ? "show" : ""}>Hello</div>
    </div>
  );
};

export default Example;
