import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { theme } from '../../theme'
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync'
import * as Notifications from "expo-notifications"

const Counter = () => {
  const handlePuchNotification = async () =>{
    const result = await registerForPushNotificationsAsync();
    if(result === "granted"){
      await Notifications.scheduleNotificationAsync({
        content:{
          title:"I am a notification from the expo Go app",
        },
        trigger:{
          seconds:5
        }
      })
    }else{
      Alert.alert("Permission not granted","Please enalbe the permission to receive notification")
    }
  }
  return (
    <View style={styles.styleContainer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePuchNotification}>
        <Text style={styles.buttonText}>Schedule Notification</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  styleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    backgroundColor:theme.colorCerulean,
    padding:10,
    borderRadius:6
  },
  buttonText:{
    color:theme.colorWhite,
    letterSpacing:1
  }
})
