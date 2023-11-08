import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../config/firebase";

export const updateCourseFirebase = async (id, likes, userLiked) => {
  const taskDocRef = doc(database, "courses", id);
  try {
    await updateDoc(taskDocRef, {
      likes,
      userLiked: userLiked === "true" ? "false" : "true",
    });
  } catch (err) {
    console.log("something went wrong");
  }
};
