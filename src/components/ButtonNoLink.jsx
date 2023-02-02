const ButtonNoLink = ({ text, large, primary, onClick }) => {
  return (
    <button
      className={`${
        large ? "px-10 text-lg font-bold" : "px-3"
      } rounded-xl border-2 bg-transparent py-2 ${
        primary
          ? "border-primary bg-primary text-white hover:bg-transparent hover:text-primary"
          : " border-white text-white  hover:bg-secondary hover:text-white"
      }  duration-300 ease-in`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonNoLink;
