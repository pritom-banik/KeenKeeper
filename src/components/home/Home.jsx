import { use, useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { FriendsContext } from "../../App";

const Home = () => {
  const friends = useContext(FriendsContext);
  const allFriends = use(friends);
  console.log(allFriends);
  return (
    <div className="flex flex-col justify-around items-center">
      <div className="text-4xl p-2 font-bold text-[#244d3fFF] mt-10 text-center">
        Friends to keep close in your life
      </div>
      <div className="text-lg p-2 text-gray-600 text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the
        <br />
        relationships that matter most.
      </div>
      <div className="cursor-pointer inline-flex justify-center items-center gap-0.5 px-3 py-2 text-white bg-[#244d3fFF] rounded text-md font-semibold mt-10">
        <FaPlus />
        <h1>Add a Friend</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-5 p-6 border-b-2 border-gray-300">
        <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded px-10 py-3">
          <h1 className="text-3xl text-[#244d3fFF] font-bold">9</h1>
          <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
            Total Friends
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded px-10 py-3">
          <h1 className="text-3xl text-[#244d3fFF] font-bold">9</h1>
          <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
            Total Friends
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded px-10 py-3">
          <h1 className="text-3xl text-[#244d3fFF] font-bold">9</h1>
          <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
            Total Friends
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded px-10 py-3">
          <h1 className="text-3xl text-[#244d3fFF] font-bold">9</h1>
          <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
            Total Friends
          </h2>
        </div>
      </div>

      <div className="self-start text-lg text-black font-bold ml-37 mt-10">
        Your Friends
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11 my-10 max-w-5xl mx-auto px-4">
        {allFriends.map((friend) => (
          <div
            className="flex flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded py-3 gap-1 cursor-pointer w-52
          transition-all duration-200 ease-in-out
  hover:bg-gray-50 hover:shadow-md hover:-translate-y-1
  active:scale-95 active:bg-gray-100"
          >
            <img
              src={`${friend.picture}`}
              className="h-20 w-20 rounded-full"
            ></img>
            <h1 className="text-xl text-[#244d3fFF] font-bold">
              {friend.name}
            </h1>
            <h6 className="text-gray-600 text-center">
              {friend.days_since_contact}
              <span>d ago</span>
            </h6>
            <div className="flex flex-wrap justify-center items-center gap-1">
              {friend.tags.map((tag) => (
                <h1 className="bg-green-200 text-sm text-green-800 rounded-full font-medium uppercase py-1 px-3">
                  {tag}
                </h1>
              ))}
            </div>

            <h1 className="bg-red-400 text-sm text-white rounded-full font-medium uppercase py-1 px-3">
              {friend.status}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
