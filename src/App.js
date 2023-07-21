import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import Recommendation from "./pages/recommendation/Recommendation";
import Mint from "./pages/mint/Mint";
import MintGenerate from "./pages/mint/MintGenerate";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/sign-up" element={<Signup />} />
      <Route  path="/sign-in" element={<Signin />} />
      <Route  path="/recommendation" element={<Recommendation />} />
      <Route path="/mint" element={<Mint/>} />
      <Route path="mint-generate" element={<MintGenerate/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;