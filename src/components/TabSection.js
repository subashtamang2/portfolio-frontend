import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles for React Tabs
import ProfessionalSkills from "./ProfessionalSkills";
import Education from "./Education";
import Experience from "./Experience";
import Achievements from "./Achievements";

const TabSection = () => {
  return (




    <div className="tab-container" style={{ padding: "20px", backgroundColor: "#212428", color: "#fff" }}>
      <div>
        <h1 className="text-5xl font-bold text-center mb-20">My Resume</h1>
      </div>

      <Tabs>
        {/* Tab Headers */}
        <TabList className="tab-list" style={{ display: "flex", justifyContent: "space-around", border: "none" }}>
          <Tab style={{ cursor: "pointer" }}>Education</Tab>
          <Tab style={{ cursor: "pointer" }}>Professional Skills</Tab>
          <Tab style={{ cursor: "pointer" }}>Experience</Tab>
          <Tab style={{ cursor: "pointer" }}>Achievements</Tab>
        </TabList>

        {/* Education Content */}
        <TabPanel>
          <Education />

        </TabPanel>

        {/* Professional Skills Content */}
        <TabPanel>
          <h2>Professional Skills</h2>
          <ProfessionalSkills />
        </TabPanel>

        {/* Experience Content */}
        <TabPanel>
          <Experience />
        </TabPanel>

        {/* Achievements Content */}
        <TabPanel>
          <Achievements />
        </TabPanel>
      </Tabs>
    </div>

  );
};

export default TabSection;
