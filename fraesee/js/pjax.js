(function () {
  const CONTENT_SELECTOR = '#page-content';

  function extractPage(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const content = doc.querySelector(CONTENT_SELECTOR);
    const title = doc.querySelector('title');
    return {
      content: content ? content.innerHTML : null,
      title: title ? title.textContent : document.title,
      bodyClass: doc.body ? doc.body.className : ''
    };
  }

  function runScripts(container) {
    container.querySelectorAll('script').forEach(oldScript => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

  function updateNav(url) {
    const current = new URL(url, window.location.origin).pathname;
    document.querySelectorAll('nav.navbotum a').forEach(link => {
      const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname;
      const label = link.getAttribute('data-label') || link.textContent;
      const isActive = linkPath === current;
      link.textContent = isActive ? label + " (you're here!!)" : label;
      link.classList.toggle('active', isActive);
    });
  }

  function loadPage(url, addToHistory) {
    const target = document.querySelector(CONTENT_SELECTOR);
    if (!target) return;

    target.classList.add('fading');

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Bad response: ' + res.status);
        return res.text();
      })
      .then(html => {
        const { content, title, bodyClass } = extractPage(html);

        if (content === null) {
          window.location.href = url;
          return;
        }

        target.innerHTML = content;
        document.title = title;
        document.body.className = bodyClass;
        runScripts(target);
        target.classList.remove('fading');
        window.scrollTo(0, 0);

        if (addToHistory) {
          history.pushState({ pjax: true }, title, url);
        }

        updateNav(url);
        document.dispatchEvent(new CustomEvent('pjax:loaded', { detail: { url } }));
      })
      .catch(err => {
        console.error('Pjax navigation failed, doing a full reload instead:', err);
        window.location.href = url;
      });
  }

  function isPjaxable(link) {
    if (!link) return false;
    if (link.origin !== window.location.origin) return false;
    if (link.hasAttribute('download')) return false;
    if (link.target && link.target !== '') return false;
    if (link.hasAttribute('data-no-pjax')) return false;
    const href = link.getAttribute('href') || '';
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    return true;
  }

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!isPjaxable(link)) return;

    const url = link.getAttribute('href');
    if (new URL(url, window.location.origin).pathname === window.location.pathname) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    loadPage(url, true);
  });

  window.addEventListener('popstate', function () {
    loadPage(window.location.pathname, false);
  });
  updateNav(window.location.pathname);
})();
