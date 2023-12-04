import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import User from "./components/getuser/User";
import CreateUser from "./components/adduser/CreateUser";
import UpdateUser from "./components/updateuser/UpdateUser";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <CreateUser />,
    },
    {
      path: "/edit",
      element: <UpdateUser />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
