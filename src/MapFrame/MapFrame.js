import React, { useEffect, useRef } from 'react';
import './MapFrame.css';

function MapFrame() {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCbAW9HnO287kwK5jdtrw6cAWCQ-T6LyJI&callback=initMap`;
    window.initMap = initMap; // Объявляем функцию initMap, которая будет вызвана после загрузки скрипта

    document.head.appendChild(googleMapScript);

    return () => {
      document.head.removeChild(googleMapScript); // Удаляем скрипт при размонтировании компонента
    };
  }, []);

  function initMap() {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 55.713486, lng: 37.631757 },
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: { lat: 55.713486, lng: 37.631757 },
      map: map,
      title: 'Указанные координаты',
    });
  }

  return (
    <div className='MapFrame-container'>
        <div ref={mapRef} style={{ width: '100%', height: '350px' }}></div>
    </div>
  );
}

export default MapFrame;
