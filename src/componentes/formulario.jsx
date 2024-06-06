import { useState } from "react"


export default function Formulario({newLocation}) {
    const [city,setCity]=useState("");

    function handleChange(e) {
      setCity(e.target.value);
    }
    function buscar(e){
       e.preventDefault();
       console.log(city)
       if(city === "" || !city) return;
       newLocation(city)
       setCity("")
    }
  return (
    <div className="container">
      <form onSubmit={buscar}>
        <div className="input-group mb-3 mx-auto">
          <input type="text" className="form-control inpu" 
           placeholder="ciudad" value={city}
           onChange={handleChange}/>
          <button className="btn btn-primary input-group-text">buscar</button>
        </div>
      </form>
    </div>
  )
}
