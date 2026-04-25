/* blog.js — Blog share functionality */

function compartilharPost() {
  var url = window.location.href.split('?')[0].split('#')[0];
  var h1 = document.querySelector('.page-h1') || document.querySelector('h1');
  var title = h1 ? h1.innerText.replace(/\n/g, ' ').trim() : document.title;
  var btn = document.querySelector('.btn-share-ig');

  if (navigator.share) {
    navigator.share({
      title: title,
      text: 'Leia no blog da MOV Produtora: ' + title,
      url: url
    }).catch(function() {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function() {
      if (btn) {
        var orig = btn.innerHTML;
        btn.textContent = '✓ Link copiado!';
        setTimeout(function() { btn.innerHTML = orig; }, 2500);
      }
    }).catch(function() { prompt('Copie o link abaixo:', url); });
  } else {
    prompt('Copie o link abaixo:', url);
  }
}
