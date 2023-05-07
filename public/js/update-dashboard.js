const updateFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
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

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.personInfo').addEventListener('sumbit', (updateFormHandler))
