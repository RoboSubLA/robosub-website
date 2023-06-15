import React from "react";
import Layout from "@theme/Layout";

import { Grid, Card, Chip, CardMedia } from "@mui/material";
import styles from "./sponsors/styles.module.css";

import crewJSON from "../../static/json/team.json";

const ContactUs = () => {
  const crewArray = crewJSON.crew;

  return crewArray.map((contact) => {
    return (
      <Grid item xs={4} sm={2} md={2}>
        <Card className={styles.contactCard}>
          <h3>{contact.name}</h3>
          <Chip
            className={styles.contactCardAccentColor}
            label={contact.title}
          />
         <CardMedia
            component="img"
   className={styles.cardIMG}
            src={require("@site/static/img/members/" + contact.crewImg).default}
            alt="alt_text"
          />
          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </Card>
      </Grid>
    );
  });
};

const ContactClub = () => {
  const crewArray = crewJSON.clubTeam;

  return crewArray.map((contact) => {
    return (
      <Grid item xs={4} sm={2} md={2}>
        <Card className={styles.contactCard}>
          <h3>{contact.name}</h3>
          <Chip
            className={styles.contactCardAccentColor}
            label={contact.title}
          />
             <CardMedia
            component="img"
   className={styles.cardIMG}
            src={require("@site/static/img/members/" + contact.crewImg).default}
            alt="alt_text"
          />

          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </Card>
      </Grid>
    );
  });
};

const ContactSeniors = () => {
  const crewArray = crewJSON.seniorDesign;

  return crewArray.map((contact) => {
    return (
      <Grid item xs={4} sm={2} md={2}>
        <Card className={styles.contactCard}>
          <h3>{contact.name}</h3>
          <Chip
            className={styles.contactCardAccentColor}
            label={contact.title}
          />
      <CardMedia
            component="img"
   className={styles.cardIMG}
            src={require("@site/static/img/members/" + contact.crewImg).default}
            alt="alt_text"
          />

          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </Card>
      </Grid>
    );
  });
};

export default function TeamPage() {
  return (
    <Layout>
      <div border-radius="5px"></div>
      <div className={styles.contactUsContainer}>
        <div className={styles.cardsContainer}>
          <h1
            className={styles.contactTitle}
            style={{
              backgroundColor: "gray",
              color: "white",
              fontSize: "4rem;",
            }}
            align="center"
          >
            Officers
          </h1>

          <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={1}
            columns={{ xs: 4, sm: 10, md: 8 }}
          >
            <ContactUs />
          </Grid>
          <h1
            className={styles.contactTitle}
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "4rem;",
            }}
            align="center"
          >
            Club Team
          </h1>
          <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={1}
            columns={{ xs: 4, sm: 10, md: 8 }}
          >
            <ContactClub />
          </Grid>

          <h1
            className={styles.contactTitle}
            align="center"
            style={{
              backgroundColor: "teal",
              color: "white",
              fontSize: "4rem;",
            }}
          >
            Senior Design
          </h1>
          <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={1}
            columns={{ xs: 4, sm: 10, md: 10 }}
          >
            <ContactSeniors />
          </Grid>
        </div>
      </div>
    </Layout>
  );
}
