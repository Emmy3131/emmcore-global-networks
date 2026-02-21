import Header from "../Component/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";

const GuestLayout = () => {
  return (
    <div>
      <Header />

      <main className="pt-15 md:pt-18">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

export default GuestLayout;