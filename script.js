const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt user to select media stream, pass to video element

async function selectMediaStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        console.log(error)
    }
}


//onload

selectMediaStream();

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});