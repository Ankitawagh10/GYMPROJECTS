import {Routes, Route}from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        
        </Routes>
        <Footer />
     </Box>
    
  );
}

export default App;
