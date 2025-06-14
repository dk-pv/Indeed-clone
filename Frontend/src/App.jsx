import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import RootLayout2 from "./components/RootLayout2";
import FirstPage from "./pages/FirstPage";
import SingleEntryAuth from "./pages/SingleEntryAuth";
import RoleSelection from "./pages/RoleSelection";
import CompanyReview from "./pages/companyReview";
import EmployerHome from "./pages/EmployerHome";
import JobPostPage1 from './pages/JobPostPage1'
import JobPostPage2 from './pages/JobPostPage2'
import JobPostPage3 from './pages/JobPostPage3'
import JobPostPage4 from './pages/JobPostPage4'





const router = createBrowserRouter([
  //jobseeker
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
        element: <EmployerHome/>,
      },
    ],
  },

  {
    path: "/signin",
    element: <SingleEntryAuth />,
  },
  {
    path : '/addJobDetails',
    element : <JobPostPage1/>
  },
   {
    path : '/addJobDetails2',
    element : <JobPostPage2/>
  },
  {
    path : '/addJobDetails3',
    element:<JobPostPage3/>
  },
  {
  path:'/addJobDetails4',
  element : <JobPostPage4/>

  }

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
