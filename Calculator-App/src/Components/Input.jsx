import React from "react";


const Input = ({calculatorValue}) => {
    return (
        <div className="inputdiv">
            <input readOnly value={calculatorValue} type="text" class="form-control input " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
    )
}
export default Input;
