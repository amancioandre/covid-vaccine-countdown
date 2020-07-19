import React from "react"
import { Particles as ReactParticles } from "react-particles-js"


const Particles = () => (
    <ReactParticles
        style={{
            position: "absolute",
            top: 0,
            // pointerEvents: "onHover"
        }}
        params={{
            "interactivity": {
                "events": {
                    "onHover": {
                        "enable": true,
                        "mode": "attract"
                    },
                    "onClick": {
                        "enable": true,
                        "mode": "pull"
                    },
                },
            },
            "particles": {
              "number": {
                "value": 40,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#000"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000",
                  "opacity": 0.3
                },
                "polygon": {
                  "nb_sides": 3
                },
              },
              "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": true,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "retina_detect": true
          }}
    />
)

export default Particles