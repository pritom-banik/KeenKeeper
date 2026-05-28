import { use, useContext } from "react";
import { useParams } from "react-router";
import { FriendsContext } from "../../App";
import { IoArchiveOutline } from "react-icons/io5";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

const Details = () => {
  const id = useParams();
  const friends = useContext(FriendsContext);
  const allFriends = use(friends);

  const friend = allFriends.find((frnd) => frnd.id.toString() === id.id);
  //   console.log("id : ",id.id," type : ",typeof(id.id))
  //   console.log(friend);

  return (
    <div className="grid grid-cols-3 gap-3 my-10 px-4">
      <div className="flex flex-col justify-around gap-3">
        <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded py-3 gap-1">
          <img
            src={`${friend.picture}`}
            className="h-20 w-20 rounded-full"
          ></img>
          <h1 className="text-xl text-[#244d3fFF] font-bold">{friend.name}</h1>
          <h1
            className={`${
              friend.status === "overdue"
                ? "bg-red-400"
                : friend.status === "almost due"
                  ? "bg-yellow-500"
                  : "bg-[#244d3fFF]"
            } text-sm text-white rounded-full font-medium uppercase py-1 px-3`}
          >
            {friend.status}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-1">
            {friend.tags.map((tag) => (
              <h1 className="bg-green-200 text-sm text-green-800 rounded-full font-medium uppercase py-1 px-3">
                {tag}
              </h1>
            ))}
          </div>
          <h6 className="text-gray-600 text-center">{friend.bio}</h6>
          <h6 className="text-gray-600 text-center hover:underline">Email : {friend.email}</h6>
        </div>
        <div className="flex justify-center items-center gap-0.5 p-1 cursor-pointer border border-gray-300 font-medium shadow-sm shadow-black rounded"><IoArchiveOutline /> <h3>Snooze 2 weeks</h3></div>
        <div className="flex justify-center items-center gap-0.5 p-1 cursor-pointer border border-gray-300 font-medium shadow-sm shadow-black rounded"> <RiNotificationSnoozeLine /> <h3>Archive</h3></div>
        <div className="flex justify-center items-center gap-0.5 p-1 cursor-pointer border border-gray-300 font-medium shadow-sm shadow-black rounded text-red-500"><RiDeleteBin6Line /> <h3>Delete</h3></div>
      </div>
      <div className="col-span-2 border-2 border-black">Details big</div>
    </div>
  );
};

export default Details;
