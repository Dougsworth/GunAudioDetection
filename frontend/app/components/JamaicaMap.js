import { useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Use import for Leaflet

const JamaicaMap = ({ gunshotLocation }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Create the map and center it over Jamaica
      const map = L.map("map").setView([18.1096, -77.2975], 8);

      // Custom TileLayer (dark mode with subtle details)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      if (gunshotLocation) {
        // Create a custom marker icon
        const customIcon = L.icon({
          iconUrl: "/alert.png", // Ensure the alert.png is in the public folder
          iconSize: [40, 40], // Adjust as necessary
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
          shadowUrl:
            "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
          shadowSize: [41, 41], // Size of the shadow
        });

        // Add the marker with the custom icon
        const marker = L.marker([gunshotLocation.lat, gunshotLocation.lng], {
          icon: customIcon,
        }).addTo(map);

        // Add the popup to the marker
        marker
          .bindPopup(
            `
            <div style="text-align: center; padding: 8px;">
              <strong style="color: #ff4757; font-size: 18px;">Gunshot Detected</strong>
              <br />
              <strong>Coordinates:</strong> ${gunshotLocation.lat.toFixed(
                2
              )}, ${gunshotLocation.lng.toFixed(2)}<br/>
              <strong>Accuracy:</strong> High<br/>
              <strong>Time:</strong> ${new Date().toLocaleString()}<br/>
              <strong>Details:</strong> Gunshot detected in your area. Stay alert!
            </div>
            `
          )
          .openPopup();
      }

      return () => {
        map.remove(); // Cleanup map when component is unmounted
      };
    }
  }, [gunshotLocation]);

  return <div id="map" className="w-full h-full"></div>;
};

export default dynamic(() => Promise.resolve(JamaicaMap), { ssr: false });
