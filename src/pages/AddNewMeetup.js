import NewMeetupForm from "../components/NewMeetupForm/NewMeetupForm";
import styles from "./AddNewMeetup.module.css";

const AddNewMeetup = () => {
  return (
    <>
      <div className={styles.addNewMeetup}>
        <h1 style={{ color: "hsl(261, 95%, 8%)", padding: "30px 0" }}>
          Add New Meetup
        </h1>
        <NewMeetupForm />
      </div>
    </>
  );
};

export default AddNewMeetup;
