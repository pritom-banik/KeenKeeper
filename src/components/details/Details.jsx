import { use, useContext } from "react";
import { useParams } from "react-router";
import { FriendsContext, TimelineContext } from "../../App";
import { IoArchiveOutline } from "react-icons/io5";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, Zoom } from "react-toastify";

const Details = () => {
  const id = useParams();
  const friends = useContext(FriendsContext);
  const allFriends = use(friends);

  const friend = allFriends.find((frnd) => frnd.id.toString() === id.id);
  //   console.log("id : ",id.id," type : ",typeof(id.id))
  //   console.log(friend);

  const { timeline, setTimeline } = useContext(TimelineContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10 px-4">
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
          <h6 className="text-gray-600 text-center hover:underline">
            Email : {friend.email}
          </h6>
        </div>
        <div className="flex justify-center items-center gap-0.5 p-1 cursor-pointer border border-gray-300 font-medium shadow-sm shadow-black rounded">
          <IoArchiveOutline /> <h3>Snooze 2 weeks</h3>
        </div>
        <div className="flex justify-center items-center gap-0.5 p-1 cursor-pointer border border-gray-300 font-medium shadow-sm shadow-black rounded">
          {" "}
          <RiNotificationSnoozeLine /> <h3>Archive</h3>
        </div>
        <div className="flex justify-center items-center gap-0.5 p-1 cursor-pointer border border-gray-300 font-medium shadow-sm shadow-black rounded text-red-500">
          <RiDeleteBin6Line /> <h3>Delete</h3>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-start gap-4">
        <div className="flex flex-wrap justify-around items-center gap-5">
          <div className="flex flex-1 flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded px-2 py-3">
            <h1 className="text-3xl text-[#244d3fFF] font-bold">
              {friend.days_since_contact}
            </h1>
            <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
              Days Since Contact
            </h2>
          </div>

          <div className="flex flex-1 flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded px-2 py-3">
            <h1 className="text-3xl text-[#244d3fFF] font-bold">
              {friend.goal}
            </h1>
            <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
              Goal (Days)
            </h2>
          </div>

          <div className="flex flex-1 flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded px-2 py-3">
            <h1 className="text-3xl text-[#244d3fFF] font-bold">
              {new Date(
                friend.next_due_date.replace(/-/g, "/"),
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </h1>
            <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
              Next Due
            </h2>
          </div>
        </div>
        <div className="flex flex-col border border-gray-300 font-medium shadow-sm shadow-black rounded p-5">
          <div className="flex flex-wrap justify-between items-center">
            <h1 className="font-semibold text-gray-600">Relationship Goal</h1>
            <button className="py-1 px-3 bg-gray-200 rounded cursor-pointer">
              Edit
            </button>
          </div>
          <div className="flex flex-wrap justify-start gap-0.5 py-2">
            <h6 className="text-gray-600 font-medium">Connect every</h6>
            <h6 className="font-semibold">{friend.goal} days</h6>
          </div>
        </div>

        <div className="flex flex-col border border-gray-300 font-medium shadow-sm shadow-black rounded p-5">
          <h1 className="py-2 font-semibold text-[#244d3fFF]">
            Quick Check-In
          </h1>
          <div className="flex flex-wrap justify-around items-center gap-5">
            <div
              onClick={() => {
                setTimeline([
                  {
                    type: "Call",
                    with: friend.name,
                    date: new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }),
                    time: new Date().toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                  ...timeline,
                ]);
                toast.success("Call Successful", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Zoom,
                });
              }}
              className="cursor-pointer hover:shadow-md flex flex-1 flex-col justify-center items-center bg-gray-100 shadow-sm shadow-black rounded px-2 py-3
            transition-all duration-200 ease-in-out active:scale-95 active:bg-gray-10"
            >
              <img src="/src/assets/call.png" alt="Call"></img>
              <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
                Call
              </h2>
            </div>

            <div
              onClick={() => {
                setTimeline([
                  {
                    type: "Text",
                    with: friend.name,
                    date: new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }),
                    time: new Date().toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                  ...timeline,
                ]);
                toast.success("Text successful", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Zoom,
                });
              }}
              className="cursor-pointer hover:shadow-md flex flex-1 flex-col justify-center items-center bg-gray-100 shadow-sm shadow-black rounded px-2 py-3
             transition-all duration-200 ease-in-out active:scale-95 active:bg-gray-10"
            >
              <img src="/src/assets/text.png" alt="Call"></img>
              <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
                Text
              </h2>
            </div>

            <div
              onClick={() => {
                setTimeline([
                  {
                    type: "Video",
                    with: friend.name,
                    date: new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }),
                    time: new Date().toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                  ...timeline,
                ]);
                toast.success("Video Successful", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Zoom,
                });
              }}
              className="cursor-pointer hover:shadow-md flex flex-1 flex-col justify-center items-center bg-gray-100 shadow-sm shadow-black rounded px-2 py-3
             transition-all duration-200 ease-in-out active:scale-95 active:bg-gray-10"
            >
              <img src="/src/assets/video.png" alt="Call"></img>
              <h2 className="text-lg p-2 text-gray-600 font-medium text-center">
                Video
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
