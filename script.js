//your JS code here. If required.
// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("votingForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());

    // Validation
    if (!name || isNaN(age)) {
      alert("Please enter valid details.");
      return;
    }

    // Create a Promise that resolves/rejects after 4 seconds
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(name);
        } else {
          reject(name);
        }
      }, 4000);
    })
      .then((userName) => {
        alert(`Welcome, ${userName}. You can vote.`);
      })
      .catch((userName) => {
        alert(`Oh sorry ${userName}. You aren't old enough.`);
      });
  });
});
