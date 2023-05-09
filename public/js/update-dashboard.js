
const updateFormHandler = async (event) => {
    console.log('hi there')
    event.preventDefault();

    const age = document.querySelector('#age').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const height = document.querySelector('#height').value.trim();
    const goal = document.querySelector('#goal').value.trim();
    const activity_level = document.querySelector('#activity_level').value;

    if(first_name && last_name && email && weight && height && goal && email && activity_level) {
        const response = await fetch('/update-dashboard', {
            method: "POST",
            body: JSON.stringify({
                first_name,
                last_name,
                weight,
                height,
                goal,
                email,
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


document.querySelector('.personInfo').addEventListener('sumbit', (updateFormHandler))
