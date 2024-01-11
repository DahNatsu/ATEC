// document.addEventListener('DOMContentLoaded', function () {
//   const slider = tns({
//     container: '#image-track', // Replace with your container's ID or class
//     items: 9,
//     mouseDrag: true, // Disable mouse dragging
//     touch: false, // Disable touch dragging
//     swipeAngle: false,
//     speed: 400,
//     loop: true, // Enable loop
//   });
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const maxScrollRange = 52; // Limit the max scroll range to 5%
//   const track = document.getElementById("image-track");
  
//   const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);
  
//   const handleOnUp = () => {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;
//   };
//   const handleOnMove = (e) => {
  
//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, // calculates starting position of the mouse
//       maxDelta = window.innerWidth / 20; // Set max range to 20% of the current range
//     const maxScrollRange = 52; // Limit the max scroll range to 5%
  
//     const scrollSpeedFactor = 0.1; // Adjust this factor to control scroll speed
//     const percentage =
//       (mouseDelta / maxDelta) * -100 * scrollSpeedFactor; // Apply the factor to slow down the scrolling
  
//     const nextPercentageUnconstrained =
//       parseFloat(track.dataset.prevPercentage) + percentage;
//     const nextPercentage = Math.max(
//       Math.min(nextPercentageUnconstrained, 0),
//       -maxScrollRange
//     );
  
//     track.dataset.percentage = nextPercentage;
  
//     track.animate(
//       {
//         transform: `translate(${nextPercentage}%, -50%)`,
//       },
//       { duration: 1200, fill: "forwards" }
//     );
  
//     const images = track.querySelectorAll(".image");
//     for (const image of images) {
//       image.animate(
//         {
//           objectPosition: `${100 + nextPercentage}% center`,
//         },
//         { duration: 1200, fill: "forwards" }
//       );
//     }
//   };
//   function checkForLoop() {
//     const currentPercentage = parseFloat(track.dataset.percentage);
//     if (currentPercentage === 0) {
//       // User reached the start of the slider; you can implement looping here
//       // You might want to animate the loop to provide a smooth transition
//       // Example: animate back to the end of the slider
//       track.animate(
//         {
//           transform: `translate(${-maxScrollRange}%, -50%)`,
//         },
//         { duration: 1200, fill: "forwards" }
//       );
//     } else if (currentPercentage <= -maxScrollRange) {
//       // User reached the end of the slider; you can implement looping here
//       // Example: animate back to the start of the slider
//       track.animate(
//         {
//           transform: `translate(0%, -50%)`,
//         },
//         { duration: 1200, fill: "forwards" }
//       );
//     }
//   }
  
//   /* -- Had to add extra lines for touch events -- */
//   window.onmousedown = (e) => handleOnDown(e);
//   window.ontouchstart = (e) => handleOnDown(e.touches[0]);
//   window.onmouseup = (e) => handleOnUp(e);
//   window.ontouchend = (e) => handleOnUp(e.touches[0]);
//   window.onmousemove = (e) => {
//     handleOnMove(e);
//     checkForLoop();
//   };
//   window.ontouchmove = (e) => {
//     handleOnMove(e.touches[0]);
//     checkForLoop();
//   };
  
// })