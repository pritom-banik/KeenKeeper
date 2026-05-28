const Footer = () => {
  return (
    <div className="bg-[#244d3fFF] flex flex-col text-white">
      <div className="flex flex-col justify-center items-center p-10">
        <div className="text-4xl p-2 font-black">KeenKeeper</div>
        <div className="p-3">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </div>
        <div className="p-2">Social links</div>
        <div className="flex justify-around items-center gap-2">
            <img className="h-8 w-8 cursor-pointer" src="/src/assets/facebook.png"></img>
            <img className="h-8 w-8 cursor-pointer" src="/src/assets/instagram.png"></img>
            <img className="h-8 w-8 cursor-pointer" src="/src/assets/twitter.png"></img>
        </div>
      </div>

      <div className="flex justify-between items-center font-thin p-2">
        <div> © 2026 KeenKeeper. All rights reserved.</div>
        <div className="flex justify-around gap-3">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>Cookies</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
