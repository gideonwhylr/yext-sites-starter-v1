import React from "react";
import { Helmet } from "react-helmet";

const LocationPage = ({ location }) => {
  const { name, address, description } = location;
  return (
    <div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Header>Location Details</Header>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>{description}</p>
    </div>
  );
};

export const streamId = "stores";

export const getPaths = ({ location }) => {
  return `locations/${location.slug}`;
};

export default LocationPage;
