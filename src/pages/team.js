import React from "react";
import Layout from "@theme/Layout";
import { Grid, Card, Chip, Box } from "@mui/material";
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
          <p><img src={require('@site/static/img/members/' + contact.crewImg).default}></img></p>

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
    <div border-radius='5px'>
      <h1 align='center' > Officers</h1>
      </div>
      <div className={styles.contactUsContainer}>
        <h1 className={styles.contactTitle}></h1>
        <div className={styles.cardsContainer}>
          <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={1}
            columns={{ xs: 4, sm: 10, md: 10 }}
          >
            <ContactUs />
          </Grid>
        </div>
      </div>
    </Layout>
  );
}
