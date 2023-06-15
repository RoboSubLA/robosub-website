import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import crewJSON from "../../../../static/json/oldTeams.json";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

//for the tab box
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 6 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Team = () => {
  const teamArray = crewJSON.eighteenTeam;

  return teamArray.map((member) => {
    return (
      <tr>
        <td>{member.position}</td>
        <td>{member.name}</td>
        <td>{member.major}</td>
      </tr>
    );
  });
};

export default function twentyNineteen() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div className={styles.myDIV}>
        <h1 style={{ fontSize: "4rem" }}> 2019-2020 / 2020-2021 </h1>
        <h3 className={styles.header}>
          LANTURN & DONPHAN ~ (Senior Design & Club Team )
        </h3>
        <table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>POSITION</th>
              <th>NAME</th>
              <th>MAJOR</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <Team></Team>
          </tbody>
        </table>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: "hsla(212, 97%, 59%, 0.38)",
          }}
        >
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Lanturn Mechanical" />
            <Tab label="Lanturn Electrical" />
            <Tab label="Lanturn Software" />
            <Tab label="|"></Tab>
            <Tab label="Donphan Mechanical" />
            <Tab label="Donphan Electrical" />
            <Tab label="Donphan Software" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          The mechanical design for CSULA’s Lanturn submarine was focused on
          ease of manufacture and maintenance. Key design features are a
          box-shaped hull with a removable electronics shelving unit and a frame
          with slotted mounting points for modular mounting of subassemblies.
          Lanturn’s hull primary structure is formed by TIG welded sheets of AL
          6061-T6. The lid is made of transparent acrylic, and seals to the hull
          primary structure through a peripheral nitrile gasket compressed by
          latches. Lanturn is outfitted with forward and downward facing cameras
          and features a rear connector plate populated with a standardized set
          of Seacon connectors. The electronics shelving unit is made of acrylic
          sheets laser cut to shape/size with equally spaced mounting holes that
          span each sheet. An internal connector plate and connectorized
          electronics allow the shelving unit to be unplugged and removed from
          the hull. 90 degree snapping latches allow the shelves to be laid flat
          outside of the sub for easy maintenance and troubleshooting. <br></br>
          <br></br>
          <img
            className={styles.descIMG}
            src={require("@site/static/img/other/2019lanturn1.png").default}
          />
          <br></br>One design criteria requires that components such as sensors
          and thrusters be easily added and removed in few steps to minimize
          time spent on maintenance, in return allocating more time to
          underwater testing. This requirement was met by creating a modular
          frame that acts as a hub for mounting components, as shown in the
          frame image. The design uses a combination of 6061-t6 aluminum t-slot
          extrusions and flat bars to avoid complex machining, which contributes
          to ease of scaling if more mounting surfaces are needed. Components
          are slid into the t-slot fixture brackets then held in place by
          tightening one or more set screws.  <br></br>
          <br></br>
          <img
            className={styles.descIMG}
            src={require("@site/static/img/other/2019lanturn2.jpeg").default}
          />
          <br></br> In addition to
          the frame and hull, lanturn features a claw, pneumatic torpedo system,
          and a DC motor controlled dropper. The claw uses a servo motor to
          rotate the gears, which are used to open and close the grippers. The
          grippers hold the objects in place after picking them up. The torpedo
          system uses a CO2 bucket changer for easy replacement of CO2
          cartridges, an ASA regulator to decrease the CO2 pressure to the
          desired value, a solenoid valve to release the CO2 to launch the
          torpedo, and the 3D printed torpedoes themselves. The dropper uses a
          DC motor to rotate the platform 90 degrees at a time to release 3
          markers one at a time. The lid is used to replace the markers after
          each run. <br></br>
          <img
            className={styles.descIMG}
            src={require("@site/static/img/other/2019lanturn3.png").default}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          The electrical system on Lanturn consists of a motherboard, a thruster
          signal routing board, a power distribution board, several
          microcontrollers, and a sensor suite, all powered by a single 14.8V,
          20Ah LiPo battery. Its sensor suite includes an IMU, a barometer,
          hydrophones, an active sonar module, a DVL, and cameras. <br></br>
          <br></br>To reduce the amount of processing required for the detection
          of obstacles, the team experimented with the use of a sonar module.
          The sonar module data was processed on a microcontroller external to
          the motherboard, allowing more CPU usage for computer vision and
          hydrophones signal processing. In addition, the team was successful in
          developing a cross-correlation based sound localization system using a
          widely spaced, triangular array of 3 hydrophones. Data for this system
          is collected using an oscilloscope module, which was significantly
          cheaper and more open-source than commercial data acquisition systems.
          The hardware block diagram is shown below.
        </TabPanel>
        <TabPanel value={value} index={2}>
          Lanturn’s software consists of a stabilization controller, several
          intermediate data acquisition/ processing programs, a computer vision
          system, and a main “mission planning” module for decision making. The
          software architecture is shown below. <br></br> <br></br>
          <img
            className={styles.descIMG}
            src={require("@site/static/img/other/2019lanturn4.png").default}
          />
          <br></br><br></br>A Python API
          sends information from the sensor hardware to the submarine
          motherboard, where the mission planning software is running. The
          mission planning software contains several state machines for each
          competition task. Data is transferred among these state machines
          through ROS publishers and subscribers, and the mission planning
          module's output is sent to the submarine's controls module. The
          controls module computes the necessary stabilization motor commands,
          and then sends both the computed stabilization commands and the
          movement commands from mission planning to the motors to both
          stabilize and move the submarine. The decision-making process is based
          on previous states and current sensor information. Each state has
          several subscribers. To increase the efficiency of message passing,
          the team created custom message types to send larger packets of
          information in one message. Computer vision collects data from an
          image stream using OpenCV, where the data is then processed by YOLO.
          The detected objects are then published to mission planning by the
          computer vision module.
        </TabPanel>
        <TabPanel value={value} index={4}>
          Donphan consists of a single 8-inch diameter acrylic tube, which
          houses all electrical components; two machined aluminum side plates,
          for mounting the majority of external components; an additional base
          plate for mounting the downward facing camera and other equipment; two
          side mounts for the vertical thrusters; and a rear mount for the
          back-facing thrusters.
          <br></br> <br></br>
          <img
            className={styles.descIMG}
            src={require("@site/static/img/other/donphan1.png").default}
          />
          <br></br><br></br>
          The objectives of this design include modularity and reduction of drag
          in the water. To ensure easy access to all of the sub's internals, six
          nuts on the half-inch diameter threaded rods can be removed to quickly
          access all of the internal electrical components. The screws at the
          bottom have their threads filed off at the end so that they can slot
          into the base plate as pegs, while still being easily replaceable. In
          addition, the surface area perpendicular to forward motion was
          minimized to achieve minimal drag. During the prototyping phase,
          several of Donphan's mechanical components were 3D printed at a
          smaller scale and test fitted to ensure that the manufactured version
          would be modular as intended.
          <br></br>
          <img
            className={styles.descIMG}
            src={require("@site/static/img/other/donphan2.png").default}
          />
        </TabPanel>

        <TabPanel value={value} index={5}>
          {" "}
          The electrical system on Donphan consists of a Raspberry Pi, a
          thruster signal routing board, a buck converter, and a sensor suite,
          all powered by a single 14.8V, 10Ah LiPo battery. Its sensor suite
          includes an IMU, a barometer, and cameras. Donphan's electrical system
          is extremely compact, as all of its data acquisition, processing, and
          decision making is done on a single Raspberry Pi, as compared to most
          systems which use intermediate microcontrollers for data collection.
          The movement controls system is a standard multi-PID control system,
          with separate PID gains for yaw, pitch, depth, and forward/backward
          distance.
        </TabPanel>
        <TabPanel value={value} index={6}>
          {" "}
          DONPHAN’s software architecture is split into modules. The mission
          planning module is responsible for monitoring data from all of the
          sensors as well as the computer vision module. It then decides the
          actions the submarine will take, depending on what objects it has seen
          as well as what tasks it has yet to complete, and sends the
          appropriate commands to the controls system. <br></br> <br></br>
          <img
            className={styles.descIMG}
            src={require("@site/static/img/other/donphan3.png").default}
          />
          <br></br> <br></br>
          The state machine is responsible for the monitoring of sensors,
          tracking of specified tasks, and execution of task related activities.
          It is based on a loop of searching for an uncompleted task,
          approaching the task, executing the task, and disengaging/tracking
          completed tasks. Each state is responsible for obtaining relevant data
          from the sensor modules, as well as controlling the submarine. Each
          approach and execution state is unique to the task, allowing the
          programming and testing of a specific task without the need to have
          the entire state machine running. It also allows for setting a time
          limit on tasks, allowing the submarine to move on if the task takes
          too long to complete. The modularity of this system will allow for
          greater reuse of code, as well as faster modifications without
          disturbing the function of other task states. <br></br> <br></br>
          The computer vision system on Donphan is a simple OpenCV Haar Cascade
          system. It was trained on several photos taken of the competition
          objects and can successfully classify several of the objects.
        </TabPanel>
      </Box>
    </Layout>
  );
}
