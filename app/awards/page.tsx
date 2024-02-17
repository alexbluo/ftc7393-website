import Award from "./Award";
import Season from "./Season";

// https://ftc-events.firstinspires.org/team/7393
const Awards = () => {
  return (
    <div className="">
      <h2 className="text-7xl font-display text-yellow">RECENT AWARDS</h2>
      <a href="https://www.firstinspires.org/sites/default/files/uploads/resource_library/ftc/award-descriptions.pdf">Click here for Award Descriptions</a>

	  <div className="flex flex-col gap-24">
	  <Season name="2024: CenterStage">
    	  <Award
    	    event = "FIRST Chesapeake Regional Championship"
    	    award = "Inspire Award (1st place)"
    	  />
    	  <Award
    	    event = "FIRST Chesapeake Laurel Qualifier"
    	    award = "Finalist Alliance - Captain"
    	  />
    	  <Award
    	    event = "FIRST Chesapeake Laurel Qualifier"
    	    award = "Inspire Award (1st Place)"
    	  />
		  <Award
    	    event = "FIRST Chesapeake DC Qualifier"
    	    award = "Inspire Award 3rd Place"
    	  />
		  <Award
    	    event = "FIRST Chesapeake DC Qualifier"
    	    award = "Think Award 3rd Place"
    	  />
		  <Award
    	    event = "FIRST Chesapeake DC Qualifier"
    	    award = "Control Award 3rd Place"
    	  />
		  <Award
    	    event = "FIRST Chesapeake DC Qualifier"
    	    award = "Design Award 3rd Place"
    	  />
    	</Season>
        <Season name="2023: PowerPlay">
    	  <Award
    	    event = "Worlds"
    	    award = "Design Award Finalist in Edison Division"
    	  />
    	  <Award
    	    event = "FIRST Chesapeake Regional Championship"
    	    award = "Inspire 3rd place"
    	  />
    	  <Award
    	    event = "FIRST Chesapeake Regional Championship"
    	    award = "Carrier Division Finalist Alliance"
    	  />
    	  <Award
    	    event = "FIRST Chesapeake Union Bridge Qualifier"
    	    award = "Connect Award (1st place)"
    	  />
    	  <Award
    	    event = "FIRST Chesapeake Union Bridge Qualifier"
    	    award = "Winning Alliance"
    	  />
    	  <Award
            event = "FIRST Chesapeake DC2 Qualifier"
            award = "Control Award (1st Place)"
    	  />
    	  <Award
            event = "FIRST Chesapeake DC2 Qualifier"
            award = "Finalist Alliance"
    	  />
    	  <Award
    	    event = "FIRST Chesapeake Glen Allen Qualifier"
    	    award = "Connect Award (1st Place)"
    	  />
    	</Season>
        <Season name="2022: FreightFrenzy">
    	  <Award
            event = "FIRST Chesapeake Regional Championship"
            award = "Control Award (1st Place)"
          />
    	  <Award
            event = "FIRST Chesapeake Harrisonburg Qualifier"
            award = "Inspire 2nd Place"
          />
    	  <Award
            event = "FIRST Chesapeake Harrisonburg Qualifier"
            award = "Motivate Award (1st Place)"
          />
    	  <Award
            event = "FIRST Chesapeake Laurel 2 Qualifier"
            award = "Innovate Award (1st Place)"
          />
	 </Season>
      </div>
    </div>
  );
};

export default Awards;
