import Image from "next/image";
import { useState, useEffect } from "react";
import ModalCard from "./ModalCard";

export default function Card({ project, projectsLanguage }) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
  }, [openModal]);

  return (
    <>
      <article
        className="card w-96 shadow-xl flex flex-col items-center py-3 px-3 rounded-md cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-neutral-600"
        onClick={() => setOpenModal(!openModal)}
      >
        <div className="w-full h-56 2xl:h-60 relative">
          <Image
            className="w-full "
            src={project.images.image1}
            alt={project.title}
            layout="fill"
            placeholder="blur"
            blurDataURL={project.images.image1}
            priority={true}
          />
        </div>
        <p className="project__title pt-6 text-lg 2xl:text-xl">
          {project.title}
        </p>
      </article>

      {openModal && (
        <ModalCard
          project={project}
          setOpenModal={setOpenModal}
          projectsLanguage={projectsLanguage}
        />
      )}
    </>
  );
}
