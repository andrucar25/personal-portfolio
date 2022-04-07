import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import {
  DiSass,
  DiReact,
  DiMysql,
  DiPostgresql,
  DiMongodb,
  DiNodejsSmall,
  DiGit,
} from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";

export default function Skills({ skills }) {
  return (
    <div className="w-3/4 max-w-7xl flex flex-col items-center my-6">
      <h2 className="skills__title text-3xl py-8 2xl:text-4xl">
        {skills.title}
      </h2>
      <div className="w-full flex flex-row justify-center flex-wrap py-10 gap-4">
        <div className="skill__card flex flex-col items-center py-3 px-6 rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <AiFillHtml5
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">HTML 5</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <SiCss3 color="white" size={"50px"} className="2xl:w-16 2xl:h-16" />
          <p className="skill__text mt-1 2xl:text-xl">CSS 3</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <DiSass color="white" size={"50px"} className="2xl:w-16 2xl:h-16" />
          <p className="skill__text mt-1 2xl:text-xl">SASS</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <SiTailwindcss
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">Tailwind</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <SiJavascript
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">JavaScript</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <SiTypescript
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">TypeScript</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <DiReact color="white" size={"50px"} className="2xl:w-16 2xl:h-16" />
          <p className="skill__text mt-1 2xl:text-xl">React</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 w-56transform transition hover:scale-105">
          <SiNextdotjs
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">Next.js</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <DiNodejsSmall color="white" size={"50px"} className="2xl:w-16 2xl:h-16" />
          <p className="skill__text mt-1 2xl:text-xl">Node.js</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <FaLaravel
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">Laravel</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <RiFlutterFill
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">Flutter</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <DiMysql color="white" size={"50px"} className="2xl:w-16 2xl:h-16" />
          <p className="skill__text mt-1 2xl:text-xl">MySQL</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <DiPostgresql
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">PostgresSQL</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <DiMongodb
            color="white"
            size={"50px"}
            className="2xl:w-16 2xl:h-16"
          />
          <p className="skill__text mt-1 2xl:text-xl">MongoDB</p>
        </div>
        <div className="skill__card flex flex-col items-center py-3 px-6  rounded-lg w-28 2xl:w-32 transform transition hover:scale-105">
          <DiGit color="white" size={"50px"} className="2xl:w-16 2xl:h-16" />
          <p className="skill__text mt-1 2xl:text-xl">GIT</p>
        </div>
      </div>
    </div>
  );
}
