import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Input from './Components/Input'
import Button from './Components/Button'

function App() {

  const [value, setvalue] = useState('')
   
  const OnButtonClick=(buttonText) => {
   if ( buttonText === 'C'){
     setvalue('')
   }else if(buttonText === '='){
      const result = eval(value)
      setvalue(result)
   }else  {
     const newvalue = value + buttonText
     setvalue(newvalue)
   }
  }
  return (
    <>
      <div className="container centerdiv">
        <div className="calcucontainer ">
           <h1 className='centerdiv'>Calculator</h1>
           <Input calculatorValue={value} ></Input>
           <Button OnButtonClick={OnButtonClick}></Button>
        </div>
      </div>
    </>
  )
}

export default App
