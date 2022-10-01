import { Route , Routes, Navigate } from 'react-router-dom';
import Home from "./components/Home"
import Crew from "./components/Crew";
import Destination from "./components/destination/Destination";
import Europa from "./components/destination/Europa";
import Mars from "./components/destination/Mars";
import Moon from "./components/destination/Moon";
import Titan from "./components/destination/Titan";
import Capsule from "./components/technology/Capsule";
import Spaceport from "./components/technology/Spaceport";
import Technology from "./components/technology/Technology";
import Vehicle from "./components/technology/Vehicle";
import Notfound from './components/Notfound';


function App() {
  return ( 
   <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />

      <Route path="/destination/*" element={<Destination />}>
        <Route path="moon" element={<Moon />} />
        <Route path="mars" element={<Mars />} />
        <Route path="europa" element={<Europa />} />
        <Route path="titan" element={<Titan />} />
      </Route>

      <Route path="/destination/" element={<Navigate to="/destination/moon" />} /> 
      <Route path="/destination/mars/*" element={<Navigate to="/destination/mars" />} /> 
      <Route path="/destination/europa/*" element={<Navigate to="/destination/europa" />} /> 
      <Route path="/destination/moon/*" element={<Navigate to="/destination/moon" />} />
      <Route path="/destination/titan/*" element={<Navigate to="/destination/titan" />} />  





      <Route path="/crew" element={<Crew />} /> 
      <Route path="/crew/*" element={ <Navigate to="/crew"/>} /> 

      <Route path="/technology/*" element={<Technology />}>
        <Route path="vehicle" element={<Vehicle />} />
        <Route path="spaceport" element={<Spaceport />} />
        <Route path="Capsule" element={<Capsule />} />
      </Route>
     
     <Route
          path="/technology/"
          element={<Navigate to="/technology/vehicle" />}
        />

    </Routes> 
   </> 
  );
}

export default App;
