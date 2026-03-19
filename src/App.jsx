import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/LandingPage/Home";
import GuestLayout from "./Layout/QuestLayout";
import AdminLayout from "./Layout/AdminLayout";
import Shop from "./Pages/ShopModel/Shop";
import RepairsPage from "./Pages/RepairServiceModel/RepairPage";
import WebServicesControl from "./Pages/WebServicesPage/WebServicesControl";
import PortfolioPage from "./Pages/PortfoliorPage/Portfolior";
import PartnershipPage from "./Pages/PartnershipPage/PartnershipPage";
import ContactPage from "./Pages/ContactPage/Contact";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/AuthPage/Login";
import Signup from "./Pages/AuthPage/SignUp";

//Admin pages
import AdminOverview from "./Pages/Dashbords/AdminDashbord/AdminDashBord";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/repairs" element={<RepairsPage />} />
          <Route path="/web-services" element={<WebServicesControl />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/partner" element={<PartnershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<AdminOverview />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;