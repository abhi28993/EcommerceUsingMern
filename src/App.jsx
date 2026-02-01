import React, { useState } from 'react';
import Routes from './router/Routes';
import publicRoutes from './router/routes/publicRoutes';

const App = () => {

  const  [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  return (
    <div>
      <Routes allRoutes = {allRoutes} />
    </div>
  )
}

export default App;