import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

import styles from "./styles.module.css";

import fleetJSON from "../../../static/json/fleet.json";

const SubsCard = ({ array }) => {
  return array.map((sub) => {
    return (
      <Card className={styles.subCard} sx={{ maxWidth: 600 }}>
        <CardMedia
          className={styles.subImg}
          component="img"
          height="250"
          image={require("@site/static/img/auv/" + sub.subImg).default}
          alt="sub image"
        />

        <CardContent className={styles.subCardContent}>
          <Typography
            className={styles.subName}
            style={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {sub.subName}
          </Typography>
          <Typography
            className={styles.subTeam}
            style={{ textAlign: "center" }}
            variant="body2"
            color="text.secondary"
          >
            {sub.team}
          </Typography>
        </CardContent>
      </Card>
    );
  });
};

const RankingChips = ({ rankings }) => {
  return (
    <div className={styles.chipContainer}>
      <Chip
        className={styles.rankingChip}
        label={"Overall: " + rankings.overall}
      />
      <Chip className={styles.rankingChip} label={"Video: " + rankings.video} />
      <Chip
        className={styles.rankingChip}
        label={"Website: " + rankings.website}
      />
      <Chip
        className={styles.rankingChip}
        label={"Technical Report: " + rankings.techReport}
      />
      <Chip
        className={styles.readMoreChip}
        label="READ MORE"
        component="a"
        href={"fleet/years/" + rankings.moreDetails}
        clickable
      ></Chip>
    </div>
  );
};

const ShowcaseSubs = ({ array }) => {
  return array.map((sub) => {
    return (
      <div class={styles.showcaseSubscontainer}>
        <img
          className={styles.showcaseImg}
          src={require("@site/static/img/auv/" + sub.subImg).default}
        />
        <div class={styles.showcaseOverlay}>
          <div class={styles.overlayText}>
            <Typography
              className={styles.overlaySubName}
              gutterBottom
              variant="h5"
              component="div"
            >
              {sub.subName}
            </Typography>
            <Typography
              className={styles.overlaySubTeam}
              variant="body2"
              color="text.secondary"
            >
              {sub.team}
            </Typography>
          </div>
        </div>
      </div>
    );
  });
};

const GenerateFleetShowcase = () => {
  const showcaseSubs = fleetJSON[0];
  return (
    <div>
      <div className={styles.subCardContainer}>
        <ShowcaseSubs array={showcaseSubs.subs} />
      </div>
      <div className={styles.chipContainer}>
        <Chip
          className={styles.rankingChipShowcase}
          label={"Overall: " + showcaseSubs.rankings.overall}
        />
        <Chip
          className={styles.rankingChipShowcase}
          label={"Video: " + showcaseSubs.rankings.video}
        />
        <Chip
          className={styles.rankingChipShowcase}
          label={"Website: " + showcaseSubs.rankings.website}
        />
        <Chip
          className={styles.rankingChipShowcase}
          label={"Technical Report: " + showcaseSubs.rankings.techReport}
        />
      </div>
    </div>
  );
};

const GenerateFleet = () => {
  return fleetJSON.map((element, key) => {
    if (key === 0) {
      return <></>;
    }
    return (
      <Grid item xs={1}>
        <Card className={styles.fleetCard}>
          <h1 className={styles.fleetYear}> ROBOSUB {element.year}</h1>
          <div className={styles.subCardContainer}>
            <SubsCard array={element.subs} />
          </div>
          <RankingChips rankings={element.rankings} />
        </Card>
      </Grid>
    );
  });
};

export default function TheFleet() {
  return (
    <Layout>
      <div className={styles.fleetHeader}>
        <h1 className={styles.fleetTitle} style={{ textAlign: "center" }}>
          Fleet Showcase
        </h1>
        <GenerateFleetShowcase />
      </div>
      <div className={styles.fleetContainer}>
        <Grid container spacing={2} columns={1}>
          <GenerateFleet />
        </Grid>
      </div>
    </Layout>
  );
}
