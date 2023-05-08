
const updateFormHandler = async (event) => {
    console.log('hi there')
    event.preventDefault();

    const age = document.querySelector('#age').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const height = document.querySelector('#height').value.trim();
    const goal = document.querySelector('#goal').value.trim();
    const activity_level = document.querySelector('#activity_level').value;

    console.log(age, weight, height, goal, activity_level);

    const response = await fetch(`/api/update-profile`, {
        method: 'PUT',
        body: JSON.stringify({
            age,
            weight,
            height,
            goal,
            activity_level
        }),
        headers: { 'Content-Type': 'application/json' },

    });

        console.log(response);

    if (response.ok) {
        document.location.replace('/dashboard');
        console.log("Added updates successfully");
    } else {
        alert(response.statusText);
    }

}


document
    .querySelector('.personalInfo')
    .addEventListener('submit', updateFormHandler)
