import { useState, useEffect } from "react";


const Hero = (props) => {
    let {sentFunction} = props;
    let city = ['Dhaka', 'sylhet', 'delhi']
    let login = true
    const [value, setValue] = useState('')
    useEffect(()=>{
        console.log(value)
    }, [value])
    return (
        <div>
            <h1> This is Hero Section </h1>
            {
                login?
                <div>
                <img src="https://i.pinimg.com/originals/d4/81/f3/d481f3c72e283309071f79e01b05c06d.gif"/>
                <button>Log out</button> 
                </div>
                :
                <h2> User not logged in yet</h2>
            }
           

            {
                city.map((item, index)=><h2 key={index}>{item}</h2>)
            }
            <input 
            placeholder="Put a value for prop" 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />

            <button onClick={()=>sentFunction(value)}> Props Testing</button>
        </div>
    );
};

export default Hero;