const baseURL = "https://api.api-ninjas.com/v1/exercises"

async function getExercises(muscle) {
    await fetch(baseURL + `?muscle=${muscle}`,
    {
        method: 'GET',
        url: baseURL + `?muscle=${muscle}`,
        headers: { 'X-Api-Key': './apikey'},
        contentType: 'application/json',

    })
    .then(resp => resp.json()
    .then(data => handleData(data)))
}

function handleData(exerciseArray) {
    console.log(exerciseArray)
}
getExercises();