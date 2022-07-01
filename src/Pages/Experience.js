import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<IoSchool />}>
          <h3 className="vertical-timeline-element-title">
            Bachelor’s Degree Communication and Electronics Department
          </h3>
          <p> Delta Higher Instute</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdOutlineWork />}>
          <h3 className="vertical-timeline-element-title">
            Orascom Construction PLC (Dumyat)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Construction of a power station
          </h4>
          <p>Electrical Site Engineer.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdOutlineWork />}>
          <h3 className="vertical-timeline-element-title">
            Kharafi National (Dumyat)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Station Maintenance
          </h4>
          <p>Electrical Site Engineer.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdOutlineWork />}>
          <h3 className="vertical-timeline-element-title">
            PETROJET (Hurghada)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Electrical Site Engineer
          </h4>
          <p>Electrical Site Engineer.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdOutlineWork />}>
          <h3 className="vertical-timeline-element-title">
            Tasawk Training (Mansoura)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Front-End Developer
          </h4>
          <p>Build Multipule WebSites using HTML, CSS, JavaScript, jQuery.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdOutlineWork />}>
          <h3 className="vertical-timeline-element-title">
            Freelance Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Front-End Developer, WordPress Developer
          </h4>
          <p>
            Build Home Care Site using ReactJs and Khdamaty site using
            WordPress.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
