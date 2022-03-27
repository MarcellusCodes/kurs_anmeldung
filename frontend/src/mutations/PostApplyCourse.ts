import axios from "axios";

const PostApplyCourse = async (
  name,
  vorname,
  bereich,
  kostenstelle,
  kurs_id
) => {
  const response = await axios
    .post(`http://localhost:8055/items/Teilnehmer`, {
      name: name,
      vorname: vorname,
      bereich: bereich,
      kostenstelle: kostenstelle,
      kurs: {
        id: kurs_id,
      },
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  return response;
};

export default PostApplyCourse;
