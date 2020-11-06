const auth = firebase.auth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");
const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

let fakeCounter = 0;

const addColor = document.getElementById("submit");

let colorsRef;
let unsubscribe;

let canvasData = [];
let canvas = $("#place")[0];
let ctx = canvas.getContext("2d");

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(async (user) => {
  if (user) {
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Welcome ${user.displayName}! </h3><p>User ID: ${user.uid}</p>`;

    colorsRef = db.collection("colors");

    const snapshot = await colorsRef.get();

    snapshot.forEach((doc) => {
      canvasData.push({
        coordinates: doc.data().coordinates,
        color: doc.data().color,
      });
    });

    redrawCanvas();

    addColor.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      colorsRef.add({
        uid: user.uid,
        color: $("#color").val(),
        placedAt: serverTimestamp(),
        coordinates: [
          parseInt($("#x-coord").val()),
          parseInt($("#y-coord").val()),
        ],
        isVip: false,
      });

      fakeCounter++;

      unsubscribe = colorsRef.onSnapshot((querySnapshot) => {
        //On Change
        redrawCanvas();

        querySnapshot.docs.forEach(doc => {
          canvasData = [];
          canvasData.push({
            coordinates: doc.data().coordinates,
            color: doc.data().color,
          });
        });
      });
    };
  } else {
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
  }
});

function redrawCanvas() {
  let canvasDataSize = Object.keys(canvasData).length;
  if (canvasDataSize > 0) {
    canvasData.forEach((data, index, array) => {
      console.log(data);
      ctx.fillStyle = data.color;
      ctx.fillRect(data.coordinates[0] * 10, data.coordinates[1] * 10, 10, 10);
    });
  }
}