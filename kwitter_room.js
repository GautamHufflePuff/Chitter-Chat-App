// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyAqE6t3d1KtlCM9jFVhBMIlqunJPh6-tE8",
  authDomain: "chitterforthemillionsthtime.firebaseapp.com",
  databaseURL: "https://chitterforthemillionsthtime-default-rtdb.firebaseio.com",
  projectId: "chitterforthemillionsthtime",
  storageBucket: "chitterforthemillionsthtime.appspot.com",
  messagingSenderId: "748857565154",
  appId: "1:748857565154:web:38cdcb9412fb7805a9a3bb"
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
