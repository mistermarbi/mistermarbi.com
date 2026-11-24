/* mistermarbi.com — expandable "Online tools" card */
(function () {
  var cards = document.querySelectorAll('.card-expand');
  cards.forEach(function (card) {
    var toggle = card.querySelector('.card-toggle');
    var drawer = card.querySelector('.drawer');
    if (!toggle || !drawer) return;

    function set(open) {
      card.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        drawer.removeAttribute('inert');
      } else {
        drawer.setAttribute('inert', '');
      }
    }

    set(false);

    toggle.addEventListener('click', function () {
      set(!card.classList.contains('open'));
    });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && card.classList.contains('open')) {
        set(false);
        toggle.focus();
      }
    });
  });
})();
