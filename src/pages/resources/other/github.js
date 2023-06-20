import React from "react";
import Layout from "@theme/Layout";
import styles from "./github.modules.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Github() {
  const { siteConfig } = useDocusaurusContext();

  function get_started() {
    location.assign("./../resources");
  }
  function linuxfunc() {
    location.assign("../other/linux");
  }

  function arduino() {
    location.assign("../other/arduino");
  }

  function github() {
    location.assign("../other/github");
  }

  function teamsFunc() {
    document.getElementById("dropdown").classList.toggle(styles.show);
  }

  return (
    <Layout>
      {/* Side Nav Bar */}
      <div className={styles.pageWrapper}>
        <div className={styles.navBackground}>
          <nav className={styles.navbar}>
            <ul className={styles.navbar_elements}>
              <button onClick={get_started} className={styles.btn}>
                GET STARTED
              </button>

              <button onClick={teamsFunc} className={styles.btn}>
                {" "}
                TEAMS{" "}
              </button>

              <div id="dropdown" className={styles.DPContent}>
                <a href="../teams/framehull">Frame and Hull</a>
                <a href="../teams/electronics">Electronics</a>
                <a href="../teams/actuatedsys">Actuated Systems</a>
                <a href="../teams/controls">Controls</a>
                <a href="../teams/autonomy">Autonomy</a>
                <a href="../teams/compvis">Computer Vision</a>
              </div>
              <button onClick={arduino} className={styles.btn}>
                ARDUINO
              </button>

              <button onClick={linuxfunc} className={styles.btn}>
                LINUX
              </button>

              <button onClick={github} className={styles.btn}>
                GIT & GITHUB
              </button>
            </ul>
          </nav>
        </div>

        <div className={styles.myDIV}>
          <h1 style={{ fontSize: "3rem", borderBottom: "1px solid" }}>
            GIT & GITHUB
          </h1>

          <p
            className="resources-section-p"
            style={{ padding: "5px", color: "#00FFFF" }}
          >
            At a high level, GitHub is a website and cloud-based service that
            helps developers store and manage their code, as well as track and
            control changes to their code. To understand exactly what GitHub is,
            you need to know two connected principles:
          </p>
          <div
            className={styles.principleCon}
            style={{
              border: "4px double",
              borderRadius: "20px",
              padding: "10px",
              marginBottom: "30px",
            }}
          >
            <h3
              className="resources-section-h3"
              style={{
                borderBottom: "1px solid",
                borderColor: "#ebc828",
                color: "#00FFFF",
              }}
            >
              1. Version Control:
            </h3>
            <p className="resources-section-p">
              <i>
                In software engineering, version control is a class of systems
                responsible for managing changes to computer programs,
                documents, large web sites, or other collections of information.
                Version control is a component of software configuration
                management.
              </i>
            </p>
          </div>

          <div
            style={{
              border: "4px double",
              borderRadius: "20px",
              padding: "10px",
              marginBottom: "30px",
            }}
          >
            <h3
              className="resources-section-h3"
              style={{
                borderBottom: "1px solid",
                borderColor: "#ebc828",
                color: "#00FFFF",
              }}
            >
              2. Git:{" "}
            </h3>
            <i>
              Git is software for tracking changes in any set of files, usually
              used for coordinating work among programmers collaboratively
              developing source code during software development. Its goals
              include speed, data integrity, and support for distributed,
              non-linear workflows.
            </i>
          </div>

          <h2
            style={{ fontSize: "3rem", fontFamily: "Franklin Gothic Medium" }}
          >
            Set Up
          </h2>
          <div
            style={{
              backgroundColor: "#19786d",
              margin: "30px",
              textAlign: "center",
            }}
          >
            <h3>Git Installation Links:</h3>
            <a className="git-links" href="https://git-scm.com/download/win">
              <i> Windows</i>
            </a>
            <a className="git-links" href="https://git-scm.com/download/linux">
              <i>Linux</i>
            </a>
            <a className="git-links" href="https://git-scm.com/download/mac">
              <i>Mac OS</i>
            </a>
            <h3>GitHub Link:</h3>

            <a className="git-links" href="https://github.com/">
              <i class="fab fa-github fa-2x"> GitHub </i>
            </a>
          </div>
          <h1 style={{ fontSize: "3rem" }}>Git Cheat Sheet</h1>
          <p
            style={{
              backgroundColor: "gray",
              marginBottom: "25px",
              padding: "3px",
            }}
          >
            <b>
              SETUP - Configuring user information used across all local
              repositories
            </b>
          </p>

          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git config --global user.name “[firstname lastname]”
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Set a name that is identifiable for credit when reviewing version
            history
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git config --global user.email “[valid-email]”
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Set an email address that will be associated with each history
            marker
          </p>

          <code
            style={{
              padding: "5px",
              color: "#33cc33",
              borderRadius: "25px",
              margin: "auto",
            }}
          >
            git config --global color.ui auto
          </code>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Set automatic command line coloring for Git for easy reviewing
          </p>
          <p
            style={{
              backgroundColor: "gray",
              marginBottom: "25px",
              padding: "3px",
            }}
          >
            <b>
              SETUP & INIT - Configuring user information used across all local
              repositories{" "}
            </b>
            <br></br>
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git init
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Initialize an existing directory as a Git repository
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git clone [url]
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Retrieve an entire repository from a hosted location via URL
            <br></br>
            <br></br>
            STAGE & SNAPSHOT -Working with snapshots and the Git staging area{" "}
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git add [file] or git add .
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Add a file as it looks now to your next commit (stage)
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git commit -m “[descriptive message]”
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Commit your staged content as a new commit snapshot
          </p>
          <p
            style={{
              backgroundColor: "gray",
              marginBottom: "25px",
              padding: "3px",
            }}
          >
            <b>
              BRANCH & MERGE - Isolating work in branches, changing context, and
              integrating changes
            </b>
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git branch
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            List your branches. a * will appear next to the currently active
            branch
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git branch [branch-name]
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Create a new branch at the current commit
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git checkout [branch-name]
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Switch to another branch and check it out into your working
            directory
          </p>
          <div className={styles.code}>
            <code
              style={{
                padding: "5px",
                color: "#33cc33",
                borderRadius: "25px",
                margin: "auto",
              }}
            >
              git merge [branch]
            </code>
          </div>
          <p
            style={{
              margin: "10px",
              fontWeight: "800",
              fontSize: "15px",
              color: "#FFFF00",
            }}
          >
            Merge the specified branch’s history into the current one
          </p>
        </div>
      </div>
    </Layout>
  );
}
