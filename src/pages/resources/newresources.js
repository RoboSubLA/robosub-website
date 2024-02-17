import React from "react";
import Layout from "@theme/Layout";
import styles from "./resources.module.css";
import GithubSVG from "../../../static/img/badges/github-mark.svg";
import ArduinoSVG from "../../../static/img/badges/Arduino_Logo.svg";
import LinuxSVG from "../../../static/img/badges/Tux.svg";

import AnimatedBackground from "./background";

import {
  Button,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Grid,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AddBoxSharp } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: `"Consolas", "Courier New", "Roboto", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function ResourcesPage() {
  return (
    <Layout>
      <div className={styles.newMyDIV}>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              p: 4,
              backgroundImage:
                "linear-gradient(#6699CC, rgba(255, 255, 255, 0))",
            }}
          >
            <b>Resources for Members & Teams!</b>
          </Typography>
          <Container sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                p: 1,
                m: 1,
                maxWidth: "100%",
              }}
            >
              {logoCard(GithubSVG, "Git/Github", github)}
              {logoCard(ArduinoSVG, "Arduino", arduino)}
              {logoCard(LinuxSVG, "Linux", linuxfunc)}
            </Box>

            <Box
              padding={2}
              sx={{
                backgroundImage: "linear-gradient(#6699CC, #6633DD)",
                borderRadius: 3,
                boxShadow: 4,
              }}
            >
              <Typography variant="h3" component="h2">
                About Robosub
              </Typography>
              <br />
              <Box sx={{ flexDirection: "row" }}>
                <Grid item xs={6} md={12}>
                  <Typography variant="h4"> The Robosub Competition</Typography>
                  <a href="https://robonation.org/app/uploads/sites/4/2023/04/2023-RoboSub_Team-Handbook_v1.0.pdf">
                    <img
                      className="icon"
                      src={
                        require("@site/static/img/other/robosubLogo.png")
                          .default
                      }
                      width="200"
                      alt="RoboSub Logo"
                      title="RoboSub 2023 Handbook"
                    ></img>
                  </a>
                  <Typography variant="body1">
                    RoboSub is an international student competition. Student
                    teams from around the world design and build robotic
                    submarines, otherwise known as Autonomous Underwater
                    Vehicles (AUV). The behaviors demonstrated by these
                    experimental AUVs mimics those of real-world systems,
                    currently deployed around the world for underwater
                    exploration, seafloor mapping, and sonar localization,
                    amongst many others.
                  </Typography>
                </Grid>
                <br />
                <Grid item xs={6} md={12}>
                  <Typography variant="h4">RoboSubLA Team</Typography>

                  <Typography variant="body1">
                    Our team is split up into two project teams, the student
                    organization and the senior design team. The senior design
                    team builds one vehicle, and the club members build a
                    separate vehicle while being mentored by senior design
                    members. Both vehicles are intended for use in the
                    competition and strategies will be carefully considered
                    based on the capabilities of both vehicles. Members have the
                    opportunity to design advanced robotics systems and work on
                    an interdisciplinary project to gain experience working with
                    a team. Please see the progress tab for a better idea of
                    what our members are working on and what tasks and projects
                    are available to new members. Click our logo below to access
                    our past technical design reports!
                  </Typography>
                  <a href="https://drive.google.com/drive/folders/1Fvn-nsvH0T94bGatGdOTy14PgV97XC0h?usp=sharing">
                    <img
                      className="icon"
                      src={require("@site/static/img/RoboSubLogo.png").default}
                      width="200"
                      alt="RoboSubLA Logo"
                      title="Technical Design Reports"
                    ></img>
                  </a>
                </Grid>
              </Box>

              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>What is RoboSub?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    RoboSub is an international student competition. Student
                    teams from around the world design and build robotic
                    submarines, otherwise known as Autonomous Underwater
                    Vehicles (AUV). The behaviors demonstrated by these
                    experimental AUVs mimics those of real-world systems,
                    currently deployed around the world for underwater
                    exploration, seafloor mapping, and sonar localization,
                    amongst many others.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>The Competition</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Assemble your team and get busy designing, building and
                    testing the sub-systems of your AUV. Now put it all together
                    and demonstrate your vehicles autonomy by completing a
                    series of tasks through a pre-defined mission. Themes differ
                    every year. For the upcoming 2023 event, the competition's
                    will be based on the iconic sci-fy film Stargate.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <br />
            <Box
              padding={2}
              sx={{
                backgroundImage: "linear-gradient(#6633DD, #6699CC)",
                borderRadius: 3,
                boxShadow: 4,
              }}
            >
              <Typography variant="h3" component="h2">
                Team Breakdown - Subteams
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                p: 1,
                m: 1,
                maxWidth: "100%",
              }}
            >
              {teamCard(
                "Frame and Hull",
                "The Frame and Hull subteam is responsible for making the design of the AUV itself. Frame and Hull will be constructing and assembling the frame and hull. This subteam also works with SolidWorks to determine placement of other submarine components and varying approach decisions.",
                "frameHullTeam.jpeg",
                framehull
              )}
              {teamCard(
                "Electronics",
                "The Electronics subteam is responsible primarily on the management of internal current conversion from the battery to all of the other electronic parts in the robotic submarine. The team creates schematics for the functionality of buck converters. Additionally, this subteam will use software including KiCAD and EagleCAD to design and optimize PCB boards.",
                "electronicsTeam.jpeg",
                electronics
              )}
              {teamCard(
                "Actuated Systems",
                "The Actuated Systems subteam is responsible for designing and manufacturing the claw, ball dropper, and torpedo systems. Students focus on kinematics, finite element analysis, and computational fluid dynamics & effectively apply that in the design and manufacturing of the aforementioned submarine components.",
                "actsys.png",
                actuatedsys
              )}
              {teamCard(
                "Controls",
                "The Controls Team is responsible for making the AUV respond to movement instructions. Because the AUV is autonomous, the controls won't be manually operated by any person, but there will usually still be a GUI that either the Controls or Autonomy subteam must make, in order to debug the code and test the controllers. Controls also creates frameworks that will assess the sensors, the thrusters and other software components.",
                "controlsTeam.png",
                controls
              )}
              {teamCard(
                "Autonomy",
                "The Autonomy team is responsible for writing the state machine of the AUV. The state machine determines what the AUV is doing at any time, and it's very important when deciding what to do next. For example, an AUV might have a state that tells it to follow a path. If the AUV has reached the end of a path, then something has to be called by the state machine to tell the AUV to transition to the next state, which might tell the AUV to stop or do another task.",
                "autTeam.png",
                autonomy
              )}
              {teamCard(
                "Computer Vision",
                "The Computer Vision subteam is responsible for providing the AUV ability to locate & recognize objects. The main objective is object detection. YOLO (You Only Look Once) is a deep learning algorithm that CV uses to train custom object detection models for providing computer vision. The CV team is also responsible for interfacing with the submarine's camera for real-time detection using a ROS node.",
                "cvTeam.png",
                compvis
              )}
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </Layout>
  );
}

function logoCard(Component, text, toPage) {
  return (
    <Card
      sx={{
        m: 2,
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          boxShadow: 20,
          transform: "scale(1.1)",
        },
      }}
    >
      <CardActionArea onClick={() => toPage()}>
        <CardContent padding={2} sx={{ width: "12rem", height: "12rem" }}>
          <Component width="8rem" height="8rem" />
          <Typography variant="h5">{text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function teamCard(title, text, img, toPage) {
  return (
    <Card
      sx={{
        m: 2,
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          boxShadow: 20,
          transform: "scale(1.1)",
        },
      }}
    >
      <CardActionArea onClick={() => toPage()}>
        <CardContent padding={2} sx={{ width: "20rem" }}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{text}</Typography>
        </CardContent>

        <CardMedia
          component="img"
          image={require("@site/static/img/other/" + img).default}
          alt="Electronics Photo"
          sx={{ width: "20rem", height: "12rem", objectFit: "crop", bottom: 0 }}
        />
      </CardActionArea>
    </Card>
  );
}

function get_started() {
  location.assign("./newresources");
}

function linuxfunc() {
  location.assign("./other/linux");
}

function arduino() {
  location.assign("./other/arduino");
}

function github() {
  location.assign("./other/github");
}

// Teams Navbar Function
function teamsFunc() {
  document.getElementById("dropdown").classList.toggle(styles.show);
}

function framehull() {
  location.assign("./teams/framehull");
}

function electronics() {
  location.assign("./teams/electronics");
}

function actuatedsys() {
  location.assign("./teams/actuatedsys");
}

function controls() {
  location.assign("./teams/controls");
}

function autonomy() {
  location.assign("./teams/autonomy");
}

function compvis() {
  location.assign("./teams/compvis");
}
