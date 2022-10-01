// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAmGFkZvQeBaijHch8GUq0ojy62wjiS-LI",
  authDomain: "chitterupdated1.firebaseapp.com",
  databaseURL: "https://chitterupdated1-default-rtdb.firebaseio.com",
  projectId: "chitterupdated1",
  storageBucket: "chitterupdated1.appspot.com",
  messagingSenderId: "1044808108768",
  appId: "1:1044808108768:web:c59aec4f2ff4fe76f81e85",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase
    .database()
    .ref("/")
    .child(room_name)
    .update({ purpose: "Adding RoomName!" });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("roomname - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirecttoroomname(this.id)' >#" +
          Room_names +
          "</div> <hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();
function redirecttoroomname(names) {
  console.log(names);
  localStorage.setItem("room_name", names);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
function take2filter() {
   window.location = "filter.html";
}
FileValidation = (event) => {
  var image = document.getElementById("oh");
  image.src = URL.createObjectURL(event.target.files[0]);
  const fi = document.getElementById("file");
  if (fi.files.length > 0) {
    for (const i = 0; i <= fi.files.length - 1; i++) {
      const fsize = fi.files.item(i).size;
      const file = Math.round(fsize / 1024);
    }
  }
};
