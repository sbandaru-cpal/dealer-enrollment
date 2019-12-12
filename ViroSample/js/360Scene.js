'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  Viro360Image,
  ViroImage,
  ViroAnimations,
  ViroNode,
  ViroText
} from 'react-viro';

var backgroundImage = require('./res/test.jpg');
var weworkImage = require('./res/wework_title.png');

export default class Scene360AR extends Component {

  constructor() {
    super();

    // set initial state
    this.state = {
      runShowTitleAnimation : false,
    }

    // bind `this` to functions
    this._onBackgroundPhotoLoadEnd = this._onBackgroundPhotoLoadEnd.bind(this);
    this._onTitleClicked = this._onTitleClicked.bind(this);
  }

  /**
   * Renders a scene with a 360 Photo background that contains a single WeWork ViroImage. This
   * image will be faded/scaled in with the "showTitleAnimation" when the scene first appears. Clicking on
   * the WeWork ViroImage will launch the user into the next scene (WestLakeTowers).
   */
  render() {
    return (
      <ViroScene style={styles.container}>
        <Viro360Image source={backgroundImage} onLoadEnd={this._onBackgroundPhotoLoadEnd}/>

        <ViroImage
          position={[0, 0, -5]} source={weworkImage} scale={[.1, .1, .1]}
          opacity={0.0} onClick={this._onTitleClicked}
          animation={{
            name : "showTitleAnimation",
            run : this.state.runShowTitleAnimation,
            loop : false,
          }} />
      </ViroScene>
    );
  }

  /**
   * Callback function for when image has finished loading in the Viro360Photo.
   * We then animate the WeWork ViroImage into the scene through the
   * setting of state runShowTitleAnimation.
   */
  _onBackgroundPhotoLoadEnd() {
      this.setState({
          runShowTitleAnimation:true
      });
  }

  /**
   * Callback function for when the user taps on the WeWork ViroImage
   * where we navigate into the second scene.
   */
  _onTitleClicked() {
  }
}

/**
 * Declare all custom flex box styles here to be reference by the
 * controls above.
 */
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

/**
 * Declare all your animations here. They'll be referenced by the animation props.
 */
ViroAnimations.registerAnimations({
    showTitleAnimation: {properties:{scaleX:2, scaleY:2, scaleZ:2, opacity:1.0}, easing:"PowerDecel", duration:1000},
});


module.exports = Scene360AR;
