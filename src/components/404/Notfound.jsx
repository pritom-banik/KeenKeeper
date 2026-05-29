import { Link } from "react-router";

const Notfound = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap justify-center items-center gap-1">
        <video autoPlay loop muted playsInline>
          <source src="/error.mp4" type="video/mp4" />
        </video>
        <h1 className="text-gray-600 font-black text-7xl my-10">Nothing Here</h1>
        <Link to="/" className="text-lg hover:underline text-blue-700">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
