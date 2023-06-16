import React from "react";
import Layout from "@theme/Layout";
import PowerIcon from "@mui/icons-material/Power";
import HandymanIcon from "@mui/icons-material/Handyman";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CampaignIcon from "@mui/icons-material/Campaign";
import Typography from "@mui/material/Typography";
import AnimatedBackground from "../components/AnimatedBackground";
import { Grid, Card, Chip, CardContent } from "@mui/material";
import updatesJSON from "../../static/json/updates.json";
import styles from "./updates.module.css";
import { Campaign } from "@mui/icons-material";

const UpdateEnum = {
  FrameHull: "FH",
  Electronics: "E",
  Controls: "C",
  Autonomy: "A",
  CV: "CV",
};

const generateChip = (type) => {
  switch (type) {
    case UpdateEnum.FrameHull:
      return (
        <Chip
          className="FH"
          icon={<HandymanIcon />}
          color="info"
          component="a"
          href="../resources/teams/framehull"
          label="Frame and Hull"
        />
      );

    case UpdateEnum.Electronics:
      return (
        <Chip
          className="E"
          icon={<PowerIcon />}
          component="a"
          color="warning"
          href="../resources/teams/electronics"
          label="Electronics"
        />
      );

    case UpdateEnum.Controls:
      return (
        <Chip
          className="C"
          icon={<DisplaySettingsIcon />}
          color="success"
          component="a"
          href="../resources/teams/controls"
          label="Controls"
        />
      );
    case UpdateEnum.Autonomy:
      return (
        <Chip
          className="A"
          icon={<SmartToyIcon />}
          component="a"
          color="warning"
          href="../resources/teams/autonomy"
          label="Autonomy"
        />
      );
    case UpdateEnum.CV:
      return (
        <Chip
          className="CV"
          icon={<VisibilityIcon />}
          component="a"
          color="secondary"
          href="../resources/teams/compvis"
          label="Computer Vision"
        />
      );
    default:
      return (
        <Chip
          className="None"
          icon={<VisibilityIcon />}
          component="a"
          color="secondary"
          href="../resources/teams/compvis"
          label="Computer Vision"
        />
      );
  }
};

