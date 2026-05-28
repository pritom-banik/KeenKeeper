import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { createContext } from "react";

const friends = fetch("/public/friends.json").then((res) => res.json());

export const FriendsContext = createContext({});

function App() {
  //console.log(friends);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="grow">
        <FriendsContext value={friends}>
          <Outlet></Outlet>
        </FriendsContext>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
