document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (password !== confirm) {
    alert("❌ Passwords do not match!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ " + data.message);
      window.location.href = "index.html";
    } else {
      alert("⚠️ " + data.message);
    }
  } catch (error) {
    alert("❌ Failed to connect to server");
    console.error(error);
  }
});
