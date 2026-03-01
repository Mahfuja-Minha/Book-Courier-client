import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const [serviceCenters, setServiceCenters] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    fetch("/deliveryCenter.json")
      .then((res) => res.json())
      .then((data) => setServiceCenters(data));
  }, []);

  const position = [23.685, 90.3563];

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.trim().toLowerCase();

    if (!location) return;

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location),
    );

    if (district && mapRef.current) {
      mapRef.current.flyTo([district.latitude, district.longitude], 13);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  return (
    <div className="px-4 py-16 bg-base-100">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Delivery <span className="text-lime-600">Coverage</span>
        </h2>
        <p className="text-base-content/70 mt-3 max-w-xl mx-auto">
          We deliver books across Bangladesh. Search your district to check
          availability.
        </p>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-8">
        <div className="flex rounded-lg border border-base-300 overflow-hidden bg-base-200">
          <input
            type="search"
            name="location"
            placeholder="Enter district name"
            className="flex-1 px-4 py-2 bg-transparent outline-none"
          />
          <button type="submit" className="btn bg-lime-500 rounded-none">
            Search
          </button>
        </div>

        {notFound && (
          <p className="text-error text-sm mt-2 text-center">
            District not found.
          </p>
        )}
      </form>

      {/* Map */}
      <div className="border max-w-7xl mx-auto h-[550px] rounded-xl overflow-hidden">
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

      {/* Simple Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto text-center">
        <div className="p-6 bg-base-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-lime-500">5000+</h3>
          <p className="text-base-content/70 mt-1">Books Delivered</p>
        </div>

        <div className="p-6 bg-base-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-lime-500">64</h3>
          <p className="text-base-content/70 mt-1">Districts Covered</p>
        </div>

        <div className="p-6 bg-base-200 rounded-lg">
          <h3 className="text-2xl font-semibold text-lime-500">24–48h</h3>
          <p className="text-base-content/70 mt-1">Delivery Time</p>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
