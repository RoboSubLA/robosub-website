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
import { Grid, Card, Chip, CardContent } from "@mui/material";
import updatesJSON from "../../static/json/updates.json";
import { CardMedia } from "@mui/material";
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
          color="primary"
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
      <Grid item xs={4} sm={2} md={2}>
        <Card className="" variant="outlined">
          <h3>{contact.title}</h3>
          <CardMedia
            component="img"
            className={styles.image}
            image={require("@site/static/img/updates/" + contact.photo).default}
            alt="photo"
          />
          {generateChip(contact.type)}

          <p>{contact.description}</p>
          <p>{contact.date}</p>
        </Card>
      </Grid>
    );
  });
};

const UpdateO = () => {
  const updateArray = updatesJSON.october;

  return updateArray.map((contact) => {
    return (
      <Grid item xs={4} sm={2} md={2}>
        <Card className="" variant="outlined">
          <h3>{contact.title}</h3>
          <CardMedia
            component="img"
            className={styles.image}
            image={require("@site/static/img/updates/" + contact.photo).default}
            alt="photo"
          />
          {generateChip(contact.type)}

          <p>{contact.description}</p>
          <p>{contact.date}</p>
        </Card>
      </Grid>
    );
  });
};

const UpdateN = () => {
  const updateArray = updatesJSON.november;

  return updateArray.map((contact) => {
    return (
      <Grid item xs={4} sm={2} md={2}>
        <Card className="" variant="outlined">
          <h3>{contact.title}</h3>
          <CardMedia
            component="img"
            className={styles.image}
            image={require("@site/static/img/updates/" + contact.photo).default}
            alt="photo"
          />
          {generateChip(contact.type)}

          <p>{contact.description}</p>
          <p>{contact.date}</p>
        </Card>
      </Grid>
    );
  });
};

// const UpdateD = () => {
//   const updateArray = updatesJSON.december;

//   return updateArray.map((contact) => {
//     return (
//       <Grid item xs={4} sm={2} md={2}>
//         <Card className="" variant="outlined">
//           <h3>{contact.title}</h3>
//           <CardMedia
//             component="img"
//             className={styles.image}
//             image={require("@site/static/img/updates/" + contact.photo).default}
//             alt="photo"
//           />
//           {generateChip(contact.type)}

//           <p>{contact.description}</p>
//           <p>{contact.date}</p>
//         </Card>
//       </Grid>
//     );
//   });
// };

const UpdateF = () => {
  const updateArray = updatesJSON.february;

  return updateArray.map((contact) => {
    return (
      <Grid item xs={4} sm={2} md={2}>
        <Card className="" variant="outlined">
          <h3>{contact.title}</h3>
          <CardMedia
            component="img"
            className={styles.image}
            image={require("@site/static/img/updates/" + contact.photo).default}
            alt="photo"
          />
          {generateChip(contact.type)}

          <p>{contact.description}</p>
          <p>{contact.date}</p>
        </Card>
      </Grid>
    );
  });
};

const UpdateM = () => {
  const updateArray = updatesJSON.march;

  return updateArray.map((contact) => {
    return (
      // <Grid item xs={4} sm={2} md={2}>
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
          <Card sx={{ maxWidth: 315}}>
                <img
                  src={
                    require("@site/static/img/updates/" + contact.photo).default
                  }
                  loading="lazy"
                  alt=""
                  sx={{ maxHeight: 300}}
                />
            <CardContent>
                {contact.description}
            </CardContent>
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
      <Grid item xs={4} sm={2} md={2}>
        <Card className="" variant="outlined">
          <h3>{contact.title}</h3>
          <CardMedia
            component="img"
            className={styles.image}
            image={require("@site/static/img/updates/" + contact.photo).default}
            alt="photo"
          />
          {generateChip(contact.type)}

          <p>{contact.description}</p>
          <p>{contact.date}</p>
        </Card>
      </Grid>
    );
  });
};

const UpdateMay = () => {
  const updateArray = updatesJSON.may;

  return updateArray.map((contact) => {
    return (
      <Grid item xs={4} sm={2} md={2}>
        <Card className="" variant="outlined">
          <h3>{contact.title}</h3>
          <CardMedia
            component="img"
            className={styles.image}
            image={require("@site/static/img/updates/" + contact.photo).default}
            alt="photo"
          />
          {generateChip(contact.type)}

          <p>{contact.description}</p>
          <p>{contact.date}</p>
        </Card>
      </Grid>
    );
  });
};

export default function EventsPage() {
  return (
    <Layout>
      <div className={styles.background}>
        <Timeline position="alternate">
          <UpdateM></UpdateM>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Grid
          // sx={{ flexGrow: 1 }}
          className={styles.background}
          container
          spacing={1}
          columns={{ xs: 4, sm: 12, md: 10 }}
        >
          <Update></Update>
          <UpdateO></UpdateO>
          <UpdateN></UpdateN>
          <UpdateF></UpdateF>
          {/* <UpdateM></UpdateM> */}
          <UpdateA></UpdateA>
          <UpdateMay></UpdateMay>
        </Grid>
      </div>
    </Layout>
  );
}
