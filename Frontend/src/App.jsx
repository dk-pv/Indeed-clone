import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import RootLayout2 from "./components/RootLayout2";
import FirstPage from "./pages/FirstPage";
import SingleEntryAuth from "./pages/SingleEntryAuth";
import RoleSelection from "./pages/RoleSelection";
import CompanyReview from "./pages/companyReview";
import EmployerHome from "./pages/EmployerHome";
import JobPostSuccessPage from './pages/JobPostSuccessPage'
import CombinedEmployerPage from "./components/employer/CombinedEmployerPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedPublic from "./components/ProtectedPublic";

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
        element:<ProtectedPublic>  <RoleSelection /> </ProtectedPublic>,
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
      element: (
        <ProtectedRoute requiredRole="employer">
          <EmployerHome />
        </ProtectedRoute>
      ),
    },
  ],
},
  {
    path: "/signin",
    element:<ProtectedPublic> <SingleEntryAuth /> </ProtectedPublic> ,
  },
  {
    path:"/success",
    element:<JobPostSuccessPage />
  },
 {
  path: "/create-job-post",
  element: (
    <ProtectedRoute requiredRole="employer">
      <CombinedEmployerPage />
    </ProtectedRoute>
  )
}
]);

const App = () => {
  return(
     <AuthProvider>
      <RouterProvider router={router} />;
  </AuthProvider>
  )
 

};

export default App;
