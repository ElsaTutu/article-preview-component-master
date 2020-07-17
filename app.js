function myFunction() {

    var link = document.querySelector('.links');
  console.log("share");
  
  if (link.style.display === "none") {
    link.style.display = "block";
    link.style.display = "flex";
  } else {
    link.style.display = "none";
  }
} 
