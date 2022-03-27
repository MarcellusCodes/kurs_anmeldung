import React from "react";

const GetInformations = () => {
  const informations_response = fetch(
    `http://localhost:8055/items/Hinweise/?fields=*.*.*`
  ).then((res) => res.json());
  return informations_response;
};

export default GetInformations;
