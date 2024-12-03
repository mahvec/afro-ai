import { Navigate, RouteObject } from "react-router-dom";
import Homepage from "@/domain/homepage/index";
import Layouts from "@/domain";
import AboutUs from "@/domain/about-us";
import AfroAi from "@/domain/afro-ai";
import CampusGenie from "@/domain/campus-genie";
import WiseNurse from "@/domain/wise-nurse";
import Faq from "@/domain/faq";
import Contact from "@/domain/contact";

export default function appRouter(): RouteObject[] {
  return [
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "home",
          element: <Homepage />,
        },
        {
          path: 'about',
          element: <AboutUs/>
        },
        {
          path: 'afroai',
          element: <AfroAi/>
        },
        {
          path: 'campusgenie',
          element: <CampusGenie/>
        },
        {
          path: 'wisenurse',
          element: <WiseNurse/>
        },
        {
          path: 'faq',
          element: <Faq/>
        },
        {
          path: 'contact',
          element: <Contact/>
        }
      ],
    },
  ];
}
