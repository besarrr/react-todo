import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import AddNewMeetup from "./pages/AddNewMeetup";
import MyFavourite from "./pages/MyFavourite";
import Rootlayout from "./components/RootLayout/RootLayout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,

      children: [
        { index: true, element: <AllMeetups /> },

        {
          path: "/new-meetup",
          element: <AddNewMeetup />,
        },
        {
          path: "/my-favorite",
          element: <MyFavourite />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
