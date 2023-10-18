import Bit from "app/components/Bit";

const Outreach = () => {
  return (
    <div className="">
      <h2 className="text-7xl font-display text-yellow">OUTREACH</h2>

      <div className="flex flex-col gap-24 w-full items-center">
        <Bit path="/outreach_scrimmage_oct2023.jpg">
          We ran an early season scrimmage with 70 people at APL.
        </Bit>
        <Bit path="/outreach_dart_watch.jpg">
          We watched the DART impact together in October 2022.
        </Bit>
        <Bit path="/outreach_sugo1.jpg">
          We did a fun robotics workshop using SuGO kits in March 2023.
        </Bit>
        <Bit path="/outreach_robot_repair.jpg">
          At the qualifier we hosted, we also set up a robot repair station.
        </Bit>
        <Bit path="/outreach_STEM_night.jpg">
          We brought multiple robots to STEM night at an elementary school.
        </Bit>
        <Bit path="/outreach_APC_visit.jpg">
          We visited and learned about Allied Power and Control, one of our
          sponsors and a place where one of our alumni works. They make machined
          parts for us!
        </Bit>
        <Bit path="/outreach_AMT.png">
          We gave a Shark Tank style pitch for sponsorship at the Association of
          Manufacturing Technology in April 2023.
        </Bit>
        <Bit path="/outreach_BAE.png">
          We met with engineers at BAE systems, and they showed us a 3D virtual
          development environment and we told them about our team and gave them
          a robot demo.
        </Bit>
        <Bit path="/outreach_MTI_volunteer.jpg">
          We volunteered for the second year in a row at the Maryland Tech
          Invitational, a very prestigious tournament at the same venue where we
          hosted our qualifier.
        </Bit>
        <Bit path="/outreach_sri_at_DC.jpg">
          One of our alumni volunteering at a Qualifier in DC through the FIRST
          Chesapeake Alumni Ambassador program.
        </Bit>
      </div>
    </div>
  );
};

export default Outreach;
