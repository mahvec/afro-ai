import { Navigate, RouteObject } from "react-router-dom";
import Homepage from "@/domain/homepage/index";
import Layouts from "@/domain";

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
      ],
    },
  ];
}
