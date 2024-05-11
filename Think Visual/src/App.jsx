import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Chatbot from "./Components/ChatBot";
import NavBar from "./Components/NavBar";
import Slider from "./Components/Slider";
import LiquidAnimationBackground from "./Components/Animation";
import Form from "./Components/Form";

const App = () => {
  return (
    <div className="w-screen h-screen">
    <Router>
      <Routes>
      <Route path="/" element={<Form />} />
      </Routes>
      <div className="relative overflow-hidden h-screen">
        <LiquidAnimationBackground />
        <div className="absolute inset-0 flex flex-col">
          <NavBar />
          <Slider />
          <div className="mt-2 flex-grow">
            <Routes>
              <Route path="/showobject" element={<Chatbot />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </div>
  );
};

export default App;
