'use client';
import React, { useState } from 'react';
import { AdvancedMarker, APIProvider, Map, Pin } from '@vis.gl/react-google-maps';
import { parseAsInteger, useQueryState } from 'nuqs';

const GoogleMap = () => {
  const [lang, setLang] = useQueryState<number>('lang', parseAsInteger.withOptions({ shallow: false, throttleMs: 1000 }).withDefault(46.6753)); // Change to number
  const [lat, setLat] = useQueryState<number>('lat', parseAsInteger.withOptions({ shallow: false, throttleMs: 1000 }).withDefault(24.7136)); // Change to number
  const [open, setOpen] = useState(false);
  const handleMapClick = (e: any) => {
    const latLng = e.detail.latLng;
    setLang(latLng.lng);
    setLat(latLng.lat);
  };
  const position = { lat, lng: lang };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        defaultBounds={{
          north: 50,
          south: -50,
          east: 50,
          west: -50,
        }}
        style={{ width: '98%', height: '83vh', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray' }}
        mapId={process.env.NEXT_PUBLIC_MAP_ID}
        onClick={handleMapClick}
        defaultZoom={8}
      >
        <AdvancedMarker position={position} onClick={() => setOpen(true)}>
          <Pin background={'grey'} borderColor={'green'} glyphColor={'purple'} />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
