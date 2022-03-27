import axios from "axios";

const PostSendApplyCourse = async (
  name,
  vorname,
  bereich,
  kostenstelle,
  kurs_id
) => {
  const response = await axios
    .post("/api/anmeldung", {
      name: name,
      vorname: vorname,
      bereich: bereich,
      kostenstelle: kostenstelle,
      kurs_id: kurs_id,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return response;
};

export default PostSendApplyCourse;
