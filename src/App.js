import { Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import Home from "./components/Home";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
