import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  title: {
    fontFamily: 'Lemonada-Regular',
    fontSize: 24,
    textAlign: 'center',
  },
  subTitles: {
    fontFamily: 'NanumGothicBold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  listItemText: {
    fontFamily: 'NanumGothic',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  recipeContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffe3e3',
    padding: 30,
  },
  image: {
    width: 300,
    height: 300,
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
  linkSpan: {
    color: '#1a73e8',
  },
});