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

    if(first_name && last_name && email && age && weight && height && goal && email && activity_level) {
        const response = await fetch('/update-dashboard', {
            method: "POST",
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                age,
                weight,
                height,
                goal,
                activity_level,
            }),
            
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(first_name, last_name, email, age, weight, height, goal, activity_level);

        if(response.ok) {
            const updatedData = await response.json();
            console.log(updatedData.goal);
            document.querySelector('#first_name').value = updatedData.first_name;
            document.querySelector('#last_name').value = updatedData.last_name;
            document.querySelector('#email').value = updatedData.email;
            document.querySelector('#age').value = updatedData.age;
            document.querySelector('#weight').value = updatedData.weight;
            document.querySelector('#height').value = updatedData.height;
            document.querySelector('#goal').value = updatedData.goal;
            document.querySelector('#activity_level').value = updatedData.activity_level;
        } else {
            alert(response.statusText);
        }
       } else {
            alert('Please fill out all required fields.');
        }
    };

document.querySelector('.personalInfo').addEventListener('submit', (updateFormHandler));
