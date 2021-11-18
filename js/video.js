var video = document.getElementById("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {

	video.play();
	console.log("Playing Video");
	document.getElementById("volume").innerHTML= video.volume*100 + "%";

 });

document.querySelector("#pause").addEventListener("click", function() {

	 video.pause()
	 console.log("Video Paused");

  });

document.querySelector("#slower").addEventListener("click", function() {

	 video.playbckRate = video.playbckRate * .95
	 console.log("Volume is now at" + video.playbckRate + "%")

   });

document.querySelector("#faster").addEventListener("click", function() {

		 video.playbckRate = video.playbckRate / .95
		 console.log("Volume is now at" + video.playbckRate + "%")

    });

document.querySelector("#skip").addEventListener("click", function() {

	video.currentTime += 15;
	console.log(video.currentTime)

	if(video.duration <= video.currentTime){

		video.currentTime = 0;
		console.log("Time:" + video.currentTime);

	}

});

document.querySelector("#mute").addEventListener("click", function() {

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
