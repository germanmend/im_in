import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBold: {
    color: 'white',
    fontSize: 50,
    fontWeight: '900',
  },
  header: {
    color: 'white',
    fontSize: 50,
    fontWeight: '100',
  },
  birdAnimation: {
    width: '70%',
    height: 400,
  },
  userAnimation: {
    width: '20%',
    height: 80,
  },
  divider: {
    flexDirection: 'row',
    width:'70%',
  },
  lefter: {
    borderTopColor: '#3e92cc',
    borderTopWidth: 3,
    width:'20%',
  },
  left: {
    borderTopColor: '#92374d',
    borderTopWidth: 3,
    width:'20%',
  },
  middle: {
    borderTopColor: '#028090',
    borderTopWidth: 3,
    width:'20%',
  },
  right: {
    borderTopColor: '#659157',
    borderTopWidth: 3,
    width:'20%',
  },
  righter: {
    borderTopColor: '#ffbf00',
    borderTopWidth: 3,
    width:'20%',
  },
  register: {
    flexDirection: 'row',
    width:'80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10%',
    marginRight: '10%',
    marginBottom: '10%',
  },
  registerInput: {
    width:'100%',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    borderWidth: 0,
  }
})
