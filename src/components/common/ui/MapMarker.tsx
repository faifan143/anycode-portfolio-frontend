"use client";

import { Loader2, MapPin, Code } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MapMarkerProps {
  latitude: number;
  longitude: number;
  address?: string;
  markerColor?: string;
  className?: string;
  title?: string;
  description?: string;
}

mapboxgl.accessToken =
  "pk.eyJ1IjoibW9ra3MiLCJhIjoiY20zdno3MXl1MHozNzJxcXp5bmdvbTllYyJ9.Ed_O6F-c2IZJE9DoCyPZ2Q";

export function MapMarker({
  latitude,
  longitude,
  address,
  markerColor = "#f97316", // Changed to orange-500 to match theme
  className = "",
  title = "موقعنا",
  description = "يمكنك زيارتنا في موقعنا الرئيسي",
}: MapMarkerProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [longitude, latitude],
        zoom: 15,
        interactive: true,
      });

      map.current.on("load", () => {
        if (!mounted || !map.current) return;

        // Add marker with custom popup
        const marker = new mapboxgl.Marker({ color: markerColor }).setLngLat([
          longitude,
          latitude,
        ]);

        if (address) {
          const popup = new mapboxgl.Popup({
            offset: 25,
            className: "custom-popup",
          }).setHTML(`
            <div class="p-3 font-medium text-gray-800">
              <div class="flex items-center gap-2 mb-1">
                <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                ${address}
              </div>
            </div>
          `);
          marker.setPopup(popup);
        }

        marker.addTo(map.current);

        // Add navigation controls with custom styling
        map.current.addControl(
          new mapboxgl.NavigationControl(),
          "bottom-right"
        );

        setLoading(false);
      });
    }

    return () => {
      mounted = false;
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [latitude, longitude, address, markerColor]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-[#151923] p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 ${className}`}
        >
          {/* Header */}
          <div className="flex items-center justify-end gap-3 mb-6">
            <h2 className="text-2xl font-bold text-white">{`</ ${title}>`}</h2>
            <Code className="text-orange-500 w-6 h-6" />
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 text-end">{description}</p>

          {/* Map Container */}
          <div className="relative rounded-xl overflow-hidden h-[400px] group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151923]/80 pointer-events-none z-10" />

            {/* Location Badge */}
            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/20 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-white text-sm font-medium">{address}</span>
            </div>

            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-[#151923]">
                <div className="flex items-center gap-2 text-orange-500">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>جاري تحميل الخريطة...</span>
                </div>
              </div>
            ) : null}
            <div ref={mapContainer} className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
