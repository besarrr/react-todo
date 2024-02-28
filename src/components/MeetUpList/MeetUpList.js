import MeetUpItem from "../MeetUpItem/MeetUpItem";
import styles from "./MeetUpList.module.css";

const MeetUpList = (props) => {
  return (
    <div className={styles.container}>
      {props.allMeetups.map((meetup, index) => (
        <MeetUpItem key={index} itemData={meetup} />
      ))}
    </div>
  );
};

export default MeetUpList;
