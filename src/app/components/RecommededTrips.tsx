import React from "react";
import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";

async function getTrips() {
  try {
    const trips = await prisma.trip.findMany({});
    return trips;
  } catch (error) {
    console.error("Erro ao buscar trips:", error);
    return []; // Retorna lista vazia se falhar
  }
}

const RecommendedTrips = async () => {
  const data = await getTrips();
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
        {data.length}
      </div>

      <div className="flex flex-col items-center mt-5 lg:mt-12 gap-5 lg:flex-row lg:flex-wrap lg:justify-center  lg:gap-10">
        {data.length > 0 ? (
          data.map((trip: Trip) => <TripItem key={trip.id} trip={trip} />)
        ) : (
          <p className="text-gray-500 mt-4">
            Nenhuma viagem disponível no momento.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecommendedTrips;
