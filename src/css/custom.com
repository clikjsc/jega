/* filepath: e:\Program\Docusaurus\jegavn\jegavn-docusaurus\src\css\custom.css */

/* Adjust spacing below the hero section */
.hero--primary {
  margin-bottom: 5rem; /* Increased margin below hero section */
}

/* Adjust spacing below card containers */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem; /* Increased spacing below each card section */
}

/* ...existing code... */