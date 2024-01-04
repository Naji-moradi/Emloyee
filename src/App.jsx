import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
// import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import AddnewEmployee from "./components/AddnewEmployee";
// import Update1 from "./components/UpdateEmployee";
import { ToastContainer } from "react-toastify";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-lead">
      <nav class="navbar navbar-light  container-fluid bg-primary">
        <span class="navbar-brand mb-0 h1 px-2 text-white">Employee datas</span>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/create" element={<AddnewEmployee />}></Route>
          <Route path="/update/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
