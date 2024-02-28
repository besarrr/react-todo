import { useEffect, useState } from "react";
import MeetUpList from "../components/MeetUpList/MeetUpList";

const AllMeetups = () => {
  const [allMeetups, setAllMeetups] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllMeetups = async () => {
      setIsLoading(true);
      const result = await fetch(
        "https://meet-up-fb193-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
      );

      const response = result.json();

      const meetups = [];

      response.then((data) => {
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setAllMeetups(meetups);
        setIsLoading(false);
      });
    };
    getAllMeetups();
  }, []);
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "hsl(261, 95%, 8%)",
          padding: "20px 0",
          fontSize: "50px",
        }}
      >
        All Meetups
      </h1>

      {isLoading && (
        <p style={{ textAlign: "center", fontSize: "24px" }}>
          Meets are loading...
        </p>
      )}

      {!allMeetups && !isLoading && <p>no meetups found</p>}

      {allMeetups && <MeetUpList allMeetups={allMeetups} />}
      <br />
    </>
  );
};

export default AllMeetups;
