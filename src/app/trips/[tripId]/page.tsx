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
      <div className="flex flex-col lg:flex-row-reverse">
        <TripReservation
          pricePerDay={trip.pricePerDay as any}
          tripId={trip.id}
          maxGuests={trip.maxGuests}
          tripStartDate={trip.startDate}
          tripEndDate={trip.endDate}
        />
        <div className="flex flex-col lg:w-2/3">
          <TripDescription description={trip.description} />
          <TripHighlights highlights={trip.highlights} />
        </div>
      </div>

      <TripLocation
        location={trip.location}
        locationDescription={trip.locationDescription}
      />
    </div>
  );
};

export default TripDetails;
