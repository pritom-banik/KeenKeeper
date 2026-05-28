import { FaPlus } from "react-icons/fa6";

const Home = () => {
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

      <div className="self-start text-lg text-black font-bold ml-40 mt-10">
        Your Friends
      </div>
      <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center border border-gray-300 shadow-sm shadow-black rounded px-10 py-3">
                <img src="" className="h-20 w-20 rounded-full"></img>
                <h1>Sara Williamson</h1>
                <h6>6<span>day ago</span></h6>
                <h1>Place</h1>
                <h1>status</h1>
            </div>
      </div>
    </div>
  );
};

export default Home;
