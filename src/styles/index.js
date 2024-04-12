import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../helper/ResponsiveSize';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBg: {
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
  },
});
