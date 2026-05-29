import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { createContext, useState } from "react";
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
            <Outlet></Outlet>
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
