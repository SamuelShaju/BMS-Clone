import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";

function Home() {
  return <h1>Home Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Home} />
      <DefaultHOC path="/contact" exact component={Contact} />
    </>
  );
}

export default App;
