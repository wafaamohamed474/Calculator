import React, { useState } from "react";
import "./App.css"

 
const App = () => {
  
  const [value, setValue] = useState('')
  
  
  return (
    <div className="container">
           
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} id="mainInput" />
          </div>
           
          <div>
            <input type="button" value="AC" className="AC" onClick={() => setValue('')}/>
            <input type="button" value="DE" className="op"  onClick={()=>setValue(value.slice(0,-1))}/>
            <input type="button" value="*" className="op" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="/" className="op" onClick={(e) => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input type="button" value="8" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="-" className="op" onClick={(e) => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="+" className="op" onClick={(e) => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="%" className="op" onClick={(e) => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="0" onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="." onClick={(e) => setValue(value + e.target.value)}/>
            <input type="button" value="=" className="equal" onClick={()=>{
              setValue(eval(value))
              setValue(value.slice(0,12))
              
            }}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

 
 