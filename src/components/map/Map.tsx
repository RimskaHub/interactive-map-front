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
    geocode: [44.7866, 20.4489],
    popupText:
      'Beogradska tvrđava - Istorijska tvrđava i park koji se nadovezuje nad ušćem Save i Dunava',
  },
  {
    geocode: [44.8176, 20.4633],
    popupText: 'Trg Republike - Centralni trg sa Narodnim muzejom i Narodnim pozorištem',
  },
  {
    geocode: [44.8043, 20.4632],
    popupText: 'Skadarlija - Bohemska četvrt poznata kao beogradski Monmartr',
  },
  {
    geocode: [43.3209, 21.8958],
    popupText: 'Niška Tvrđava - Dobro očuvana osmanska tvrđava u gradu Nišu',
  },
  {
    geocode: [45.2671, 19.8335],
    popupText: 'Novi Sad - Dunavski park i Petrovaradinska tvrđava, kulturna prestonica Vojvodine',
  },
  {
    geocode: [43.8563, 19.3061],
    popupText:
      'Zlatibor - Planinska odmorišna mesta poznata po livadama, tradicionalnoj arhitekturi i čistom vazduhu',
  },
  {
    geocode: [43.7695, 19.2935],
    popupText: 'Mokra Gora - Selo poznato po železnici Šarganska osmica i drvenom gradu Drvengrad',
  },
  {
    geocode: [44.0128, 21.3362],
    popupText: 'Oplenac - Kraljevski mauzolej i vinogradi u Topoli',
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
    <MapContainer center={center} zoom={10} scrollWheelZoom={true}>
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
