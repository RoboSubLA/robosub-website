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
import Typography from "@mui/material/Typography";
import AnimatedBackground from '../components/AnimatedBackground';
import { Grid, Card, Chip, CardContent } from "@mui/material";
import updatesJSON from "../../static/json/updates.json";
import styles from "./updates.module.css";

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
  const updateArray = updatesJSON.september.reverse();

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
  const updateArray = updatesJSON.october.reverse();

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
  const updateArray = updatesJSON.november.reverse();

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
  const updateArray = updatesJSON.february.reverse();
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
  const updateArray = updatesJSON.march.reverse();

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
  const updateArray = updatesJSON.april.reverse();

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
  const updateArray = updatesJSON.may.reverse();

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
      <h1 className={styles.heroTitle}> 2022-2023 Updates  </h1>
        <Timeline position="alternate">
          <UpdateMay></UpdateMay>
          <UpdateA></UpdateA>
          <UpdateM></UpdateM>
          <UpdateF></UpdateF>
          <UpdateN></UpdateN>
          <UpdateO></UpdateO>
          <Update></Update>
        </Timeline>
      </div>
    </Layout>
  );
}
