"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
}

const Map = ({ coordinates, address }: MapProps) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: coordinates.lat,
    lng: coordinates.lng,
  };

  return (
    <div className="aspect-video bg-gray-700/50 rounded-lg overflow-hidden">
      <LoadScript googleMapsApiKey={"AIzaSyAqzcrgV7AWOC7HWJa8chvpUyg77UZXS7I"}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
          options={{
            // Add these options to remove watermark and customize map
            tilt: 0,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: true,
            // Remove the watermark
            backgroundColor: "#242f3e",
            styles: [
              {
                featureType: "all",
                elementType: "labels.text",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{ visibility: "off" }],
              },
              {
                elementType: "geometry",
                stylers: [{ color: "#242f3e" }],
              },
              {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#242f3e" }],
              },
              {
                elementType: "labels.text.fill",
                stylers: [{ color: "#746855" }],
              },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
              },
              // Remove the grid
              {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
        >
          <Marker position={defaultCenter} title={address} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
