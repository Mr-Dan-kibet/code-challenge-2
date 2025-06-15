//wait for html to fully load
document.addEventListener("DOMContentLoaded", () => {
  //Grabbing html elements
  const form = document.getElementById("guestForm");
  const input = document.getElementById("guestNames");
  const List = document.getElementById("guestList");

  //stop page from refreshing
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Get guest name with trim to remove spaces
    const name = input.value.trim();

    //limit list to 10
    if (List.children.length > 10) {
      alert("Guest list is full!");
      return;
    }

    //create li to put guest names inside

    const li = document.createElement("li");
    li.textContent = name;
    // add li to the ul
    List.appendChild(li);
    //clear input box
    input.value = "";
  });
});
