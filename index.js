const vid = document.getElementById('video');
const button= document.getElementById('button');

async function chooseVid(){
    try{
        const incomingVid = await navigator.mediaDevices.getDisplayMedia();
        vid.srcObject = incomingVid;
        vid.onloadedmetadata = () =>{
        vid.play();
        }
    }

    catch(error){
        console.log("Error occured:" + error);
    }
}

button.addEventListener("click", async ()=> {
  button.disabled= true;
  await vid.requestPictureInPicture();
  button.disabled=false;
});


chooseVid();

