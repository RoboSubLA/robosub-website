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
        <h1 style={{fontSize:"4rem", borderBottom:"5px solid"}}>GIT & GITHUB</h1>
        {/* <Image className="github-logo" src="/images/other/GitHubLogo.png" /> */}
        <p className="resources-section-p" style={{fontSize:"19px", padding: "10px",
                      color: "#99FFCC", fontFamily: "fantasy"}} >
          <strong><i>At a high level, GitHub is a website and cloud-based service that
          helps developers store and manage their code, as well as track and
          control changes to their code. To understand exactly what GitHub is,
          you need to know two connected principles:</i></strong>
        </p>
        <div style={{fontSize:"15px", border: "8px double", padding: "10px",
                      borderColor: "#ebc828", fontFamily: "cursive",  marginBottom:"50px", 
                      borderRadius:"20px 20px 20px 20px"}} >
        <h3 className="resources-section-h3" style={{ borderBottom: "thick solid", borderColor: "#ebc828" }}>
  1. Version Control:</h3>
        <p className="resources-section-p" >
          <strong><i>In software engineering, version control is a class of systems
          responsible for managing changes to computer programs, documents,
          large web sites, or other collections of information. Version control
          is a component of software configuration management.</i></strong>
        </p>
        </div>
        <div style={{fontSize:"15px", border: "8px double", padding: "10px",
                      borderColor: "#ebc828", fontFamily: "cursive", marginBottom:"50px",
                      borderRadius:"20px 20px 20px 20px"}} >
          <h3 className="resources-section-h3" style={{ borderBottom: "thick solid", borderColor: "#ebc828" }}>2. Git: </h3>
          <strong><i>Git is software for tracking changes in any set of files, usually used
          for coordinating work among programmers collaboratively developing
          source code during software development. Its goals include speed, data
          integrity, and support for distributed, non-linear workflows.</i></strong>
        </div>
        <h1 style={{borderBottom:"5px solid", paddingBottom:"10px"}}> Set Up </h1>
        <h3 className="resources-section-h3" style={{borderRadius: "25px", border:"thick solid"}}> <i>Installing Git Links:</i></h3>
        <a className="git-links" href="https://git-scm.com/download/win">
          <i class="fab fa-windows fa-2x"> Windows</i>
        </a>
        <a className="git-links" href="https://git-scm.com/download/linux">
          <i class="fab fa-linux fa-2x"></i>Linux
        </a>
        <a className="git-links" href="https://git-scm.com/download/mac">
          <i class="fab fa-apple fa-2x">Mac OS</i>
        </a>
        <h3 className="resources-section-h3" style={{ fontFamily:"cursive", borderBottom: "thick dashed" }}><i>GitHub Link:</i></h3>

        <a className="git-links" href="https://github.com/">
          <i class="fab fa-github fa-2x"> GitHub </i>
        </a>
        <h1 style={{fontSize:"4rem", borderBottom:"5px solid"}}>Git Cheat Sheet:</h1>
        <p style={{ backgroundColor: "#000099", color: "white", fontFamily: "sans-serif",
                    margin: "3px", marginBottom: "25px", padding:"3px", borderRadius:"25px 0 0px 0"}}>
          SETUP - Configuring user information used across all local
          repositories
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>
          git config --global user.name “[firstname lastname]”
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          Set a name that is identifiable for credit when review version history
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>
          git config --global user.email “[valid-email]”
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          Set an email address that will be associated with each history marker
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git config --global color.ui auto
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          Set automatic command line coloring for Git for easy reviewing
        </p>
        <p style={{ backgroundColor: "#000099", color: "white", fontFamily: "sans-serif",
                    margin: "3px", marginBottom: "25px", padding:"3px", borderRadius:"25px 0 0px 0"}}>
          SETUP & INIT - Configuring user information used across all local
          repositories <br></br>
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git init
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          Initialize an existing directory as a Git repository
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git clone [url]
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          Retrieve an entire repository from a hosted location via URL
        <br></br>
        <br></br>
        STAGE & SNAPSHOT -Working with snapshots and the Git staging area{" "}
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git add [file] or git add .
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          Add a file as it looks now to your next commit (stage)
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git commit -m “[descriptive message]”
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          Commit your staged content as a new commit snapshot
        </p>
        <p style={{ backgroundColor: "#000099", color: "white", fontFamily: "sans-serif",
                    margin: "3px", marginBottom: "25px", padding:"3px", borderRadius:"25px 0 0px 0"}}>
          BRANCH & MERGE - Isolating work in branches, changing context, and
          integrating changes
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git branch
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          List your branches. a * will appear next to the currently active
          branch
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git branch [branch-name]
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>Create a new branch at the current commit</p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git checkout [branch-name]
        </code>
        </div>
        <p className="git-cheat-p" style={{fontWeight: "800", fontFamily:"monospace",
                                            fontSize:"15px", color:"#FFFF00"}}>
          Switch to another branch and check it out into your working directory
        </p>
        <div style={{border:"2px solid", borderRadius:"25px", margin:"20px",
                     padding:"20px", backgroundColor:"#00FFFF"}}>
        <code className="git-code" style={{backgroundColor:"#00FFFF", border:"none", color:"black"}}>git merge [branch]
        </code>
        </div>
        <p className={styles.gitCheat} >
          Merge the specified branch’s history into the current one
        </p>
 </div>
      </div>
    </Layout>
  );
}