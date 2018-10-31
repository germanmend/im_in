import DeviceInfo from 'react-native-device-info'
import firebase from 'firebase'

export const writeUserData = async (nick) => {
  return firebase.database().ref(`users/${DeviceInfo.getUniqueID()}`).set({ nick, })
}

export const currentUser = () => {
  return new Promise((resolve) => {
    firebase.database().ref(`users/${DeviceInfo.getUniqueID()}`).once('value').then((user) => {
      resolve(user.val())
    })
  })
}
