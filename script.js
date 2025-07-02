document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("votingForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());

    if (!name || isNaN(age)) {
      alert("Please enter valid details.");
      return;
    }

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(name);
        } else {
          reject(name);
        }
      }, 4000);
    })
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
  });
});


