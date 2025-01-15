import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles for React Tabs

import Education from "./Education";

import Achievements from "./Achievements";

const TabSection = () => {
  return (




    <div className="tab-container" style={{ padding: "20px" }}>
      <div className="mt-96">
        <h1 className="text-5xl font-bold text-center mb-20">My Resume</h1>
      </div>

      <Tabs>
        {/* Tab Headers */}
        <TabList className="tab-list" style={{ display: "flex", justifyContent: "space-around", border: "none" }}>
          <Tab style={{ cursor: "pointer" }}>Education</Tab>

          <Tab style={{ cursor: "pointer" }}>Achievements</Tab>
        </TabList>

        {/* Education Content */}
        <TabPanel>
          <Education />

        </TabPanel>




        {/* Achievements Content */}
        <TabPanel>
          <Achievements />
        </TabPanel>
      </Tabs>
      <div>
        <hr className="border-t-2 border-gray-600 mx-auto w-full my-8" />
      </div>
    </div>

  );
};

export default TabSection;
