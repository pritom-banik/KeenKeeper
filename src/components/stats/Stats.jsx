import { useContext } from "react";
import { TimelineContext } from "../../App";
import { Pie, PieChart, Tooltip, Cell, Legend } from "recharts";
import { Link } from "react-router";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  let data = [
    { name: "Call", value: 0 },
    { name: "Text", value: 0 },
    { name: "Video", value: 0 },
  ];

  // Count occurrences
  if (timeline && Array.isArray(timeline)) {
    timeline.forEach((element) => {
      const target = data.find((item) => item.name === element.type);
      if (target) target.value += 1;
    });
  }

  const COLORS = {
    Call: "#244d3fFF",
    Text: "#7e35e1FF",
    Video: "#37a163FF",
  };

  // Custom legend formatter
  const renderLegend = (value) => {
    return (
      <span style={{ color: COLORS[value], fontWeight: "bold" }}>{value}</span>
    );
  };

  return (
    <div className="mx-5 sm:mx-40 my-5">
      <div className="text-5xl font-semibold py-10">Friendship Analytics</div>
      {timeline.length !== 0 ? (
        <div className="border-black bg-gray-100 rounded-lg p-5 shadow-sm shadow-black">
          <div className="text-[#244d3fFF] text-2xl font-medium">
            By Interaction Type
          </div>
          <div className="flex justify-center items-center">
            <PieChart
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                aspectRatio: 1,
                cursor: "pointer",
              }}
              responsive
            >
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius="80%"
                innerRadius="60%"
                dataKey="value"
                label
                isAnimationActive={true}
                cornerRadius={8}
                paddingAngle={5}
                animationDuration={800} // duration in ms
                animationEasing="ease-out" // easing for smooth effect
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend iconType="circle" formatter={renderLegend} />
            </PieChart>
          </div>
        </div>
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
  );
};

export default Stats;
