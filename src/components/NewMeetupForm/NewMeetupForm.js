import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewMeetupForm.module.css";
import Toastify from "toastify-js";

import "toastify-js/src/toastify.css";

const NewMeetupForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const newMeetup = {
      title,
      image,
      address,
      description,
    };

    try {
      const result = await fetch(
        "https://meet-up-fb193-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(newMeetup),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!result.ok) {
        throw new Error("Failed to create a meetup");
      }

      Toastify({
        text: "Meetup added successfully!",
        backgroundColor: "darkgreen",
      }).showToast();

      navigate("/");
    } catch (error) {
      Toastify({
        text: error.message,
        backgroundColor: "red",
      }).showToast();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.inputContainer}>
        <label>Meetup Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <label>Meetup Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className={styles.btnContainer}>
        <button type="submit">Add Meetup</button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
