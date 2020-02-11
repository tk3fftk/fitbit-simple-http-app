import { peerSocket } from "messaging"
import document from "document";

console.log("Max message size=" + peerSocket.MAX_MESSAGE_SIZE);

const input: string = "input01"
const mylabel = document.getElementById("mylabel")!

peerSocket.onmessage = (event) => {
    console.log(JSON.stringify(event.data))
    if (event.data.key === input) {
        mylabel.textContent = JSON.stringify(event.data.value)
    }
}