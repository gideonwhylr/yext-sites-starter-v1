import React from "react";
import { Helmet } from "react-helmet";
import EventDocument from "../types/EventDocument";

const EventPage = ({ event }: { event: EventDocument }) => {
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

export default EventPage;
