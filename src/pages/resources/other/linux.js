import React from "react";
import Layout from "@theme/Layout";
import styles from "./linux.modules.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Linux() {
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
          <h1
            style={{
              textAlign: "center",
              fontSize: "4rem",
              fontFamily: "Franklin Gothic Medium",
            }}
          >
            LINUX
          </h1>

          <h2
            style={{
              textAlign: "center",
              backgroundColor: "teal",
              overflow: "hidden",
            }}
          >
            <i>What is Linux?</i>
          </h2>
          <p style={{ textAlign: "center", overflow: "hidden" }}>
            {" "}
            Just like Windows, iOS, and Mac OS, Linux is an operating system. In
            fact, one of the most popular platforms on the planet, Android, is
            powered by the Linux operating system. An operating system is
            software that manages all of the hardware resources associated with
            your desktop or laptop. To put it simply, the operating system
            manages the communication between your software and your hardware.
            Without the operating system (OS), the software wouldnt function?{" "}
          </p>

          <div className={styles.linuxList}>
            <h2 className="linux-h3">
              The Linux operating system composes of several different pieces:
            </h2>
            <li className="linux-list-item">
              <span>Bootloader</span> – The software that manages the boot
              process of your computer. For most users, this will simply be a
              splash screen that pops up and eventually goes away to boot into
              the operating system.
            </li>
            <li className="linux-list-item">
              <span className="accent-color-linux">Kernel</span> – This is the
              one piece of the whole that is actually called ?Linux?. The kernel
              is the core of the system and manages the CPU, memory, and
              peripheral devices. The kernel is the lowest level of the OS.
            </li>
            <li className="linux-list-item">
              <span className="accent-color-linux">Init System</span> – This is
              a sub-system that bootstraps the user space and is charged with
              controlling daemons. One of the most widely used init systems is
              systemd? which also happens to be one of the most controversial.
              It is the init system that manages the boot process, once the
              initial booting is handed over from the bootloader (i.e., GRUB or
              GRand Unified Bootloader).
            </li>
            <li className="linux-list-item">
              <span className="accent-color-linux">Daemons</span> – These are
              background services (printing, sound, scheduling, etc.) that
              either start up during boot or after you log into the desktop.
            </li>
            <li className="linux-list-item">
              <span className="accent-color-linux">Graphical server</span> –
              This is the sub-system that displays the graphics on your monitor.
              It is commonly referred to as the X server or just X.
            </li>
            <li className="linux-list-item">
              <span className="accent-color-linux">Desktop environment</span> –
              This is the piece that the users actually interact with. There are
              many desktop environments to choose from (GNOME, Cinnamon, Mate,
              Pantheon, Enlightenment, KDE, Xfce, etc.). Each desktop
              environment includes built-in applications (such as file managers,
              configuration tools, web browsers, and games).
            </li>
            <li className="linux-list-item">
              <span className="accent-color-linux">Applications</span> – Desktop
              environments do not offer the full array of apps. Just like
              Windows and macOS, Linux offers thousands upon thousands of
              high-quality software titles that can be easily found and
              installed. Most modern Linux distributions (more on this below)
              include App Store-like tools that centralize and simplify
              application installation. For example, Ubuntu Linux has the Ubuntu
              Software Center (a rebrand of GNOME Software? Figure 1) which
              allows you to quickly search among the thousands of apps and
              install them from one centralized location.
            </li>
          </div>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Franklin Gothic Medium",
              borderBottom: "1px solid",
            }}
          >
            Installing Linux{" "}
          </h1>
          <p style={{ textAlign: "center", fontSize: "2rem" }}>3 Methods:</p>
          <div className={styles.virtualization}>
            <h3>
              {" "}
              <u>Virtualization </u>{" "}
            </h3>
            <p>
              Virtualization involves installing an emulator to run an instance
              of the Linux OS inside a window on a host computer. The main
              benefit of this type of install is the ability to add and remove
              various versions of operating systems without the need of making
              any major changes to your hard drive. It is also the easiest to
              implement. The downsides include needing at least 8 GB of ram for
              the setup we are running, as well as needing different install
              software depending on your native OS. In addition, the computer
              vision software requirements are different, and running those
              algorithms might produce unexpected results, or refuse to run
              altogether. Still a great choice if Linux is new to you and you
              want to try it out risk-free.
            </p>

            <a href="https://www.makeuseof.com/tag/install-linux-windows-vmware-virtual-machine/">
              - Install Linux on Windows
            </a>

            <br></br>

            <a href="https://www.imore.com/how-use-linux-your-mac-using-virtual-machine">
              - Install Linux on MAC
            </a>
          </div>

          <div className={styles.hardDrive}>
            <h3>
              <u> External Hard Drive Install</u>{" "}
            </h3>
            <p>
              Installing on an external hard drive is the easiest way to have
              your host computer natively boot Linux. The only required material
              is an additional hard drive (internal or external) and a bootable
              USB.
            </p>

            <p className="linux-h3">Bootable USB Windows</p>
            <p className="iframe-align">
              <iframe
                className="linux-yt"
                src="https://www.youtube.com/embed/X_fDdUgqIUQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
            <p className="linux-h3">Bootable USB MAC OS</p>
            <p className="iframe-align">
              <iframe
                className="linux-yt"
                src="https://www.youtube.com/embed/Yf3VChom8qo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>

            <a
              className="linux-links"
              href="https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview"
            >
              - Official Linux Bootable USB Tutorial
            </a>
          </div>
          <div className={styles.virtualization}>
            <h3>
              {" "}
              <u>Hard Drive Partitioning</u>{" "}
            </h3>

            <p>
              This method involves partitioning your hard drive on the host
              computer to allow seperate OS's to be installed on the same drive.
              It has the least computer requirements, as Linux is installed on
              the hard drive and uses all host resources. Partitioning is
              potentially risky as there is a possibility of deleting your
              operating system but as long as you are paying attention and
              following steps there should be no problems.
            </p>
            <a
              className="linux-links"
              href="https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/"
            >
              -Partition Install on Windows
            </a>
            <br></br>
            <a
              className="linux-links"
              href="https://www.makeuseof.com/tag/install-linux-macbook-pro/"
            >
              -Partition Install on Mac
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
}
