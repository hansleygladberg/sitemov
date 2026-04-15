(function () {
  var WA_PATTERN = /(?:wa\.me|api\.whatsapp\.com|whatsapp)/i;

  function isWhatsAppLink(href) {
    return !!href && WA_PATTERN.test(href);
  }

  function safeOpen(href, newTab) {
    if (newTab) {
      window.open(href, '_blank', 'noopener');
      return;
    }
    window.location.href = href;
  }

  document.addEventListener(
    'click',
    function (event) {
      var element = event.target.closest('a[href]');
      if (!element) {
        return;
      }

      var rawHref = element.getAttribute('href') || '';
      if (!isWhatsAppLink(rawHref)) {
        return;
      }

      var destination = element.href;
      var shouldOpenNewTab =
        element.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1;

      if (typeof closeMob === 'function') {
        closeMob();
      }

      if (typeof gtag !== 'function') {
        safeOpen(destination, shouldOpenNewTab);
        return;
      }

      event.preventDefault();

      var opened = false;
      function openDestination() {
        if (opened) {
          return;
        }
        opened = true;
        safeOpen(destination, shouldOpenNewTab);
      }

      gtag('event', 'whatsapp_click', {
        event_category: 'contato',
        event_label: 'botao_whatsapp',
        event_callback: openDestination
      });

      console.log('whatsapp_click event fired');
      setTimeout(openDestination, 1000);
    },
    true
  );
})();
