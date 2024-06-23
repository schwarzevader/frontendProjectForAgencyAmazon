import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {EmployeeList} from "./Components/employeeList/EmployeeList";
import {Card} from "./Components/card/Card";
import {Navbar} from "./Components/navBar/Navbar";







function App() {
  return (



    <Router>
        <div>

            <Navbar/>

            <Routes>
                <Route path="/all" element={<EmployeeList />} />

            </Routes>
        </div>
    </Router>

  );
}

export default App;
