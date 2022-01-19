import Image from "next/image";

import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";

import { MdClose } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

import { useThemeChange } from "../context/themeContext";

export default function ModalCard({ project, setOpenModal, projectsLanguage }) {
  const { theme, setTheme } = useThemeChange();

  return (
    <div
      className=" fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center ">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        {/* <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span> */}

        <div className="modal__bg  inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:w-10/12 md:w-10/12 2xl:w-9/12 sm:max-h-fit">
          <div className="w-full flex flex-row justify-end cursor-pointer pr-2 pt-2">
            <MdClose
              color={theme === "light" ? "black" : "white"}
              size={"30px"}
              onClick={() => setOpenModal(false)}
            />
          </div>
          <div className="modal__bg px-5 sm:px-10 lg:px-24 py-7 flex flex-col">
            <div className="border__slider border-8 border-solid md:flex hidden">
              <AwesomeSlider
                animation="scaleOutAnimation"
                className="h-72 sm:h-72 md:h-80  xl:h-96 2xl:h-auto"
              >
                <div className="relative w-full h-full">
                  <Image
                    className="w-full "
                    src={project.images.image2}
                    alt={project.title}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={project.images.image2}
                    priority={true}
                    quality={100}
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    className="w-full "
                    src={project.images.image3}
                    alt={project.title}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={project.images.image3}
                    priority={true}
                    quality={100}
                  />
                </div>
              </AwesomeSlider>
            </div>

            <div className="md:pt-16 text-left">
              <div>
                <h3
                  className="modal__title text-lg leading-6 font-medium text-gray-900 2xl:text-2xl"
                  id="modal-title"
                >
                  {project.title}
                </h3>
                <div className="py-4 flex flex-row flex-wrap gap-5">
                  <a href={project.repository} target="_blank">
                    <button className="modal__button__repo text-sm inline-flex items-center cursor-pointer rounded-xl py-2 px-4 2xl:text-xl">
                      <AiFillGithub className="modal__icon__buton mr-2" />
                      {projectsLanguage.button}
                    </button>
                  </a>

                  <a href={project.demo} target="_blank">
                    <button className="modal__button__repo text-sm inline-flex items-center cursor-pointer rounded-xl py-2 px-4 2xl:text-xl">
                      <BsFillPlayFill className="modal__icon__buton mr-2" />
                      Demo
                    </button>
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <p className="modal__description text-sm 2xl:text-xl">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-3 pt-9">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="tech__card px-6 py-2 rounded-xl shadow-lg"
                >
                  <p className="tech__card__desc 2xl:text-2xl">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
