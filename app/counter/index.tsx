import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme'
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync'
import * as Notifications from "expo-notifications"
import { intervalToDuration, isBefore } from 'date-fns'
import { TimeSegment } from '../../components/TimeSegment'

type CoundownStatus = {
  isOverdue: boolean;
  distance: ReturnType<typeof intervalToDuration>
}
const timeStamp = Date.now() + 10*1000; // 10 seconds from now
const Counter = () => {
  const [status, setStatus] = useState<CoundownStatus>({
    isOverdue:false,
    distance:{}
  })
  const [secondElapsed, setSecondElapsed] = useState(0);
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
  
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      const isOverdue = isBefore(timeStamp,Date.now());
      const distance = intervalToDuration(
        isOverdue ? {start : timeStamp,end:Date.now()} :{
          start:Date.now(),
          end:timeStamp
        }
      )
      setStatus({isOverdue,distance})
    },1000);
    return () => clearInterval(intervalId);
  },[])
  console.log(status);
  
  return (
    <View
      style={[
        styles.styleContainer,
        status.isOverdue ? styles.lateBg : undefined,
      ]}>
      {status.isOverdue ? (
        <Text style={status.isOverdue ? styles.lateText : undefined}>
          Things overdue by :{" "}
        </Text>
      ) : (
        <Text>Things due in ... </Text>
      )}

      <View style={styles.rowContainer}>
        <TimeSegment
          unit="Days"
          number={status.distance.days ?? 0}
          textStyle={status.isOverdue ? styles.lateText : undefined}
        />
        <TimeSegment
          unit="Hours"
          number={status.distance.hours ?? 0}
          textStyle={status.isOverdue ? styles.lateText : undefined}
        />
        <TimeSegment
          unit="Minutes"
          number={status.distance.minutes ?? 0}
          textStyle={status.isOverdue ? styles.lateText : undefined}
        />
        <TimeSegment
          unit="Seconds"
          number={status.distance.seconds ?? 0}
          textStyle={status.isOverdue ? styles.lateText : undefined}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handlePuchNotification}>
        <Text style={styles.buttonText}>Schedule Notification</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Counter

const styles = StyleSheet.create({
  styleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lateBg:{
    backgroundColor:theme.colorRed
  },
  rowContainer :{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10
  },
  buttonContainer:{
    backgroundColor:theme.colorCerulean,
    padding:10,
    borderRadius:6
  },
  buttonText:{
    color:theme.colorWhite,
    letterSpacing:1
  },
  lateText:{
    color:theme.colorWhite
  }
})
