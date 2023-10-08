import React from 'react'
import { ImageOverlay, LayersControl, LayerGroup } from 'react-leaflet';
//overlay to map campus
import overlay_estt from '../../data/imgsMap/67672.png'
import overlay_a from '../../data/imgsMap/67683.png'
import overlay_b from '../../data/imgsMap/67685.png'
import overlay_o from '../../data/imgsMap/67731.png'
import overlay_q from '../../data/imgsMap/67732.png'
import overlay_campus from '../../data/imgsMap/67748.png'

const OverlayTomarCampus = () => {
  return (
    <LayersControl position="bottomright">
                  <LayersControl.Overlay name="IPT Campus Tomar - 1st Floor Plan" checked="true">
                    <LayerGroup pane="floor_plan">
                        <ImageOverlay
                            url={overlay_estt}
                            //bounds={[[39.600336, -8.391168], [39.598922, -8.389124]]}
                            bounds={[[39.6003646, -8.3908756], [39.5988639, -8.3892479]]}
                            opacity={1}
                            zIndex={10}
                        />
                        <ImageOverlay
                            url={overlay_a}
                            bounds={[[39.6004709, -8.3905531], [39.6000283, -8.3912034]]}
                            opacity={1}
                            zIndex={10}
                        />
                        <ImageOverlay
                            url={overlay_b}
                            bounds={[[39.6001449, -8.3906603], [39.599264, -8.3915814]]}
                            opacity={0.3}
                            zIndex={10}
                        />
                        <ImageOverlay
                            url={overlay_o}
                            bounds={[[39.5999972, -8.3912895], [39.5993078, -8.3920083]]}
                            opacity={1}
                            zIndex={10}
                        />
                        <ImageOverlay
                            url={overlay_q}
                            bounds={[[39.5992198, -8.3898341], [39.5989243, -8.389601]]}
                            opacity={1}
                            zIndex={10}
                        />
                    </LayerGroup>
                </LayersControl.Overlay>
                
                <LayersControl.Overlay name="IPT Campus Tomar - Campus Blueprint">
                    <ImageOverlay
                            url={overlay_campus}
                            bounds={[[39.6016066, -8.386342], [39.5976571, -8.3934625]]}
                            opacity={0.4}
                            zIndex={3}
                        />
                </LayersControl.Overlay>
            </LayersControl>
  )
}

export default OverlayTomarCampus
