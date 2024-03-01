import { getSolutionList } from './data.js';

const createSolutionCardItem = (solution) => {
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <a href="${
    solution.html
  }" target="_self" rel="noreferrer" class="solution-link">
    <div class="img-container">
      ${
        solution.preview
          ? `<img src="${solution.preview}" alt="${solution.name}">`
          : `<p>Preview not available</p>`
      }
    </div>
    <div class="card-content">
      <p x-text="solution.name">${solution.name}</p>
      <div class="tags-container">
        ${
          solution.tags.some((tag) => tag === 'HTML')
            ? '<p class="html-tag">HTML</p>'
            : ''
        }
        ${
          solution.tags.some((tag) => tag === 'CSS')
            ? '<p class="css-tag">CSS</p>'
            : ''
        }
        ${
          solution.tags.some((tag) => tag === 'JS')
            ? '<p class="js-tag">JS</p>'
            : ''
        }
        ${
          solution.tags.some((tag) => tag === 'API')
            ? '<p class="api-tag">API</p>'
            : ''
        }
      </div
    </div>
  </a>
  `;
  return div;
};

const main = document.querySelector('main');
const solutions = getSolutionList();
solutions.reverse().forEach((solution) => {
  const card = createSolutionCardItem(solution);
  main.appendChild(card);
});
