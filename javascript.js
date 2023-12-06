const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset');

function createGrid(size) {
  container.innerHTML = ''; // Clear the container
  const divSize = 100 / size + '%'; // Calculate the width and height of each div

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.style.width = divSize; // Set the width of each div
    div.style.height = divSize; // Set the height of each div
    div.addEventListener('mouseover', function() {
      this.classList.add('hovered'); // Add the hovered class when the mouse passes over the div
    });
    container.appendChild(div);
  }
}

resetButton.addEventListener('click', function() {
  let size = parseInt(prompt('Enter the number of squares per side for the new grid (max 100):'));
  size = Math.min(Math.max(size, 1), 100); // Limit the size between 1 and 100
  createGrid(size);
});

createGrid(16); // Create an initial 16x16 grid