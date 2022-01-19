import { useThemeChange } from "../context/themeContext";
import { useLanguageChange } from "../context/languageContext";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Flags from "country-flag-icons/react/3x2";

export default function ResponsiveBar({ setMenuResponsiveOpen }) {
  const { theme } = useThemeChange();
  const { language, setLanguage } = useLanguageChange();

  return (
    <div className="fixed top-0 left-0  z-10 md:hidden flex flex-col gap-4 w-full shadow-xl rounded-b-lg skills py-5 px-6  ">
      <div className="flex flex-row w-full justify-between items-center border__responsive border-b-2 border-solid">
        <div className="flex flex-row gap-4 h-14 py-4 ">
          <Flags.ES
            title="Spain"
            className={
              language === "es"
                ? "h-full rounded-md cursor-pointer opacity-25"
                : "h-full rounded-md cursor-pointer"
            }
            onClick={() => setLanguage("es")}
          />
          <Flags.US
            title="United States"
            className={
              language === "en"
                ? "h-full rounded-md cursor-pointer opacity-25"
                : "h-full rounded-md cursor-pointer"
            }
            onClick={() => setLanguage("en")}
          />
        </div>

        <MdClose
          color={theme === "light" ? "black" : "white"}
          size={"30px"}
          onClick={() => setMenuResponsiveOpen(false)}
        />
      </div>

      <div className="flex flex-col h-full gap-4">
        <a
          className="icon_header flex flex-row w-full items-center gap-2"
          href="https://github.com/andrucar25"
          target="_blank"
        >
          <AiFillGithub
            color={theme === "light" ? "black" : "white"}
            size={"2em"}
            className="cursor-pointer"
          />
          <p className="text-lg text_responsive">GitHub</p>
        </a>
        <a
          className="icon_header flex flex-row w-full items-center gap-2"
          href="https://www.linkedin.com/in/andr%C3%A9s-de-la-barra-v%C3%A1squez/"
          target="_blank"
        >
          <AiFillLinkedin
            color={theme === "light" ? "black" : "white"}
            size={"2em"}
            className="cursor-pointer"
          />
          <p className="text-lg">LinkedIn</p>
        </a>
      </div>
    </div>
  );
}
