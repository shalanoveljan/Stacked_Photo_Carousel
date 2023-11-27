//Get all image container
let childElement = document.querySelectorAll(".image-container");

//Array of image URLs
let imageUrls = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg"];

//Initial z-index value
let zIndex = 1;

childElement.forEach((element, index) => {
  //Create an image element
  let img = document.createElement("img");
  img.setAttribute("src", imageUrls[index]);
  img.setAttribute("class", "image");
  element.appendChild(img);

  //Add a click event listener to each image container
  element.addEventListener("click", () => {
    zIndex++;
    element.style.right = "50em";
    element.style.zIndex = zIndex.toString();
    element.style.transform = "rotate(0deg)";
  
    //Apply transition to right property
    element.style.transition = " right 0.3s ease";

    //Remomve the class
    setTimeout(() => {
      zIndex -= 3;
      element.style.right = "";
      element.style.zIndex = zIndex.toString();
      element.style.transform = "";

      //Set a transition for clearing the transition property
      element.style.transition = "all 0.3s ease";

    }, 1000);
  });
});
