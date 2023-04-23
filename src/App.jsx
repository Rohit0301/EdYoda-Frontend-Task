import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Module from "./pages/Module";
import Instructor from "./pages/Instructor";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/module' element={<Module />} />
      <Route path='/instructor' element={<Instructor />} />
    </Routes>
  );
}

export default App;
