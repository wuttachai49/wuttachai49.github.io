// Floating "Back" button for standalone tool pages in /database
(function () {
    var a = document.createElement('a');
    a.textContent = '← Back';
    a.href = '/index.html';
    a.setAttribute('aria-label', 'Go back');
    a.style.cssText = 'position:fixed;top:14px;left:14px;z-index:99999;padding:9px 16px;' +
        'border-radius:999px;background:#2e7d5b;color:#fff;font:600 14px system-ui,sans-serif;' +
        'text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,.25);';
    a.addEventListener('click', function (e) {
        var sameSite = document.referrer && document.referrer.indexOf(location.origin) === 0;
        if (sameSite && history.length > 1) { e.preventDefault(); history.back(); }
    });
    document.body.appendChild(a);
})();
