const person = require("./models/person");
require("./configuration/database");

const savePerson = () => {
    //create instance person
    const newPerson = new person({
      name: "Marwa",
      age: "33",
      favoriteFoods: ["chocolate"],
    });
    newPerson
      .save()
      .then(() => console.log("added"))
      .catch(() => console.log("err"));
  };
  

   const saveMultiple = () => {
    const tab = [
      { name: "Fatma", age: "34", favoriteFoods: ["pasta"] },
      { name: "Skander", age: "25", favoriteFoods: ["Grilled Meat"] },
    ];
  
    person
      .create(tab)
      .then(() => console.log("added"))
      .catch(() => console.log("err"));
  };
  

  const find1 = () => {
    person
      .find({name: "Marwa" })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  

  const find2 = () => {
    person
      .findOne({favoriteFoods: "pasta" })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
 
  
  const find3 = () => {
    person
      .findById("64554a6ba14db4f6b413d69c")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  

  const method1 = () => {
    person
      .findById("64554a6ba14db4f6b413d69c")
      .then((data) => {
        data.favoriteFoods.push("hamburger");
        data
          .save()
          .then(() => console.log("added"))
          .catch(() => console.log("err"));
      })
      .catch(() => console.log("err"));
  };
 

  const method2 = () => {
    person
      .findOneAndUpdate(
        {name: "Marwa"},
        {age: 20},
        {new: true}
      )
      .then(() => console.log("updated"))
      .catch(() => console.log("err"));
  };
 
  const removebyID = () => {
    person
      .findByIdAndRemove("64554a6ba14db4f6b413d69c")
      .then(() => console.log("deleted"))
      .catch(() => console.log("err"));
  };
 
  
  const remove2 = () => {
    person
      .findOneAndDelete({ name: "Marwa" })
      .then(() => console.log("deleted"))
      .catch(() => console.log("err"));
  };
  
  const lastfind = () => {
    person
      .find({favoriteFoods: "pasta"})
      .sort({name: 1})
      .limit(3)
      .select(["name", "age"])
      .exec()
      .then((data) => console.log(data))
      .catch(() => console.log("err"));
  };
  
  lastfind();