import React from "react";
import Layout from "@theme/Layout";
import styles from "./resources.module.css";
import GithubSVG from "../../../static/img/badges/github-mark.svg";
import ArduinoSVG from "../../../static/img/badges/Arduino_Logo.svg";
import LinuxSVG from "../../../static/img/badges/Tux.svg";

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
          <Container>
            <Typography variant="h2" component="h1" padding={5}>
              <b>Resources for Members & Teams!</b>
            </Typography>

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
                <Grid item xs={6} md={12}>
                  <Typography variant="h4">RoboSubLA Team</Typography>
                  <br />
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
              {card(GithubSVG, "Git/Github", github)}
              {card(ArduinoSVG, "Arduino", arduino)}
              {card(LinuxSVG, "Linux", linuxfunc)}
            </Box>

            <Box
              padding={2}
              sx={{ backgroundColor: "#6699CC", borderRadius: 3, boxShadow: 4 }}
            >
              <Typography variant="h3" component="h2">
                Team Breakdown - Subteams:
              </Typography>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </Layout>
  );
}

function card(Component, text, toPage) {
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
