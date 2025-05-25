import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "games/:id",
        element: <GameDetails />,
      },
    ],
  },
]);

export default router;
