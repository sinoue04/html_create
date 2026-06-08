const buttonGroups = document.querySelectorAll('.button-grid, .button-column');

buttonGroups.forEach((group) => {
  group.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;

    const isSingleSelect = group.classList.contains('button-column');

    if (isSingleSelect) {
      group.querySelectorAll('.choice-button').forEach((button) => {
        button.classList.remove('active');
      });
      target.classList.add('active');
      return;
    }

    target.classList.toggle('active');
  });
});
