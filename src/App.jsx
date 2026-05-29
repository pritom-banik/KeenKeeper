import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { createContext, Suspense, useState } from "react";
import { ToastContainer, Zoom } from "react-toastify";

const friends = fetch("/friends.json").then((res) => res.json());

export const FriendsContext = createContext({});

export const TimelineContext = createContext({});

function App() {
  const [timeline, setTimeline] = useState([]);
  //console.log(friends);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="grow">
        <FriendsContext value={friends}>
          <TimelineContext value={{ timeline, setTimeline }}>
            <Suspense
              fallback={
                <div className="flex flex-wrap justify-center items-center my-20">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                  <span className="loading loading-bars loading-xl"></span>
                </div>
              }
            >
              <Outlet></Outlet>
            </Suspense>
          </TimelineContext>
        </FriendsContext>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Zoom}
      />
    </div>
  );
}

export default App;
