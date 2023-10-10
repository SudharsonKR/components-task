import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Menu } from 'antd';
import {BarChartOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined} from "@ant-design/icons";
import CardTypes from './Components/CardType';
import Buttontype from './Components/ButtonsType';

function App() {
  const navigate=useNavigate();
  return ( 
    
    <div style={{display:"flex", flexDirection:"row"}}> 
      
      <Menu
      onClick={({key})=>navigate(key)}
      items=
      {[
       {label: "Dashbord-Home", key:'/', icon: <HomeOutlined/>},
       {label: "Components", icon: <UnorderedListOutlined/>, children:[{label: "Cards", key: '/cards'}, {label: "Buttons", key: '/buttons'}]}, 
       {label: "Dummy1-Analytics", key: '/dummy1', icon: <BarChartOutlined/>},
       {label: "Dummy2-Logout", key: '/dummy2', icon: <PoweroffOutlined/>},
      ]} style={{backgroundColor:"cyan", }}>
      </Menu>
      <Content/>
      

</div>

    
  );
}

function Content(){
  return(
    <div>
      <Routes>
      <Route path="/" element={<div>Dashbord-Home </div>}></Route>
      <Route path="/buttons" element={<Buttontype/>}></Route>
      <Route path="/cards" element={<CardTypes/>}></Route>
      <Route path="/dummy1" element={<div>Dummy1-Analytics</div>}></Route>
      <Route path="/dummy2" element={<div>Dummy2-Logout</div>}></Route>
      </Routes>
      
    </div>
  )
}

export default App;
