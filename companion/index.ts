import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me } from "companion";

const input = "input01";

// Settings have been changed   
settingsStorage.onchange = (event) => {
    sendValue(event.key, event.newValue);
}

messaging.peerSocket.onopen = (_event) => {
    sendValue(input, settingsStorage.getItem(input));
}

function sendValue(key, val) {
    console.log(key, val)
    const parsedVal = JSON.parse(val)

    if (parsedVal && parsedVal.name) {
        sendSettingData({
            key: key,
            value: parsedVal.name
        });
    }
}
function sendSettingData(data) {
    // If we have a MessageSocket, send the data to the device
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        messaging.peerSocket.send(data);
    } else {
        console.log("No peerSocket connection");
    }
}
