import { prisma } from "@/lib/prisma";

import React from "react";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";
import TripLocation from "./components/TripLocation";

export const metadata = {
  title: "trips",
};

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation
        pricePerDay={trip.pricePerDay as any}
        tripId={trip.id}
        maxGuests={trip.maxGuests}
        tripStartDate={trip.startDate}
        tripEndDate={trip.endDate}
      />
      <TripDescription description={trip.description} />
      <TripLocation
        location={trip.location}
        locationDescription={trip.locationDescription}
      />
      <TripHighlights highlights={trip.highlights} />
    </div>
  );
};

export default TripDetails;
