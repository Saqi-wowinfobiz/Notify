import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import notifee, { AndroidBadgeIconType } from '@notifee/react-native';


const App = () => {


  async function onDisplayNotification() {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
      },
    });
  }
  return (
    <View>
      {/* <Text>App</Text> */}

      <Button title='Click' onPress={onDisplayNotification}></Button>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})