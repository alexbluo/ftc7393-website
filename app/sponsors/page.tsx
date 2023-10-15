import Image from "next/image";
import Bit from "app/components/Bit";

// https://drive.google.com/drive/u/2/folders/1kDHGTt5oqA5F4Y9DuWK3K9Idfa7ZnAdS
const Sponsors = () => {
  return (
    <div className="">
      <h2 className="text-7xl font-display text-yellow">SPONSORS</h2>

      <div className="flex flex-col gap-24 w-full items-center">
        <Bit path="/sponsors/PIE3.jpeg">
          The Partnership and Inspiration for Engineering Education and
          Entrepreneurship is the non-profit organization that houses our team.
        </Bit>
        <Bit path="/sponsors/MSBR.jpeg">
          The Maryland Space Business Roundtable sponosr many STEM activities,
          and enabled us to give SuGO workshops for free.
        </Bit>
        <Bit path="/sponsors/amt.jpeg">
          The Association of Manufacturing Technology sponsored us for our trip
          to Worlds.
        </Bit>
        <Bit path="/sponsors/allied_power_and_control.png">
          One of our team alumni works at Allied Power and Control, and they
          offer machining services to the team!
        </Bit>
        <Bit path="/sponsors/Dassault.png">
          We use the Solidworks CAD program using a license provided by Dassault
          Systems, and also their systems engineering software.
        </Bit>
        <Bit path="/sponsors/FIRST_Chesapeake.png">
          Our local FIRST organization also helps our team.
        </Bit>
        <Bit path="/sponsors/ManTech.png">
          ManTech sponsored us for our trip to worlds in 2023.
        </Bit>
        <Bit path="/sponsors/NASA.png">NASA has loaned us a field border.</Bit>
        <Bit path="/sponsors/Qualcomm.png">
          Qualcomm sponsored us for our trip to Worlds in 2023.
        </Bit>
        <Bit path="/sponsors/Techaction.png">
          TechAction helped us pay for an operate our first qualifier in January
          2023.
        </Bit>
        <Bit path="/sponsors/apl.pdf"></Bit>
      </div>
    </div>
  );
};

export default Sponsors;
