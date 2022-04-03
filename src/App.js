import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import OrdersReview from './components/OdersReview/OrdersReview';
import Header from './components/Headers/Header';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrdersReview></OrdersReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
