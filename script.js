document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());

    // Validation
    if (!name || isNaN(age)) {
      alert("Please enter valid details");
      return;
    }

    // Step 1: Main promise (resolve if age > 18)
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve({ name: name, age: age });
        } else {
          reject(name);
        }
      }, 4000);
    })

    // Step 2: Extract name from object
    .then((userObj) => {
      return userObj.name;
    })

    // Step 3: Create new object with extracted name
    .then((userName) => {
      return { voterName: userName };
    })

    // Final Step: Show alert with final object
    .then((finalObj) => {
      alert(`Welcome, ${finalObj.voterName}. You can vote.`);
    })

    // Handle rejection if age <= 18
    .catch((userName) => {
      alert(`Oh sorry ${userName}. You aren't old enough.`);
    });
  });
});



