import {StyleSheet} from 'react-native';
import Colors from '../../shared/theme/Colors';
import Texts from '../../shared/theme/Texts';

export default StyleSheet.create({
  back__container: {
    height: 70,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textInput__label: {
    marginLeft: 2,
  },

  textInput: {
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    marginTop: 5,
    height: 40,
  },

  textInputDate: {
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    marginTop: 5,
    height: 40,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    paddingVertical: 5,
  },

  col: {
    flex: 1,
  },

  // INFORMATION
  information: {
    paddingHorizontal: 20,
  },

  information__submitButton: {
    backgroundColor: Colors.primary,
    marginVertical: 10,
    paddingVertical: 10,
    zIndex: 2,
  },

  information__submitButtonLabel: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
    // fontSize: 16,
  },

  // AGE

  age__input: {
    fontSize: 60,
  },
  age__nextButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 17,
    borderRadius: 5,
    width: '100%',
  },

  //   SEMESTER

  semester__card: {
    height: 100,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 5,
  },
  semester__cardActive: {
    height: 100,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 5,
  },
  semester__cardTitleActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  semester__cardTypeActive: {
    color: '#fff',
    fontSize: 14,
  },
  semester__cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    color: '#000',
  },
  semester__cardType: {
    fontSize: 14,
    color: '#000',
  },

  //   LIFESTYLE
  lifestyle__cardActive: {
    height: 159,
    width: 159,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lifestyle__card: {
    height: 159,
    width: 159,
    borderRadius: 12,
    borderColor: 'lightgray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
});
