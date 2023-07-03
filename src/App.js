import React, {  useState } from 'react'
import './App.css';
import Content from './Home/Content/Content';
import Nav from './Home/Nav';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  
  // for nav button click
  const handleGetUsers = () => {
    setIsLoading(true);
  };

  return (
    <>
    <div className="app">
      <Nav handleGetUsers={handleGetUsers}/>
      <Content isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
    </>
  );
}

export default App;
