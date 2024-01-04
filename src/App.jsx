import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  const onClickHandler = (value) =>{
    alert(`Now you have given ${value}`)
  }
  return (
    <div>
      <Header />
      <Hero sentFunction = {onClickHandler}/>
      <Form />
      <Footer/>
      
    </div>
  );
};

export default App;