const Update = () => {
  const updateArray = updatesJSON.september;

  return updateArray.map((contact) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          // align="right"
          variant="body2"
          color="text.primary"
        >
          <h3>{contact.title}</h3>
          {contact.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {generateChip(contact.type)}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Card className={styles.card}> */}
          <Card sx={{ maxWidth: 315 }}>
            <img
              src={require("@site/static/img/updates/" + contact.photo).default}
              loading="lazy"
              alt="Team Update Image"
              sx={{ maxHeight: 300 }}
            />
            <CardContent>{contact.description}</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

const UpdateO = () => {
  const updateArray = updatesJSON.october;

  return updateArray.map((contact) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          // align="right"
          variant="body2"
          color="text.primary"
        >
          <h3>{contact.title}</h3>
          {contact.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {generateChip(contact.type)}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Card className={styles.card}> */}
          <Card sx={{ maxWidth: 315 }}>
            <img
              src={require("@site/static/img/updates/" + contact.photo).default}
              loading="lazy"
              alt="Team Update Image"
              sx={{ maxHeight: 300 }}
            />
            <CardContent>{contact.description}</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

const UpdateN = () => {
  const updateArray = updatesJSON.november;
  return updateArray.map((contact) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          // align="right"
          variant="body2"
          color="text.primary"
        >
          <h3>{contact.title}</h3>
          {contact.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {generateChip(contact.type)}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Card className={styles.card}> */}
          <Card sx={{ maxWidth: 315 }}>
            <img
              src={require("@site/static/img/updates/" + contact.photo).default}
              loading="lazy"
              alt="Team Update Image"
              sx={{ maxHeight: 300 }}
            />
            <CardContent>{contact.description}</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

const UpdateF = () => {
  const updateArray = updatesJSON.february;

  return updateArray.map((contact) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          // align="right"
          variant="body2"
          color="text.primary"
        >
          <h3>{contact.title}</h3>
          {contact.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {generateChip(contact.type)}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Card className={styles.card}> */}
          <Card sx={{ maxWidth: 315 }}>
            <img
              src={require("@site/static/img/updates/" + contact.photo).default}
              loading="lazy"
              alt="Team Update Image"
              sx={{ maxHeight: 300 }}
            />
            <CardContent>{contact.description}</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

const UpdateM = () => {
  const updateArray = updatesJSON.march;

  return updateArray.map((contact) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          // align="right"
          variant="body2"
          color="text.primary"
        >
          <h3>{contact.title}</h3>
          {contact.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {generateChip(contact.type)}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Card className={styles.card}> */}
          <Card sx={{ maxWidth: 315 }}>
            <img
              src={require("@site/static/img/updates/" + contact.photo).default}
              loading="lazy"
              alt="Team Update Image"
              sx={{ maxHeight: 300 }}
            />
            <CardContent>{contact.description}</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

const UpdateA = () => {
  const updateArray = updatesJSON.april;

  return updateArray.map((contact) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          // align="right"
          variant="body2"
          color="text.primary"
        >
          <h3>{contact.title}</h3>
          {contact.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {generateChip(contact.type)}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Card className={styles.card}> */}
          <Card sx={{ maxWidth: 315 }}>
            <img
              src={require("@site/static/img/updates/" + contact.photo).default}
              loading="lazy"
              alt="Team Update Image"
              sx={{ maxHeight: 300 }}
            />
            <CardContent>{contact.description}</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

const UpdateMay = () => {
  const updateArray = updatesJSON.may;

  return updateArray.map((contact) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          // align="right"
          variant="body2"
          color="text.primary"
        >
          <h3>{contact.title}</h3>
          {contact.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {generateChip(contact.type)}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <Card className={styles.card}> */}
          <Card sx={{ maxWidth: 315 }}>
            <img
              src={require("@site/static/img/updates/" + contact.photo).default}
              loading="lazy"
              alt=""
              sx={{ maxHeight: 300 }}
            />
            <CardContent>{contact.description}</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

export default function EventsPage() {
  return (
    <Layout>
      <div className={styles.background}>
        <h1 className={styles.heroTitle}> Lanturn & Wailord Updates </h1>
        <Timeline position="alternate">
          <h2 className={styles.subheading}> June 2023</h2>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.primary"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>

          <h2 className={styles.subheading}> May 2023</h2>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.primary"
            >
              <h3>Spring Semester Ends </h3>
              May 27, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CampaignIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              ENJOY YOUR SUMMER FOR A BIT, WE'LL BE WORKING THROUGH IT!!!
            </TimelineContent>
          </TimelineItem>

          <UpdateMay></UpdateMay>
          <h2 className={styles.subheading}> April 2023</h2>
          <UpdateA></UpdateA>
          <h2 className={styles.subheading}> March 2023</h2>
          <UpdateM></UpdateM>
          <h2 className={styles.subheading}> February 2023</h2>
          <UpdateF></UpdateF>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.primary"
            >
              <h3>Spring Semester Begins</h3>
              January 23, 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CampaignIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Welcome Back Eagles!!!</TimelineContent>
          </TimelineItem>

          <h2 className={styles.subheading}> November 2022</h2>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.primary"
            >
              <h3>Fall Semester Ends</h3>
              November 11 - December 23, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CampaignIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              ENJOY FALL RECESS, GOOD LUCK ON YOUR FINALS, & WE'LL SEE YOU IN
              THE SPRING
            </TimelineContent>
          </TimelineItem>
          <UpdateN></UpdateN>
          <h2 className={styles.subheading}> October 2022</h2>
          <UpdateO></UpdateO>
          <h2 className={styles.subheading}> September 2022</h2>
          <Update></Update>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.primary"
            >
              <h3>Fall Semester Begins</h3>
              August 22, 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CampaignIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Welcome Eagles!!!</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </Layout>
  );
}
