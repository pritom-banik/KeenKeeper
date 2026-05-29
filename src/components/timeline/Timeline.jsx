import { useContext, useState } from "react";
import { TimelineContext } from "../../App";
import { Link } from "react-router";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  let [pageTimeline, setPageTimeline] = useState(timeline);

  //console.log(timeline)

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "Call" || value === "Video" || value === "Text") {
      const newtimeline = timeline.filter((event) => event.type === value);
      setPageTimeline(newtimeline);
    } else if (value === "SortOldest") {
      const reversed = [...timeline].reverse();
      setPageTimeline(reversed);
    } else {
      setPageTimeline(timeline);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const newResult = timeline.filter(
      (event) =>
        event.type.toLowerCase().includes(value) ||
        event.with.toLowerCase().includes(value),
    );

    setPageTimeline(newResult);
  };

  //console.log(timeline)
  return (
    <div className="mx-5 sm:mx-40 my-5">
      <div className="text-5xl font-semibold py-10">Timeline</div>
      <div className="flex flex-wrap justify-around items-center py-5">
        <div style={{ margin: "10px", width: "200px" }}>
          <select
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Video">Video</option>
            <option value="Text">Text</option>
            <option value="SortLatest">Sort (Latest → Oldest)</option>
            <option value="SortOldest">Sort (Oldest → Latest)</option>
          </select>
        </div>
        <div>
          <input
            className=" w-64 px-4 py-2 border border-gray-400 rounded-lg shadow-sm outline-none focus:border-gray-500 transition duration-200"
            placeholder="Enter event or name"
            onChange={handleSearch}
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {pageTimeline.length !== 0 ? (
          pageTimeline.map((event) => (
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
