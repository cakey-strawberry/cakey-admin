import {
  useNavermaps,
  Container as MapDiv,
  NaverMap,
  Marker,
} from "react-naver-maps";

export function Map({ coordinates }: { coordinates: [number, number] }) {
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "300px",
      }}
    >
      <NaverMap
        defaultCenter={new navermaps.LatLng(coordinates[1], coordinates[0])}
        defaultZoom={15}
      >
        <Marker
          defaultPosition={new navermaps.LatLng(coordinates[1], coordinates[0])}
        />
      </NaverMap>
    </MapDiv>
  );
}
