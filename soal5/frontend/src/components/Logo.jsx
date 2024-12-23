import Feather from "../assets/Feather.png";

function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={Feather} alt="Logo" className="w-36 h-36 mb-2" />
      <h1 className="text-3xl font-bold text-[#18837D]">Were Chatting</h1>
    </div>
  );
}

export default Logo;
