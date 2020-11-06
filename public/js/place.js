const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

let fakeCounter = 0;

const addColor = document.getElementById('submit');
const colorList = document.getElementById('colorList');

let colorsRef;
let unsubscribe;

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
  if (user) {
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Welcome ${user.displayName}! </h3><p>User ID: ${user.uid}</p>`
    
    colorsRef = db.collection('colors');

    addColor.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      colorsRef.add({
        uid: user.uid,
        name: `user${fakeCounter+1}`,
        placedAt: serverTimestamp(),
        isVip: Math.random() >= 0.5
      });
    }

  } else {
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
  }
});



// $(document).ready(() => {
//   var socket = io();

//   var canvas = $("#place")[0];
//   var ctx = canvas.getContext("2d");

//   socket.on("canvas", (canvasData) => {
//     canvasData.forEach((row, rowIndex) => {
//       row.forEach((col, colIndex) => {
//         ctx.fillStyle = col;
//         ctx.fillRect(colIndex * 10, rowIndex * 10, 10, 10);
//       });
//     });
//   });

//   $("#submit").click(() => {
//     socket.emit("color", {
//       col: parseInt($("#x-coord").val()),
//       row: parseInt($("#y-coord").val()),
//       color: $("#color").val(),
//     });
//     //console.log(pixelData);
//   });
// });
