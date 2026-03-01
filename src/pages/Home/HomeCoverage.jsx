import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router";

// import { useLoaderData } from 'react-router';

const HomeCoverage = () => {
  const [serviceCenters, setServiceCenters] = useState([]);

  useEffect(() => {
    fetch("/deliveryCenter.json")
      .then((res) => res.json())
      .then((data) => setServiceCenters(data));
  }, []);

  const position = [23.685, 90.3563];
  // const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  return (
    <div className="px-4 pt-16">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Service <span className="text-lime-600"> Coverage</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            We are delivering books across 64 districts with fast and secure
            service. Explore our service areas below.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="border max-w-7xl mx-auto h-[550px] rounded-xl overflow-hidden relative z-0">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="flex justify-center mt-8">
        <Link to={"/coverage"}>
          <button className="btn bg-lime-500 hover:bg-lime-700 text-white transition">
            View Full Coverage →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCoverage;
