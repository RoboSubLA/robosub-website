import React from "react";
import Layout from "@theme/Layout";
// import styles from './styles.module.css';
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
    const { siteConfig } = useDocusaurusContext();
  
    return(
      <Layout>
        <h> 2021 </h>
        <table responsive striped bordered hover variant="dark">
          <thead>
            <tr> <th>Lanturn</th></tr>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Major</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <Lanturn></Lanturn>
          </tbody>
        </table>

        <table responsive striped bordered hover variant="dark">
          <thead>
          <tr>Blastoise</tr>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Major</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <Blastoise></Blastoise>
          </tbody>
        </table>
      </Layout>
    );
  }