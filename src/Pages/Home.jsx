import React from 'react';
import useAuth from '../Components/auth/useAuth';
import Dashboard from '../Components/Dashboard/Dashboard';
// import MultFormMain from '../Components/MultFormMain/MultFormMain'; 

const Home = () => {
  const { user } = useAuth(); 

  return (
    <>
      <Dashboard /> 
    </>
  );
};

export default Home;