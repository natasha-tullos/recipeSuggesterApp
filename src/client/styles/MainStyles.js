import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  title: {
    fontFamily: 'Lemonada-Regular',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  macroContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffe3e3',
    padding: 30,
    marginTop: 150,
  },
  textInput: {
    backgroundColor: '#fff',
    borderColor: '#000',
    margin: 30,
    padding: 15,
    width: 250,
    borderRadius: 10,
  },
  btnContainer: {
    backgroundColor: '#fff',
    width: 180, 
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});