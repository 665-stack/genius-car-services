import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Shared/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>

        <Route path='/about' element={<About></About>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>

        <Route path='/manage-services' element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
