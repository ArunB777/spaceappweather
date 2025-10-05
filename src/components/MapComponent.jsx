import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet for custom marker icon

// Fix default marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function LocationMarker({ setSelectedLocation }) {
  const [position, setPosition] = React.useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setSelectedLocation(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Selected Location: {position.lat}, {position.lng}</Popup>
    </Marker>
  );
}

export default function MapComponent({ setSelectedLocation }) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-full w-full rounded-lg shadow-lg border border-gray-700 bg-black/50"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <LocationMarker setSelectedLocation={setSelectedLocation} />
    </MapContainer>
  );
}