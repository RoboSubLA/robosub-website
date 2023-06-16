import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import crewJSON from "../../../../static/json/oldTeams.json";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Lanturn = () => {
  const teamArray = crewJSON.twentyOneLanturn;

  return teamArray.map((member) => {
    return (
      <tr>
        <td>{member.position}</td>
        <td>{member.name}</td>
        <td>{member.major}</td>
      </tr>
    );
  });
};

const Blastoise = () => {
  const teamArray = crewJSON.twentyOneBlastoise;

  return teamArray.map((member) => {
    return (
      <tr>
        <td>{member.position}</td>
        <td>{member.name}</td>
        <td>{member.major}</td>
      </tr>
    );
  });
};

export default function twentyTwentyOne() {
  return (
    <Layout>
      <div className={styles.myDIV}>
        <h1 style={{ fontSize: "4rem" }}> 2021-2022 </h1>
        <h3 className={styles.header}>LANTURN ~ (Senior Design)</h3>
        <table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>POSITION</th>
              <th>NAME</th>
              <th>MAJOR</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <Lanturn></Lanturn>
          </tbody>
        </table>
        <h3 className={styles.header}>BLASTOISE ~ (Club Team)</h3>
        <table
          className={styles.table}
          responsive
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th>POSITION</th>
              <th>NAME</th>
              <th>MAJOR</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <Blastoise></Blastoise>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
