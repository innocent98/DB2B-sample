import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from './colors';

const itemWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  safeArea: {flex: 1},

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: itemWidth * 0.04,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  column: {gap: itemHeight * 0.015, width: '100%', alignItems: 'center'},
  row: {gap: itemWidth * 0.015, width: '100%', flexDirection: 'row'},
});
