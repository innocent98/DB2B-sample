import {Dimensions} from 'react-native';

const ScreenSize = () => {
  const itemWidth = Dimensions.get('window').width;
  const itemHeight = Dimensions.get('window').height;

  return {itemWidth, itemHeight};
};

export default ScreenSize;
