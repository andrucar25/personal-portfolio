import Lottie from "react-lottie";

const GreetingLottie = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null} className="h-96 lg:h-auto">
      <Lottie options={defaultOptions} style={{ height: "100%" }} />
    </div>
  );
};

export default GreetingLottie;
