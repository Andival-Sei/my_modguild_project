import { toggleSpoiler } from './toggleSpoiler.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fomod__toggle').forEach(button => {
    button.addEventListener('click', () => {
      const contentId = button.getAttribute('data-target');
      toggleSpoiler(contentId);
    });
  });
});