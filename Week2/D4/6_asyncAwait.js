async function obtainData() {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const jsonReponse = await response.json();

    console.log("Parsed response: ", jsonReponse);
  } catch(err) {
    console.error("Algo ha ido mal", err)
  }
}

obtainData();