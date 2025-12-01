document.addEventListener("DOMContentLoaded", function () {
  // Create snow container
  const snowContainer = document.createElement('div');
  snowContainer.className = 'snow-container';
  document.body.appendChild(snowContainer);

  // Create Christmas Tree
  const treeContainer = document.createElement('div');
  treeContainer.className = 'christmas-tree';
  treeContainer.innerHTML = `
    <div class="tree-top"></div>
    <div class="tree-middle"></div>
    <div class="tree-bottom"></div>
    <div class="tree-trunk"></div>
  `;
  document.body.insertBefore(treeContainer, document.querySelector('.footer'));

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
    snowflake.style.opacity = Math.random() * 0.5 + 0.3;
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 8000);
  }

  setInterval(createSnowflake, 200);
});
