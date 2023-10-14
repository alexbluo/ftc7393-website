import Award from "./Award";
import Season from "./Season";

// https://ftc-events.firstinspires.org/team/7393
const Awards = () => {
  return (
    <div className="">
      <h2 className="text-7xl font-display text-yellow">AWARDS</h2>

      <div className="flex flex-col gap-24">
        <Season name="2019: SKYSTONE">
          <Award
            event="DC SKYSTONE QUALIFIER 2"
            award="Collins Aerospace Innovate Award"
          />
          <Award
            event="DC SKYSTONE QUALIFIER 2"
            award="Collins Aerospace Innovate Award"
          />
          <Award
            event="DC SKYSTONE QUALIFIER 2"
            award="Collins Aerospace Innovate Award"
          />
        </Season>
      </div>
    </div>
  );
};

export default Awards;
