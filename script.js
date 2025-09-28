// script.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("workout-detail");

  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan");

  const workouts = {
    beginner: {
      title: "Beginner Workout Plan",
      description: "Perfect for those just starting out.",
      exercises: [
        "10 Push-ups",
        "15 Squats",
        "20-second Plank",
        "10 Crunches",
        "Rest: 60 seconds between sets",
        "Tips: Do it all for three to four sets each workout"
      ]
    },
    intermediate: {
      title: "Intermediate Workout Plan",
      description: "Take your fitness to the next level.",
      exercises: [
        "15 Push-ups",
        "20 Lunges",
        "30-second Plank",
        "15 Burpees",
        "Rest: 45 seconds between sets",
        "Tips: Do it all for three to four sets each workout"
      ]
    },
    advanced: {
      title: "Advanced Workout Plan",
      description: "For experienced fitness enthusiasts.",
      exercises: [
        "20 Push-ups",
        "25 Jump Squats",
        "1-minute Plank",
        "20 Mountain Climbers",
        "Rest: 30 seconds between sets",
        "Tips: Do it all for four sets until near to failure each workout"
      ]
    }
  };

  if (!plan || !workouts[plan]) {
    container.innerHTML = `<h2>Workout Plan Not Found</h2><p>Please select a valid workout program.</p>`;
    return;
  }

  const workout = workouts[plan];

  container.innerHTML = `
    <h2>${workout.title}</h2>
    <p>${workout.description}</p>
    <ul>
      ${workout.exercises.map(ex => `<li>${ex}</li>`).join("")}
    </ul>
    <a href="workouts.html">← Back to Programs</a>
  `;
});
