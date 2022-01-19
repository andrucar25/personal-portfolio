import { projectsES, projectsEN } from "../../portfolio";
import Card from "./Card";
import { useLanguageChange } from "../context/languageContext";

export default function Projects({ projectsLanguage }) {
  const { language } = useLanguageChange();

  return (
    <div className="w-11/12 max-w-7xl flex flex-col items-center my-6">
      <h2 className="skills__title text-3xl py-8 2xl:text-4xl">
        {projectsLanguage.title}
      </h2>
      <div className="w-full flex flex-row justify-center flex-wrap py-10 gap-10">
        {language === "es"
          ? projectsES.map((project) => (
              <Card
                key={project.id}
                project={project}
                projectsLanguage={projectsLanguage}
              />
            ))
          : projectsEN.map((project) => (
              <Card
                key={project.id}
                project={project}
                projectsLanguage={projectsLanguage}
              />
            ))}
      </div>
    </div>
  );
}
