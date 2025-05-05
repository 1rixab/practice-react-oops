import React, { useState, useRef } from "react";

let AddNewPet = ({ sendata }) => {
  const inputRef = useRef(null);
  console.log(inputRef.current);
  
  let [name, setname] = useState("");
  let [age, setage] = useState("");
  let [type, settype] = useState("");

  let clickhandler = () => {
    sendata(name, age, type);
    setname("");
    setage("");
    settype("");

    
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
  };


  return (
    <div>
      <h1>Add Pet</h1>
      <form className="onlyform" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <label>Age:</label>
        <input
          ref={inputRef}
          type="Number"
          value={age}
          onChange={(e) => setage(e.target.value)}
        ></input>
        <label>Type:</label>
        <input
          ref={inputRef}
          type="text"
          value={type}
          onChange={(e) => settype(e.target.value)}
        ></input>
        <button type="submit" onClick={clickhandler}>
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddNewPet;
