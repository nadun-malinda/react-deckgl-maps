import { useSelector } from 'react-redux'
import DeckGL from '@deck.gl/react'
import { GeoJsonLayer } from '@deck.gl/layers'
import { StaticMap } from 'react-map-gl'
import Income from './components/Income/Income'

const INITIAL_VIEW_STATE = {
  longitude: -35,
  latitude: 36.7,
  zoom: 1.8,
  maxZoom: 20,
  pitch: 0,
  bearing: 0
}

const App = () => {
  const { data } = useSelector(state => state.map)

  const incomeLayer = new GeoJsonLayer({
    id: 'geojson-test',
    data: data ? data : {},
    pickable: true,
    autoHighlight: true,
    getFillColor: [160, 160, 180, 200],
    getLineColor: [0, 0, 0, 255],
    getLineWidth: 1,
    lineWidthUnits: 'pixels',
    // onClick
  })

  return (
    <>
      <Income />
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[incomeLayer]}
        getCursor={({ isHovering }) => isHovering ? 'pointer' : 'grab'}>
        <StaticMap
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    </>
  )
}

export default App