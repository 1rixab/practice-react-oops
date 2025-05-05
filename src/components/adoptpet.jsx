import React, { useState } from "react";

let Adoptpet = (props) => {
  // let [petname, setpetname] = useState("");

  let secondbtnhandler = () => {
    // console.log(petname)
    props.func()
  };
  const handleSubmit2 = (e) => {
    e.preventDefault(); // Prevents page refresh
  };
  return (
    <div className="boxdiv">
      <h1>Remove Pet</h1>
      <form onSubmit={handleSubmit2} >
        <label>delete pet: &nbsp;</label>
        {/* <input
          type="text"
          value={petname}
          onChange={(e) => setpetname(e.target.value)}
          placeholder='enter pet code'
        ></input> */}
        &nbsp;
        <button type="submit" onClick={secondbtnhandler}>
          Remove
        </button>
      </form>
    </div>
  );
};

export default Adoptpet;
