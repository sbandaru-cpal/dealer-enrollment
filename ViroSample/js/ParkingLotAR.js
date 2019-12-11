'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroAmbientLight,
  ViroMaterials,
  Viro3DObject,
  ViroSpotLight,
  ViroQuad,
  ViroAnimations,
  Viro360Image
} from 'react-viro';

ViroMaterials.createMaterials({
  white: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  blue: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_blue.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  grey: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_grey.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  red: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_red.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  yellow: {
    lightingModel: "PBR",
    diffuseTexture: require('./res/tesla/object_car_main_Base_Color_yellow.png'),
    metalnessTexture: require('./res/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./res/tesla/object_car_main_Roughness.png'),
  },
  white_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(231,231,231)",
  },
  blue_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(19,42,143)",
  },
  grey_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(75,76,79)",
  },
  red_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(168,0,0)",
  },
  yellow_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(200,142,31)",
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 250, //.25 seconds
  },
  scaleCar:{properties:{scaleX:.09, scaleY:.09, scaleZ:.09,},
                  duration: 500, easing: "bounce"},
});


export default class ParkingLotAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
       <Viro360Image
    source={require("./res/audi.jpg")}
    rotation={[0, 45, 0]}
    format="RGBA8"
    onLoadStart={this._onLoadStart}
    onLoadEnd={this._onLoadEnd}
    onError={this._onError} />
      </ViroARScene>
    );
  }

  
 

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}



var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = ParkingLotAR;
