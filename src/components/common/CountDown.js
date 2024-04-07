import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {getHeight, getWidth, moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import CText from './CText';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: this.calculateTimeRemaining(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const timeRemaining = this.calculateTimeRemaining();
      this.setState({timeRemaining});

      if (timeRemaining.total <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateTimeRemaining() {
    const {targetDate} = this.props;
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      total: timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  render() {
    const {timeRemaining} = this.state;

    return (
      <View style={localStyles.rot}>
        <View style={localStyles.item}>
          <CText
            type={'b18'}
            style={localStyles.bgText}>{`${timeRemaining.days}`}</CText>
        </View>

        <CText type={'b20'} style={localStyles.textStyle}>
          :
        </CText>
        <View style={localStyles.item}>
          <CText
            type={'b18'}
            style={localStyles.bgText}>{`${timeRemaining.hours}`}</CText>
        </View>

        <CText type={'b20'} style={localStyles.textStyle}>
          :
        </CText>
        <View style={localStyles.item}>
          <CText
            type={'b18'}
            style={localStyles.bgText}>{`${timeRemaining.minutes}`}</CText>
        </View>

        <CText type={'b20'} style={localStyles.textStyle}>
          :
        </CText>
        <View style={localStyles.item}>
          <CText
            type={'b18'}
            style={localStyles.bgText}>{`${timeRemaining.seconds}`}</CText>
        </View>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  rot: {
    ...styles.rowCenter,
  },
  item: {
    borderWidth: 1,
    width: getWidth(32),
    height: getHeight(40),
    borderRadius: moderateScale(5),
    backgroundColor: '#a32430',
    borderColor: '#a32430',
    marginHorizontal: 1,
    ...styles.center,
  },
  textStyle: {
    color: '#a32430',
  },
  bgText: {
    color: 'white',
  },
});

export default Countdown;
