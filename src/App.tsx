import React from 'react';
import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import './App.css';
 import Home from "./views/Home";
import HomeUser from "./views/HomeUser";
 import Layout from "./views/Layout";
 import LoginView from "./views/LoginView";
 import RegistrationView from "./views/RegistrationView";
 import Header from "./components/Header/Header";
 import AccountUser from "./views/AccountUser"
import RepositoryView from './views/RepositoryView'

function App() {
  return <>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='/login' element={<LoginView/>} />
              <Route path='/registration' element={<RegistrationView/>} />
              <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
          <Route path='/user' element={<HomeUser/>}></Route>
          <Route path='/account' element={<AccountUser/>}></Route>
          <Route path="/repository/:id" element={<RepositoryView />}>
              {/*<Route index element={<RepositoryView />} />*/}
              {/*<Route path=":id" element={<RepositoryView/>} />*/}
          </Route>

      </Routes>
  </>;
}

export default App;
