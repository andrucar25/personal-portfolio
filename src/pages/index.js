import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Icon } from "@iconify/react";

import Switch from "react-switch";
import Flags from "country-flag-icons/react/3x2";
import Typical from 'react-typical';

import GreetingLottie from "../components/DisplayLottie";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import ResponsiveBar from "../components/ResponsiveBar";
import SEO from "../components/SEO";

import { useThemeChange } from "../context/themeContext";
import { useLanguageChange } from "../context/languageContext";

export default function Home({ header, skills, projectsLanguage, experience }) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useThemeChange();
  const { language, setLanguage } = useLanguageChange();
  const [checked, setChecked] = useState(false);
  const [menuResponsiveOpen, setMenuResponsiveOpen] = useState(false);

  //Componente montado
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    router.push(router.pathname, router.pathname, {
      locale: language,
    });
  }, [language]);

  const handleChange = () => {
    setChecked(!checked);
  };

  //Setear el tema de fondo
  useEffect(() => {
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [checked]);

  //Componente para el titulo
  const HeaderTitleTypeAnimation = React.memo(() => {
    return (
      <Typical
        className="title text-3xl 2xl:text-5xl"
        steps={
          language === "es"
            ? ["Hola a todos!", 4000, "Hi everyone!", 4000]
            : ["Hi everyone!", 4000, "Hola a todos!", 4000]
        }
        loop={50}
        wrapper="p"
      />
    );
  });
  HeaderTitleTypeAnimation.displayName = 'HeaderTitleTypeAnimation';

  if (!mounted) return null;

  return (
    <>
      <SEO
        data={{
          title: "Andrés De la Barra Vásquez",
          description:
            "Egresado de ingeniería de sistemas, apasionado por el desarrollo frontend web y móvil .",
          image: "https://avatars.githubusercontent.com/u/48532190?v=4",
          url: "https://personal-portfolio-andreseduardo.vercel.app/",
          keywords: [
            "Andrés Eduardo",
            "Andrés De la Barra Vásquez",
            "@andrucar25",
            "Portfolio",
            "Portafolio",
            "Andrés Portfolio",
            "Andrés Portfalio",
            "Andrés De la Barra Vásquez Portfolio",
            "Andrés De la Barra Vásquez Portafolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "mobile app developer",
            "frontend developer",
            "frontend web developer",
            "desarrollador web",
            "desarrollador web full stack",
            "desarrollador de aplicaciones móviles",
            "desarrollador frontend",
            "desarrollador web frontend",
            "reactjs",
            "laravel",
            "flutter",
            "nextjs",
            "tailwindcss",
            "git",
            "contextapi",
            "redux",
            "javascript",
            "typescript",
            "php",
          ],
        }}
      />

      <header className="header xl:h-screen flex flex-col items-center">
        <section className="xl:h-screen w-5/6  xl:w-3/4  max-w-7xl ">
          <nav className="w-full flex flex-row pt-6 justify-between ">
            {menuResponsiveOpen ? (
              <ResponsiveBar setMenuResponsiveOpen={setMenuResponsiveOpen} />
            ) : null}
            <div className="flex flex-row">
              <Switch
                offColor="#353535"
                onColor="#AE944F"
                uncheckedIcon={
                  <Icon
                    icon="emojione:first-quarter-moon-face"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      color: "#353239",
                    }}
                  />
                }
                checkedIcon={
                  <Icon
                    icon="emojione-v1:sun"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "5px",
                      color: "#353239",
                    }}
                  />
                }
                onChange={handleChange}
                checked={checked}
                className="react-switch"
              />

              <div className="md:flex md:flex-row ml-10 gap-4 hidden">
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
            </div>

            <div
              onClick={() => setMenuResponsiveOpen(!menuResponsiveOpen)}
              className="text-3xl cursor-pointer md:hidden"
            >
              <GiHamburgerMenu />
            </div>

            <div className="md:flex md:flex-row h-full gap-2  md:visible hidden">
              <a
                className="icon_header"
                href="https://github.com/andrucar25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  color={theme === "light" ? "black" : "white"}
                  size={"2em"}
                  className="cursor-pointer"
                />
              </a>
              <a
                className="icon_header"
                href="https://www.linkedin.com/in/andr%C3%A9s-de-la-barra-v%C3%A1squez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin
                  color={theme === "light" ? "black" : "white"}
                  size={"2em"}
                  className="cursor-pointer"
                />
              </a>
            </div>
          </nav>

          <div className="h-2/4 lg:h-4/5 w-full grid grid-cols-1 pt-20 lg:py-0 lg:grid-cols-2 max-w-7xl">
            <div className="h-full w-full flex flex-col  lg:justify-center">
              <HeaderTitleTypeAnimation />

              <p className="paragraph mt-8 text-lg leading-7 2xl:text-2xl 2xl:leading-10">
                {header.description}
              </p>

              <div className="mt-5">
                <a
                  href="https://drive.google.com/file/d/1tr92Sw1xJ2WksWsMjrLMEj_HDnNvGZ8S/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttonCV inline-flex items-center px-4 py-2 rounded-md shadow-lg transform transition hover:scale-105 2xl:text-2xl 2xl:mt-5">
                    <CgFileDocument className="mr-2" color="black" />
                    {header.button}
                  </button>
                </a>
              </div>
            </div>

            <GreetingLottie
              animationPath="../lottie/coding.json"
              className="md:h-60 lg:h-full"
            />
          </div>
        </section>
      </header>

      <main>
        <section className="skills flex flex-col items-center">
          <Skills skills={skills} />
        </section>

        <section className="projects flex flex-col items-center">
          <Projects projectsLanguage={projectsLanguage} />
        </section>

        <section className="experience flex flex-col items-center">
          <Experience experience={experience} />
        </section>
      </main>

      <footer className="footer flex flex-col items-center">
        <Footer />
      </footer>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);

  return {
    props: {
      header: response.default.header,
      skills: response.default.skills,
      projectsLanguage: response.default.projects,
      experience: response.default.experience,
    },
  };
}
