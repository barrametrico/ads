(function () {
  if (window.aclib) return; // evita duplicar

  const s = document.createElement('script');
  s.id  = "aclib";
  s.type = "text/javascript";
  s.src = "//acscdn.com/script/aclib.js";
  s.async = true;

  // Marca quando a aclib estiver pronta
  s.onload = function () {
    window.dispatchEvent(new Event("aclib:ready"));
  };

  document.head.appendChild(s);
})();