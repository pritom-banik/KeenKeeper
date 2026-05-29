import { useContext } from "react";
import { TimelineContext } from "../../App";
import { Link } from "react-router";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  //console.log(timeline)
  return (
    <div className="mx-40 my-5">
      <div className="text-5xl font-semibold py-10">Timeline</div>
      <div className="flex flex-col gap-2">
        {timeline.length !== 0 ? (
          timeline.map((event) => (
            <div className="flex flex-col border border-gray-300 font-medium shadow-sm shadow-black rounded p-5 ">
              <div className="flex gap-2">
                <img
                  className="h-10 w-10"
                  src={`${event.type === "Call" ? "/src/assets/call.png" : event.type === "Text" ? "/src/assets/text.png" : "/src/assets/video.png"}`}
                ></img>
                <div>
                  <div className="text-gray-600">
                    <span className="text-lg text-black font-medium">
                      {event.type}
                    </span>{" "}
                    with {event.with}
                  </div>
                  <div className="text-gray-600">
                    {event.date} {event.time}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col flex-wrap justify-center items-center gap-1">
            <h1 className="text-gray-600 font-black text-4xl my-10">
              NO DATA AVAILABLE
            </h1>
            <Link to="/" className="text-lg hover:underline text-blue-700">
              Go to home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
