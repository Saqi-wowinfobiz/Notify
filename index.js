/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import notifee, { EventType } from "@notifee/react-native";

notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    if (type === EventType.PRESS) {
        console.log('User pressed an action with the id: ', pressAction.id);
        // navigate here
    }
    await notifee.cancelNotification(notification.id);
    console.log('background-event');
});
AppRegistry.registerComponent(appName, () => App);
