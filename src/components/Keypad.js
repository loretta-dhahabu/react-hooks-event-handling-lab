// Code Keypad Component Here
import React from "react";

function Keypad ()
{
    function keypadFn ( eventFunction )
    {
        console.log(eventFunction.target.name);
        // console.log("Entering password...");
    }
    return (
      <>
        <input
          type="password"
          name="Entering password..."
          onChange={keypadFn}
          placeholder="Enter your password..."
        />
      </>
    );
    
}
export default Keypad;
