import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import crewJSON from "../../../../static/json/oldTeams.json";

const Lanturn = () => {
  const teamArray = crewJSON.twentyTwoLanturn;

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

const Wailord = () => {
  const teamArray = crewJSON.twentyTwoWailord;

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

export default function twentyTwentyTwo() {

  return (
    <Layout>
      <div className={styles.myDIV}>
        <h1 style={{ fontSize: "4rem" }}> 2022-2023 </h1>
        <h3 className={styles.header}>LANTURN ~ (Senior Design)</h3>
        <table responsive striped bordered hover className={styles.table}>
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

        <h3 className={styles.header}>WAILORD ~ (Club Team)</h3>
        <table
        responsive
          striped
          bordered
          hover
          className={styles.table}
        >
          <thead>
            <tr>
              <th>POSITION</th>
              <th>NAME</th>
              <th>MAJOR</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <Wailord></Wailord>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
