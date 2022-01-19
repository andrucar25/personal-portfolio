import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  let currentTime = new Date();
  let year = currentTime.getFullYear();

  return (
    <div className="w-full max-w-7xl pt-11 pb-6">
      <div className="flex flex-row h-full justify-center">
        <a href="https://github.com/andrucar25" target="_blank">
          {" "}
          <AiFillGithub
            color="white"
            size={"2em"}
            className="icon_header mr-6 cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andr%C3%A9s-de-la-barra-v%C3%A1squez/"
          target="_blank"
        >
          <AiFillLinkedin
            color="white"
            size={"2em"}
            className="icon_header cursor-pointer"
          />
        </a>
      </div>
      <div className="flex flex-row h-full justify-center pt-4">
        <p className="footer__text text-xs">
          Copyright &copy; {year}. Andrés De la Barra Vásquez{" "}
        </p>
      </div>
    </div>
  );
}
