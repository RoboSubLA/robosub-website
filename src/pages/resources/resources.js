import React from "react";
import Layout from "@theme/Layout";
import styles from "./resources.module.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";

export default function ResourcesPage() {
  function get_started() {
    location.assign("./resources");
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

  return (
    <Layout>
      {/* Side Nav Bar */}
      <div className={styles.pageWrapper}>
        <nav className={styles.navbar}>
          <ul className={styles.navbar_elements}>
            <button onClick={get_started} className={styles.btn}>
              GET STARTED
            </button>

            <button onClick={teamsFunc} className={styles.btn}>
              TEAMS
            </button>

            <div id="dropdown" className={styles.DPContent}>
              <a href="./teams/framehull">Frame and Hull</a>
              <a href="./teams/electronics">Electronics</a>
              <a href="./teams/actuatedsys">Actuated Systems</a>
              <a href="./teams/controls">Controls</a>
              <a href="./teams/autonomy">Autonomy</a>
              <a href="./teams/compvis">Computer Vision</a>
            </div>

            <button onClick={arduino} className={styles.btn}>
              ARDUINO
            </button>

            <button onClick={linuxfunc} className={styles.btn}>
              LINUX
            </button>

            <button onClick={github} className={styles.btn}>
              GIT & GITHUB
            </button>
          </ul>
        </nav>

        {/* Default Div */}
        <div className={styles.myDIV}>
          <p id="current">
            <h1 style={{ fontSize: "4rem" }}>
              {" "}
              Welcome Members & RoboSub Teams!{" "}
            </h1>
            <div className={styles.textPara} style={{ backgroundColor: "#6699CC" }}>
              Here at{" "}
              <span style={{ color: "222222" }}>
                <b>
                  <u>RoboSub LA</u>
                </b>
              </span>
              , we are passionate about Robotics; we want to share what we know
              with our community of robotic enthusiasts and foster technical
              skills through a hands-on, collaborative approach.
              <br></br> <br></br>
              {/* <p> */}
                <h2 style={{ color: "darker" }}>
                  <u>
                    {" "}
                    <b>ROBOSUB INTERNATIONAL COMPETITION</b>
                  </u>
                </h2>{" "}
                <h4 style={{ color: "yellow" }}>What is RoboSub?</h4>
                RoboSub is an international student competition. Student teams
                from around the world design and build robotic submarines,
                otherwise known as Autonomous Underwater Vehicles (AUV). The
                behaviors demonstrated by these experimental AUVs mimics those
                of real-world systems, currently deployed around the world for
                underwater exploration, seafloor mapping, and sonar
                localization, amongst many others.<br></br>
                <br></br>
                <h4 style={{ color: "yellow" }}>The Competition</h4>
                Assemble your team and get busy designing, building and testing
                the sub-systems of your AUV. Now put it all together and
                demonstrate your vehicles autonomy by completing a series of
                tasks through a pre-defined mission. Themes differ every year.
                For the upcoming 2023 event, the competition's will be based on
                the iconic sci-fy film Stargate. Click the RoboSub logo below to
                learn more. <br></br>
                <br></br>
                <a href="https://robonation.org/app/uploads/sites/4/2023/04/2023-RoboSub_Team-Handbook_v1.0.pdf">
                  <img
                    className="icon"
                    src={
                      require("@site/static/img/other/robosubLogo.png").default
                    }
                    width="200"
                  ></img>
                </a>
                <h2 style={{ color: "teal" }}>
                  <b>
                    <u>ROBOSUB LOS ANGELES TEAM</u>
                  </b>
                </h2>
                Our team is split up into two project teams, the student
                organization and the senior design team. The senior design team
                builds one vehicle, and the club members build a separate
                vehicle while being mentored by senior design members. Both
                vehicles are intended for use in the competition and strategies
                will be carefully considered based on the capabilities of both
                vehicles. Members have the opportunity to design advanced
                robotics systems and work on an interdisciplinary project to
                gain experience working with a team. Please see the progress tab
                for a better idea of what our members are working on and what
                tasks and projects are available to new members.
            </div>

            <h2> Team Breakdown - Subteams: </h2>

            {/* Teams */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card sx={{ maxWidth: 300, margin: "20px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    require("@site/static/img/other/frameHullTeam.jpeg").default
                  }
                  alt="Frame & Hull Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    FRAME AND HULL
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Frame and Hull subteam is responsible for making the
                    design of the AUV itself. Frame and Hull will be
                    constructing and assembling the frame and hull. This subteam
                    also works with SolidWorks to determine placement of other
                    submarine components and varying approach decisions.
                    <br></br>
                    <br></br>
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="./teams/framehull">
                    <Button size="small" color="primary">
                      LEARN MORE
                    </Button>
                  </a>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 300, margin: "20px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    require("@site/static/img/other/electronicsTeam.jpeg")
                      .default
                  }
                  alt="Electronics Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ELECTRONICS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Electronics subteam is responsible primarily on the
                    management of internal current conversion from the battery
                    to all of the other electronic parts in the robotic
                    submarine. The team creates schematics for the functionality
                    of buck converters. Additionally, this subteam will use
                    software including KiCAD and EagleCAD to design and optimize
                    PCB boards.
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="./teams/electronics">
                    <Button size="small" color="primary">
                      LEARN MORE
                    </Button>
                  </a>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 300, margin: "20px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={require("@site/static/img/other/actsys.png").default}
                  alt="Actuated Systems Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ACTUATED SYSTEMS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Actuated Systems subteam is responsible for designing
                    and manufacturing the claw, ball dropper, and torpedo
                    systems. Students focus on kinematics, finite element
                    analysis, and computational fluid dynamics & effectively
                    apply that in the design and manufacturing of the
                    aforementioned submarine components.
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="./teams/actuatedsys">
                    <Button size="small" color="primary">
                      LEARN MORE
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card sx={{ maxWidth: 300, margin: "20px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    require("@site/static/img/other/controlsTeam.png").default
                  }
                  alt="Controls Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CONTROLS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Controls Team is responsible for making the AUV respond
                    to movement instructions. Because the AUV is autonomous, the
                    controls won't be manually operated by any person, but there
                    will usually still be a GUI that either the Controls or
                    Autonomy subteam must make, in order to debug the code and
                    test the controllers. Controls also creates frameworks that
                    will assess the sensors, the thrusters and other software
                    components.<br></br>
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="./teams/controls">
                    <Button size="small" color="primary">
                      LEARN MORE
                    </Button>
                  </a>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 300, margin: "20px" }}>
                {/* <CardActionArea> */}
                <CardMedia
                  component="img"
                  height="140"
                  image={require("@site/static/img/other/autTeam.png").default}
                  alt="Autonomy Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    AUTONOMY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Autonomy team is responsible for writing the state
                    machine of the AUV. The state machine determines what the
                    AUV is doing at any time, and it's very important when
                    deciding what to do next. For example, an AUV might have a
                    state that tells it to follow a path. If the AUV has reached
                    the end of a path, then something has to be called by the
                    state machine to tell the AUV to transition to the next
                    state, which might tell the AUV to stop or do another task.
                    <br></br>
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                  <a href="./teams/autonomy">
                    <Button size="small" color="primary">
                      LEARN MORE
                    </Button>
                  </a>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 300, margin: "20px" }}>
                {/* <CardActionArea> */}
                <CardMedia
                  component="img"
                  height="140"
                  image={require("@site/static/img/other/cvTeam.png").default}
                  alt="CV Team Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    COMPUTER VISION
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Computer Vision subteam is responsible for providing the
                    AUV ability to locate & recognize objects. The main
                    objective is object detection. YOLO (You Only Look Once) is
                    a deep learning algorithm that CV uses to train custom
                    object detection models for providing computer vision. The
                    CV team is also responsible for interfacing with the
                    submarine's camera for real-time detection using a ROS node.
                    <br></br>
                    <br></br>
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="./teams/compvis">
                    <Button size="small" color="primary">
                      LEARN MORE
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </p>
        </div>
      </div>
    </Layout>
  );
}
