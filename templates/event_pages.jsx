import React from "react";
import { Helmet } from "react-helmet";

const EventPage = ({ event }) => {
  const { name, date, address, description } = event;
  return (
    <div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Header>Event Details</Header>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{address}</p>
      <p>{description}</p>
    </div>
  );
};

export const streamId = "events";

export const getPath = ({ event }) => {
  return `events/${event.slug}`;
};

export default EventPage;
