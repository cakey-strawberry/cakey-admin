import { useNavermaps, NaverMap, Marker } from "react-naver-maps";

export function Map({ coordinates }: { coordinates: [number, number] }) {
  const navermaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(coordinates[1], coordinates[0])}
      defaultZoom={15}
    >
      <Marker
        defaultPosition={new navermaps.LatLng(coordinates[1], coordinates[0])}
      />
    </NaverMap>
  );
}
