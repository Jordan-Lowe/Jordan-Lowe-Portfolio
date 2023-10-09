import skills from './Information/skills'

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
  // Step 1: Select the HTML elements
  const aboutTitle = document.querySelector('.aboutTitle')
  const aboutText = document.querySelector('.aboutText')

  // Step 2: Access the last object in the skills array
  const lastSkill = skills[skills.length - 1]

  // Step 3: Access the name and description properties
  const name = lastSkill.name
  const description = lastSkill.description

  // Step 4: Append the data to the HTML elements
  if (aboutTitle) {
    aboutTitle.textContent = name
  }
  if (aboutText) {
    aboutText.textContent = description
  }
})
