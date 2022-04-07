import { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiSandsOfTime } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

import { useThemeChange } from "../context/themeContext";

export default function Experience({ experience }) {
  const { theme } = useThemeChange();
  const [width, setWidth] = useState(0);
  function updateWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    updateWidth();
  }, []);

  return (
    <div className="w-11/12 sm:w-3/4 max-w-7xl flex flex-col items-center my-6">
      <h2 className="skills__title text-3xl py-8 2xl:text-4xl">
        {experience.title}
      </h2>

      <VerticalTimeline animate={width < 640 ? false : true}>
      <VerticalTimelineElement
          className="testing"
          date="02/2022 - 04/2022"
          dateClassName={"date__timeline"}
          contentStyle={
            theme === "light"
              ? { background: "white" }
              : { background: "#dbdbdb" }
          }
          iconStyle={
            theme === "light"
              ? { background: "#AE944F", color: "#fff" }
              : { background: "#919191" }
          }
          icon={<MdComputer />}
        >
          <div>
            <h3 className="experience__title text-lg 2xl:text-2xl">
              {experience.jobs[2].title}
            </h3>
            <h4 className="experience__sub text-sm 2xl:text-xl">
              {experience.jobs[2].workplace}
            </h4>
            <p className="experience__sub">{experience.jobs[2].description}</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="testing"
          date="08/2021 - 11/2021"
          dateClassName={"date__timeline"}
          contentStyle={
            theme === "light"
              ? { background: "white" }
              : { background: "#dbdbdb" }
          }
          iconStyle={
            theme === "light"
              ? { background: "#AE944F", color: "#fff" }
              : { background: "#919191" }
          }
          icon={<MdComputer />}
        >
          <div>
            <h3 className="experience__title text-lg 2xl:text-2xl">
              {experience.jobs[1].title}
            </h3>
            <h4 className="experience__sub text-sm 2xl:text-xl">
              {experience.jobs[1].workplace}
            </h4>
            <p className="experience__sub">{experience.jobs[1].description}</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work testing"
          date="07/2019 - 07/2019"
          dateClassName={"date__timeline"}
          contentStyle={
            theme === "light"
              ? { background: "white" }
              : { background: "#dbdbdb" }
          }
          iconStyle={
            theme === "light"
              ? { background: "#AE944F", color: "#fff" }
              : { background: "#919191" }
          }
          icon={<MdComputer />}
        >
          <div>
            <h3 className="experience__title text-lg 2xl:text-2xl">
              {experience.jobs[0].title}
            </h3>
            <h4 className="experience__sub text-sm 2xl:text-xl">
              {experience.jobs[0].workplace}
            </h4>
            <p className="experience__sub">{experience.jobs[0].description}</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work testing"
          date="01/2018 - 02/2019"
          dateClassName={"date__timeline"}
          contentStyle={
            theme === "light"
              ? { background: "white" }
              : { background: "#dbdbdb" }
          }
          iconStyle={
            theme === "light"
              ? { background: "#AE944F", color: "#fff" }
              : { background: "#919191" }
          }
          icon={<FaUniversity />}
        >
          <div>
            <h3 className="experience__title text-lg 2xl:text-2xl">
              {experience.education[1].title}
            </h3>
            <h4 className="experience__sub text-sm 2xl:text-xl">
              {experience.education[1].school}
            </h4>
          </div>
          <p className="experience__sub">
            {experience.education[1].description}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work testing"
          date="03/2016 - 07/2021"
          dateClassName={"date__timeline"}
          contentStyle={
            theme === "light"
              ? { background: "white" }
              : { background: "#dbdbdb" }
          }
          iconStyle={
            theme === "light"
              ? { background: "#AE944F", color: "#fff" }
              : { background: "#919191" }
          }
          icon={<FaUniversity />}
        >
          <div>
            <h3 className="experience__title text-lg 2xl:text-2xl">
              {experience.education[0].title}
            </h3>
            <h4 className="experience__sub text-sm 2xl:text-xl">
              {experience.education[0].school}
            </h4>
          </div>
          <p className="experience__sub">
            {experience.education[0].description}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={
            theme === "light"
              ? { background: "#AE944F", color: "#fff" }
              : { background: "#919191" }
          }
          icon={<GiSandsOfTime />}
        />
      </VerticalTimeline>
    </div>
  );
}
