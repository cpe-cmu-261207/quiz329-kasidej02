import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App({props}) {
  //add useState for all state variables

  const [name, setname] = useState('');
  const [gender, setgender] = useState('');
  const [age, setage] = useState('');
  const [lists, setlists] = useState([])

  // console.log(name)
  const onSubmit = (e) => {
    const payload = {
      name,
      gender,
      age
    }
    console.log('pl' , payload);
    setlists([...lists,{name:name,gender:gender,age:age}]);
    localStorage.setItem("items",JSON.stringify(lists));
  }
  

  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    if(items!== null) setname(JSON.parse(items));
  }, []);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
            onChange = {(e) => setname(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select .." onChange={(e)=>setgender(e.target.value)} > 
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input className="input" type="number" placeholder="e.q 30"
          onChange = {(e)=>setage(e.target.value)}
          ></input>
        </div>

        <button className="button is-primary is-fullwidth"
        onClick={onSubmit}
        >Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
        {lists.map((data,i)=>(
          <ItemTable key={i} name={data.name} gender={data.gender} age={data.age} />
        ))}
        
        <p>Kasidej Kammool #620610776</p>
      </div>
    </div>
  );
}

export default App;
