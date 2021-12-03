import {StyleSheet} from 'react-native';
import Colors from '../../../shared/theme/Colors';

export default StyleSheet.create({
  collab: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 200,
  },
  collab__header: {
    marginBottom: 30,
  },
  collab__headerTitle: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 26,
  },
  collab__headerSubtitle: {
    fontSize: 16,
  },

  // PHYSICIAN
  physician: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  physician__image: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
  },
  physician__imageContainer: {
    alignItems: 'center',
  },
});
