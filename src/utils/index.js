export const fetchRequestLogin = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      }),
    });
    const data = await response.json();
    console.log(data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export const fetchRequestSignup = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password
      }),
    });
    const data = await response.json();
    console.log(data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}