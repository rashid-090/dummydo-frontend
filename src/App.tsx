import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';
import { lazy, Suspense, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  // useNavigate,
} from "react-router-dom";
import notificationSound from './assets/mp3/flighttone.mp3'; // Import your notification sound file
// import { Howl } from 'howler';

// Components
import {Header, Footer, Preloader } from "./components";
import { useRecoilValue } from 'recoil';
import { adminTokenAtom } from './recoil/adminAtoms';

// Pages
const Home = lazy(() => import("./pages/home"));
const Booking = lazy(() => import("./pages/booking"));
const Login = lazy(() => import("./pages/dashboard/login"));
const Dashbaord = lazy(() => import("./pages/dashboard/dashboard"));
const UserProfile = lazy(() => import("./pages/dashboard/profile"));
const PaySuccess = lazy(() => import("./pages/paySuccess"));
// const Whyus = lazy(() => import("./pages/why-us"));
// const Blog = lazy(() => import("./pages/blog"));
// const Faq = lazy(() => import("./pages/faq"));
const Contact = lazy(() => import("./pages/contact"));
const Prices = lazy(() => import("./pages/dashboard/price/prices"));




const Layout = () => {
  const pagesWithHeaderAndFooter = ['/','/booking'];
  const location = useLocation();
  const shouldShowHeaderAndFooter = () => {
    return pagesWithHeaderAndFooter.includes(location.pathname);
  };
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <div className="  mx-auto min-h-screen flex flex-col justify-between">
        {shouldShowHeaderAndFooter() && <Header/>}
        <Outlet />
        {shouldShowHeaderAndFooter() && <Footer/>}
      </div>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<Preloader/>}>
            <div className="w-full h-96 grid place-items-center text-center"><p className="animate-bounce text-primary text-5xl font-bold">page not found</p></div>
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Preloader/>}>
            <Home/>
          </Suspense>
        ),
      },
      {
        path: "/test",
        element: (
          <Suspense fallback={<Preloader/>}>
            <Contact/>
          </Suspense>
        ),
      },
      {
        path: "/booking",
        element: (
          <Suspense fallback={<Preloader/>}>
            <Booking/>
          </Suspense>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <Suspense fallback={<Preloader/>}>
            <Login/>
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<Preloader/>}>
            <Dashbaord/>
          </Suspense>
        ),
      },
      {
        path: "/dashboard/:orderId",
        element: (
          <Suspense fallback={<Preloader/>}>
            <UserProfile/>
          </Suspense>
        ),
      },
      {
        path: "/dashboard/prices",
        element: (
          <Suspense fallback={<Preloader/>}>
            <Prices/>
          </Suspense>
        ),
      },
      {
        path: "/payment-success/:orderId/:referenceId",
        element: (
          <Suspense fallback={<Preloader/>}>
            <PaySuccess/>
          </Suspense>
        ),
      },
      
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const token = useRecoilValue(adminTokenAtom)
  

  useEffect(() => {
    // Simulating data fetching with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate a 2-second loading time

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsContentVisible(true);
      }, 500); // Delay content visibility by 500 milliseconds to allow fade-out effect
    }
  }, [isLoading]);


    useEffect(() => {
    const timer = setTimeout(() => {
      // Play welcome tone
      const audio = new Audio(notificationSound);
      audio.play();
    }, 5000); // 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);


  useEffect(() => {
    const path = window.location.pathname;

    if (path == "/auth/login" && token) {
      window.location.href = "/dashboard";
    }
    if (path == "/dashboard" && !token) {
      window.location.href = "/auth/login";
    }
  }, [token]);


  return (
    <>
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isContentVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <RouterProvider router={router}/>
        </motion.div>
      )}
    </div>
    </>
  )
}

export default App;
