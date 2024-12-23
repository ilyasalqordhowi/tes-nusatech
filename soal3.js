const fetchUserData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ name: "John Doe", age: 30 }), 2000);
  });
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("Data fetched:", userData);
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

getUserData()
  .then((data) => console.log("User data processed:", data))
  .catch((error) => console.error("Error:", error));
