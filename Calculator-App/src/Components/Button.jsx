import React from "react";


const Button = ({OnButtonClick}) => {
 
    const buttonNames = ['C','1','2','3','4','+','5','6','*','7','8','/','=','9','0','.']

    return (
        <div className="buttondiv">
            {buttonNames.map((names )=>{
                return(
<button onClick={ () => OnButtonClick(names)} type="button " className=" button ">{names}   </button>
                )
            })}
            
         


        </div>
    )
}
export default Button;
