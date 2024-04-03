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
} from "react-router-dom";

// Components
import {Header, Footer, Preloader } from "./components";

// Pages
const Home = lazy(() => import("./pages/home"));
// const Whyus = lazy(() => import("./pages/why-us"));
// const Blog = lazy(() => import("./pages/blog"));
// const Faq = lazy(() => import("./pages/faq"));
// const Contact = lazy(() => import("./pages/contact"));

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <div className="xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto min-h-screen flex flex-col justify-between">
        <Header/>
        <Outlet />
        <Footer/>
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
      
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Simulating data fetching with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time

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
