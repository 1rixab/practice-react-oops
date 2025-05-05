import React, { useState, useEffect } from "react";
import Petinfobox from "./components/petinfobox";
import "./App.css";
import Adoptpet from "./components/adoptpet";
import AddNewPet from "./components/addNewPet";

let App = () => {
  class pet {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
      this.adopted = false;
    }
    adopt() {
      this.adopted = true;
    }
    displayinfo() {
      console.log(
        `${this.name} is a ${this.age} years old ${this.type}. Adopted : ${this.adopted}`
      );
    }
  }
  let [pets, setpets] = useState([]);
  let [bckpn, setbckpn] = useState([]);
  let adoptfunc = () => {
    pets.pop();
    setbckpn([...pets]);
    console.log("pets pop done");
  };
  useEffect(() => {
    console.log(pets);
    console.log("effect used");
  }, [bckpn]);

  let mainhandler = (xname, xage, xtype) => {
    setpets(pets.concat(new pet(xname, xage, xtype)));
    setbckpn(pets);
  };

  return (
    <div className="maindiv">
      <AddNewPet sendata={mainhandler} />
      <div className="boxdiv">
        <h1>Available Pets</h1>
        {pets.map((pet, index) => (
          <Petinfobox
            Id={index + pet.name[0] + pet.age + pet.type[0]}
            Name={pet.name}
            Age={pet.age}
            Type={pet.type}
          />
        ))}
      </div>
      <Adoptpet func={adoptfunc} />
    </div>
  );
};

export default App;
