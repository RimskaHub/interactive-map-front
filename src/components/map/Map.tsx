import { renderToString } from 'react-dom/server';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { divIcon, point } from 'leaflet';
import { IoLocation } from 'react-icons/io5';

import 'leaflet/dist/leaflet.css';

interface CustomCluster {
  getChildCount: () => number;
}
interface MapProps {
  center: [number, number];
}

// mock api response for locations
const mockMarkers: { geocode: [number, number]; popupText: string }[] = [
  {
    geocode: [51.505, -0.09],
    popupText: 'London Eye - Famous observation wheel offering panoramic views of London',
  },
  {
    geocode: [51.509, -0.118],
    popupText: 'Big Ben - Iconic clock tower and symbol of London',
  },
  {
    geocode: [51.501, -0.142],
    popupText: 'Buckingham Palace - Official residence of the British Royal Family',
  },
];

// transforming react in leaflet icon
const customIcon = divIcon({
  html: renderToString(<IoLocation size={30} color="var(--clr-slate-600)" />),
  className: 'custom-div-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// custom cluster icon
const createClusterCustomIcon = (cluster: CustomCluster) => {
  return divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: point(33, 33, true),
  });
};

const Map = ({ center }: MapProps) => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
        {mockMarkers.map((marker) => {
          return (
            <Marker key={marker.popupText} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popupText}</Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
