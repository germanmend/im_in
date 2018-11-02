import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
    padding: 5,
    minWidth: '90%',
  },
  itemBody: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#fff',
    minHeight: 85,
  },
  itemProps: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: '#fff',
    marginTop: 2,
    minHeight: 40,
  },
  itemTitle: {
    textAlign: 'center',
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: '300',
  },
  watchAnimation: {
    //width: '20%',
    height: 40,
  }
})
