import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/LandingPage/Home";
import GuestLayout from "./Layout/QuestLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;