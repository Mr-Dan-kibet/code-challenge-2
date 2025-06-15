//wait for html to fully load
document.addEventListener("DOMContentLoaded", () => {
  //Grabbing html elements
  const form = document.getElementById("guestForm");
  const input = document.getElementById("guestName");
  const List = document.getElementById("guestList");

  //stop page from refreshing
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
