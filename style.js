import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  background: {
    width: windowWidth * 1,
  },
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  alan1: {
    padding: 16,
    backgroundColor: '#D29057',
    borderRadius: 23,
    margin: 23,
  },
  alan1Text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
  alan2: {
    width: windowWidth * 0.8,
    height: windowWidth * 1,
    backgroundColor: '#D29057',
    borderRadius: 18,
    marginTop: 276,
    alignSelf: 'center',
  },
  bar: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
