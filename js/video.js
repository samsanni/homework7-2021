var video = document.getElementById("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {

	console.log("Playing Video");
	video.play();
	document.getElementById("volume").innerHTML= video.volume*100 + "%";

 });

document.querySelector("#pause").addEventListener("click", function() {

	console.log("Video Paused");
	video.pause()

  });

document.querySelector("#slower").addEventListener("click", function() {

	console.log("Volume is now at" + video.playbckRate + "%")
	video.playbckRate = video.playbckRate * .95


   });

document.querySelector("#faster").addEventListener("click", function() {

	console.log("Volume is now at" + video.playbckRate + "%")
	video.playbckRate = video.playbckRate / .95


    });

document.querySelector("#skip").addEventListener("click", function() {

	console.log(video.currentTime)
	video.currentTime += 15;

	if(video.duration <= video.currentTime){

		video.currentTime = 0;
		console.log("Time:" + video.currentTime);

	}

});

document.querySelector("#mute").addEventListener("click", function() {

	console.log("Mute");

	if(video.muted){

		video.muted = false;
		document.querySelector("#mute").innerHTML = "Click to Mute";

	}

	else {

		video.muted = true;
		document.querySelector("#mute").innerHTML = "Click to Unmute";

	}

});

document.querySelector("#slider").addEventListener("click", function() {

		 var curr_vol = document.querySelector("#slider").value;
		 video.volume = curr_vol / 100;
		 document.querySelector("#volume").innerHTML = video.volume + "%";
		 console.log("Volume is now at" + video.volume + "%")

});

document.querySelector("#orig").addEventListener("click", function() {

	 	 video.classList.remove("oldSchool")

});

document.querySelector("#vintage").addEventListener("click", function() {

	 	 	 video.classList.add("oldSchool")

	});
