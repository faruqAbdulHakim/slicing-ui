const title = document.getElementById('title');
const advice = document.getElementById('advice');
const button = document.getElementById('button');
const icon = document.getElementById('icon');
const content = document.querySelector('.content');

let isGenerating = false;

const getCurrentMaxHeight = () => {
  const titleHeight = title.getBoundingClientRect().height;
  const adviceHeight = advice.getBoundingClientRect().height;
  const space =
    advice.getBoundingClientRect().top - title.getBoundingClientRect().bottom;
  return titleHeight + space + adviceHeight;
};

const hide = () => {
  icon.style.transform = 'rotate(135deg)';
  content.style.maxHeight = `0px`;
};

const show = () => {
  icon.style.transform = 'rotate(0deg)';
  content.style.maxHeight = `${getCurrentMaxHeight()}px`;
};

const update = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  if (!response.ok) return;
  const body = await response.json();
  title.innerText = `Advice #${body.slip.id}`;
  advice.innerText = `${body.slip.advice}`;
};

content.style.maxHeight = `${getCurrentMaxHeight()}px`;
button.addEventListener('click', async () => {
  if (isGenerating) return;
  isGenerating = true;
  hide();
  await update();
  show();
  isGenerating = false;
});
