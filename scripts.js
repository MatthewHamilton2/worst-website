

function showhide(id1, id2){
	document.getElementById(id1).style.display = "none";
	document.getElementById(id2).style.display = "block";
}

function change(id1, id2){
	document.getElementById(id1).src=(id2)
}

function readmore(id1, id2, id3) {
  var dots = document.getElementById(id1);
  var moreText = document.getElementById(id2);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
	document.getElementById(id3).innerHTML = "Read more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
	document.getElementById(id3).innerHTML = "Read less";
  }
}