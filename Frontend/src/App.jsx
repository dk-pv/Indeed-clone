import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import RootLayout2 from "./components/RootLayout2";
import FirstPage from "./pages/FirstPage";
import SingleEntryAuth from "./pages/SingleEntryAuth";
import RoleSelection from "./pages/RoleSelection";
import CompanyReview from "./pages/companyReview";
import EmployerHome from "./pages/EmployerHome";
import Jobpost from "./pages/Jobpost";
import JobPostSuccessPage from './pages/JobPostSuccessPage'
import CombinedEmployerPage from "./components/employer/CombinedEmployerPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <FirstPage />,
      },
      {
        path: "/role",
        element: <RoleSelection />,
      },
      {
        path: "/companyReview",
        element: <CompanyReview />,
      },
    ],
  },

  //employer
  {
    path: "/",
    element: <RootLayout2 />,
    children: [
      {
        path: "/postJob",
        element: <EmployerHome />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SingleEntryAuth />,
  },
  {
    path: "/create-job-post",
    element: <Jobpost />,
  },
  {
    path:"/success",
    element:<JobPostSuccessPage />
  },
  {
    path:'/create-job-postt',
    element:<CombinedEmployerPage/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
