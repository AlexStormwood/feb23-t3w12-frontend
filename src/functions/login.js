async function login(username, password){ 
    console.log(username, password);

    let result = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/login",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username: username, password: password}),
      }
    );

	let data = await result.json();

    console.log(data);

	return data;

}

module.exports = {login}