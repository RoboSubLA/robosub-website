import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import { Grid, Box, Card, Chip } from "@mui/material";

import MathWorksSVG from "../../../static/img/sponsors/mathworks.svg";
import DassaultSystemesSVG from "../../../static/img/sponsors/Dassaultsystemes.svg";

import styles from "./styles.module.css";

const contactsJSON = {
  contacts: [
    {
      name: "RoboSubLA",
      title: "ME Department",
      address: "5151 State Univesity Dr, Los Angeles, CA 90032",
      email: "auvcalstatela@gmail.com",
      phone: "",
    },
    {
      name: "Mark Tufenkjian, Ph.D., P.E.",
      title: "Interim Associate Dean",
      address: "College of ECST",
      email: "mtufenk@calstatela.edu",
      phone: "323.343.5213",
    },
    {
      name: "He Shen, Ph.D.",
      title: "Associate Professor",
      address: "Mechanical Engineering Department",
      email: "he.shen@calstatela.edu",
      phone: "323.343.4510",
    },
    {
      name: "Aren Petrossian",
      title: "President",
      address: "",
      email: "apetros4@calstatela.edu",
      phone: "818.987.4406",
    },
    {
      name: "Paola Reyes",
      title: "Outreach Manager",
      address: "",
      email: "preyes29@calstatela.edu",
      phone: "526.968.8460",
    },
  ],
};

const SponsorsHeader = () => {
  return (
    <Box className={styles.ourSponsorsLogosContainer} sx={{ flexGrow: 1 }}>
      <h1 style={{ color: "gold" }}> GOLD SPONSORS</h1>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <img
            className={styles.csulaLogo}
            src={require("@site/static/img/sponsors/csula.png").default}
          />{" "}
        </Grid>
        <Grid item xs={4}>
          <img
            className={styles.vectornavLogo}
            src={require("@site/static/img/sponsors/vectornav.png").default}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            className={styles.onrLogo}
            src={require("@site/static/img/sponsors/onr.png").default}
          />
        </Grid>
      </Grid>

      <h1 style={{ color: "silver" }}>SILVER SPONSORS</h1>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <img
            className={styles.bluetrailLogo}
            src={require("@site/static/img/sponsors/bluetrail.png").default}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <img
            className={styles.blueroboticsLogo}
            src={require("@site/static/img/sponsors/bluerobotics.png").default}
          />
        </Grid>
      </Grid>
      <h1 style={{ color: "#48413A" }}> BRONZE SPONSORS </h1>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <MathWorksSVG className={styles.mathworksLogo} />
        </Grid>
        <Grid item xs={6}>
          <DassaultSystemesSVG className={styles.dassaultsystemesLogo} />
        </Grid>
      </Grid>
    </Box>
  );
};

const BecomeSponsor = () => {
  return (
    <div className={styles.beComeSponsorContainer}>
      <h1 className={styles.becomeSponsorTitle}>Become A Sponsor</h1>
      <p className={styles.becomeSponsorParagraph}>
        By sponsoring RoboSubLA, you will help provide Cal State LA students
        with opportunities to grow their classroom knowledge into real-world
        applicable skills for STEM-related fields. Our organization attracts
        hardworking students who are willing to dedicate their time to tackling
        the challenges that building AUVs presents. Students who participate in
        our project graduate with a strong multidisciplinary skill set and are
        often presented with internship or employment opportunities shortly
        after graduation.
      </p>
      <div className={styles.wrapperHowYouCanHelp}>
        <div className={styles.wrapperDiv1}>
          <h2>HOW CAN</h2>
          <h2>YOU HELP?</h2>
        </div>
        <div className={styles.wrapperDiv2}>
          <p>HARDWARE DONATIONS</p>
          <p>SOFTWARE DONATIONS</p>
          <p>MONETARY CONTRIBUTIONS</p>
          <p>DISCOUNTED PURCHASES</p>
        </div>
      </div>
      <div className={styles.pdfContainer}>
        <h1>Ready to sponsor RoboSubLA? Read our benefits packet!</h1>
        <object
          className={styles.pdf}
          width="500px"
          height="650px"
          data="https://drive.google.com/file/d/1PsGdtf7-BZoSfNbwImO0Ay_P16BJabqs/preview"
          type="application/pdf"
        ></object>
      </div>

      <Grid container spacing={1.5}>
        <Grid item xs={4}>
          <Card id={styles.tierCard} className={styles.bronzeTierCard}>
            <h2 className={styles.tierCardTitle}>BRONZE</h2>
            <h4 className={styles.tierCardMoneyRange}> $100 - $500 </h4>
            <ul>
              <li>Company logo on Website</li>
              <li>Small sized company logo on team competition uniform</li>
            </ul>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card id={styles.tierCard} className={styles.silverTierCard}>
            <h2 className={styles.tierCardTitle}>SILVER</h2>
            <h4 className={styles.tierCardMoneyRange}> $500 - $1,000 </h4>
            <ul>
              <li>Company logo on Website</li>
              <li>Medium sized company logo on team competition uniform</li>
              <li>
                Small company logo on {new Date().getFullYear()} submarine
              </li>
            </ul>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card id={styles.tierCard} className={styles.goldTierCard}>
            <h2 className={styles.tierCardTitle}>GOLD</h2>
            <h4 className={styles.tierCardMoneyRange}> $1,000+ </h4>

            <ul>
              <li>Logo & statement on website</li>
              <li>Large sized company logo on team competition uniform</li>
              <li>Large logo on {new Date().getFullYear()} submarine</li>
              <li>Sponsor spotlight on social media</li>
              <li>Opportunities for direct outreach</li>
            </ul>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const ContactUs = () => {
  const contactArray = contactsJSON.contacts;

  return contactArray.map((contact) => {
    return (
      <Grid item xs={4} sm={2} md={2}>
        <Card className={styles.contactCard}>
          <h3>{contact.name}</h3>
          <Chip
            className={styles.contactCardAccentColor}
            label={contact.title}
          />
          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </Card>
      </Grid>
    );
  });
};

export default function Sponsors() {
  return (
    <Layout>
      <div className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>Our Sponsors</h1>
        <p className={styles.heroParagraph}>Thank You for your contribution!</p>
        <SponsorsHeader />
      </div>
      <BecomeSponsor />
      <div className={styles.contactUsContainer}>
        <h1 className={styles.contactTitle}>CONTACT US</h1>
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
