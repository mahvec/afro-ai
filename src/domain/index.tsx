import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
