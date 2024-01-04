

const Hero = () => {
    let city = ['Dhaka', 'sylhet', 'delhi']
    return (
        <div>
            <h1> This is Hero Section </h1>
            <img src="https://i.pinimg.com/originals/d4/81/f3/d481f3c72e283309071f79e01b05c06d.gif"/>
           

            {
                city.map((item, index)=><h2 key={index}>{item}</h2>)
            }
        </div>
    );
};

export default Hero;