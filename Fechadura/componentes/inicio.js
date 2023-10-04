import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function inicio() {
  return (
    <View style={styles.root}>
      <Image source={{uri: logoPadoBranco1}} style={{width: 296, height: 55}} contentFit="cover"/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 375,
    height: 812,
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 334,
    backgroundColor: '#0D0D0D',
    borderRadius: 29,
  },
  group: {
    width: 24.661,
    height: 11,
    flexShrink: 0,
  },
  $941: {
    width: 54,
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px /* 133.333% */',
    letterSpacing: -0.24,
  },
  statusBar: {
    width: 375,
    height: 44,
    flexShrink: 0,
    backdropFilter: 'blur(10px)',
  },
  frame: {
    width: 54,
    paddingTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoPadoBranco1: {
    width: 296,
    height: 55,
    flexShrink: 0,
  },
});