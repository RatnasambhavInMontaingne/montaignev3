import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const Pin = styled.div`
  color: rgb(219, 46, 46);
  font-weight: 700;
`

const AnyReactComponent = ({ text }) => (<Pin>{text}</Pin>)

class Map extends React.Component {
  render () {
    return (
      <div
        style={{
          height: '500px',
          width: '100%'
        }}
      >
        <GoogleMapReact
          defaultCenter={{
            lat: 17.441795,
            lng: 78.393318
          }}
          defaultZoom={17}
        >
          <AnyReactComponent
            lat={17.441795}
            lng={78.393318}
            text={'Montaigne Smart Business Solution'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
