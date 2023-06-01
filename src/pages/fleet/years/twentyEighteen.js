import React from "react";
import Layout from "@theme/Layout";
// import styles from './styles.module.css';
import crewJSON from "../../../../static/json/oldTeams.json";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Team = () => {
  const teamArray = crewJSON.eighteenTeam;

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

export default function twentyEighteen() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <div>
        <h1> 2018-2019</h1>
        <table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Major</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <Team></Team>
          </tbody>
        </table>

        <h2>MECHANICAL (GYARADOS)</h2>
        <p>
          ​ Gyarados consists of a mechanical frame and hull, as well as a servo
          controlled mechanical arm, torpedoes, and dropper mechanism.The frame
          consists of waterjet and anodized aluminum, along with 3D printed
          brackets for mounting waterproof enclosures, thrusters, and the DVL.
          The frame includes 4 aluminum t-slot rails that are used as corner
          brackets for mounting together the baseplates and the sides. The rails
          duly function as a mounting point for the other sub-systems.<br></br>
          <br></br>​ The waterproof hull was manufactured in 2018 and consists
          of two 8" diameter acrylic tubes connected to a custom machined
          aluminum bulkhead. The bulkhead contains 18 SEACON connectors for
          electrical interfacing. On each end are aluminum endcaps, and several
          3D printed parts are used on the hull for mounting latches. The
          latches serve as an extra degree of leakage protection, in addition to
          the double o-ring seals on either side of the bulkhead. The tubes on
          each end of the sub can be removed from the bulkhead, leaving the
          electronics stack exposed. Gyarados hull: ​Two 4" diameter acrylic
          tubes are also present on either end of the submarine to serve as the
          waterproof enclosures for the cameras and batteries. <br></br>
          <br></br>
          In 2018, the electronics shelving was a simple acrylic shelving system
          held together by nuts and bolts. In 2019, this shelving system was
          redesigned to consist of a custom manufactured aluminum flange for the
          inside of the bulkhead and 6061 t-slot aluminum to hold acrylic sheets
          in place to serve as shelves. These shelves utilized more of the
          available space inside the hull, allowing the addition of extra
          electronic components for Gyarados' second year competing. The updated
          shelving is shown below. <br></br>
          <br></br>
          ​Gyarados did not feature a working claw or dropper, but its torpedo
          system was functional.The torpedo system was a servo mechanism that
          would launch the torpedo on command. The team waterproofed its own
          servo motors using several commercially available products. <br></br>
          <br></br>
          ​While it was unsuccessful, the 2019 team worked on the development of
          a mechanical claw with a small waterproof enclosure for a linear
          actuator and a dynamic o-ring seal. The waterproofing of this system
          failed, but the system was functional outside of water. Future systems
          opted to waterproof the servos/actuators themselves rather than
          creating enclosures, since waterproofing a shaft opening is difficult
          and prone to failure. The team is still investigating ways to create
          waterproof enclosures for servo motors and actuators. <br></br>
          <br></br>
        </p>

        <h2>ELECTRICAL (GYARADOS)</h2>
        <p className="sub-p">
          ​The electrical system on the 2019 version of Gyarados features more
          custom electronics than on Eagle I, allowing for more efficient use of
          hull space. Custom PCBs include a thruster ESC board, a power
          distribution board, a battery shutoff board, and a servo control
          board. In addition, the 2018 vehicle featured a low pass filter
          circuit for hydrophones noise reduction and a custom control board.
          These were later removed from the design. Below is the communications
          network on the submarine. The sensors shown include an IMU, barometer,
          hydrophones, DVL, and cameras.<br></br>
          <br></br>
          ​The thruster control board, shown to the top, has relays, fuses and
          ESCs, and serves to provide power and PWM signals to the thrusters
          after the controllers have provided the proper PWM signals to the
          thruster board. The thruster board uses fuses to protect individual
          thrusters from overcurrent, provides easily accessible connectors for
          signal/power connections on each thruster, and has a kill switch
          relay, allowing us to power the motors off at any time.<br></br>
          <br></br>
          The custom control board (shown below) incorporates custom circuits
          that are capable of adding different functions to the AUV without
          compromising space within the hull. Control boardThe servo board
          connects to the control board via one of its expansion slots. The
          servo expansion card (shown below) can control and power up to 16
          servo motors and 5 actuators simultaneously. The reasoning behind this
          board is because we intended to have several actuated systems, such as
          a claw, dropper, and torpedoes, that all function off of servos and
          actuators.
          <br></br>
          <br></br>
          ​Within the AUV, there are several electronics that need regulated
          power from the batteries; hence the need for a power distribution
          board. The power board is coupled with a low voltage automatic
          shutdown board, which means that if the battery goes below a certain
          voltage, the board will stop providing power to the electronics
          automatically. The board also features short circuit protection.
          Below, the automatic shutoff board is seen on the left, and the power
          distribution board is depicted on the right.
        </p>
        <h2>SOFTWARE (GYARADOS)</h2>
        <p className="sub-p">
          ​In the ROS architecture running on the Gyarados motherboard,
          different nodes are used to control different parts of the vehicle.
          These nodes communicate with each other through ROS; each node can
          have several publishers and subscribers based on the function of the
          node. Each Arduino board on the sub is a node that interfaces with the
          hardware. The computer vision node is isolated for modularity.{" "}
          <br></br>
          <br></br>
          Object detection is handled by the computer vision node, which uses
          OpenCV for preprocessing and detection. First, the images are
          labelled, then features are extracted using HOG. These images are then
          used for training the real-time object detection system. Real-time
          detection is based on image frames from a video feed that are
          preprocessed, ROI determined, then classified. These classifications
          are used to decide which movements the submarine should take.{" "}
          <h5>Filtering Out Color</h5>
          <h5>Finding Contours</h5>
          <h5>Before Machine Learning</h5>
          <h5>After Applying ML</h5>
        </p>

        <h1> MAGIKARP 2018-2019</h1>

        <p className="sub-p">
          <h2> MECHANICAL (MAGIKARP)</h2>​ Magikarp's frame was designed on a
          small budget. It is made of waterjetted polycarbonate sheets with
          t-slot aluminum rails for structure. Magikarp has two 4" acrylic
          waterproof enclosures: the bottom enclosure houses the battery and
          camera, while the top enclosure houses the electronics. The bottom
          enclosure features a clear dome endcap for the camera, and all other
          endcaps have penetrators for feeding through wires for peripherals. ​
          Magikarp did not have any actuated systems, and was thus incapable of
          completing the claw, torpedo, and dropper tasks.
        </p>
        <p className="sub-p">
          <h2> ELECTRICAL (MAGIKARP)</h2>
          ​The electrical system on Magikarp is very minimal. It consists of a
          thruster ESC board that handles the kill switch and signals/power to
          the thrusters, an arduino board running the stabilization controllers,
          a LattePanda computer for ROS and computer vision, a sensor suite, and
          a buck converter for stepping down voltage from the batteries for the
          computer and microcontroller. Its sensor suite included a camera, an
          IMU, and a barometer. The stabilization controller on Magikarp is a
          simple PID system, with a set of gains that apply to yaw, pitch, and
          roll, collectively, and a separate set of gains for depth control. The
          entire submarine is powered by a single 10Ah, 14.8V LiPo battery.{" "}
        </p>
        <p className="sub-p">
          <h2> SOFTWARE (MAGIKARP)</h2>
          Since Magikarp is only equipped with two devices that can communicate
          (the motherboard and an Arduino board), the ROS architecture on the
          motherboard consists of only 3 nodes - a computer vision node, a
          movement command node, and the Arduino node that outputs signals to
          the motors. During the competition, Magikarp did not have object
          detection capabilities, so only two nodes were used for movement
          commands.{" "}
        </p>
      </div>
    </Layout>
  );
}
