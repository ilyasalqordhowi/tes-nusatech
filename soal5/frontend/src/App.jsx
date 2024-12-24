import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Onboarding from "./page/Onboarding";
import Login from "./page/Login";
import Chatting from "./page/Chatting";
import Dashboard from "./page/Dashboard";
import Setting from "./page/Setting";

function App() {
  const page = createBrowserRouter([
    {
      path: "/",
      element: <Onboarding />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/Setting",
      element: <Setting />,
    },
    {
      path: "/Chatting/:id",
      element: <Chatting />,
    },
  ]);
  return <RouterProvider router={page} />;
}

export default App;
