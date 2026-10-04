(function () {
  // 1) Define as opções globais
  window.atOptions = {
    'key'    : '5bb4abac542bf739c3cf785eec89c5b8',
    'format' : 'iframe',
    'height' : 50,
    'width'  : 320,
    'params' : {}
  };

  // 2) Injeta o script da rede
  const s = document.createElement('script');
  s.src = "https://www.highrevenueformat.com/5bb4abac542bf739c3cf785eec89c5b8/invoke.js";
  s.async = true;
  document.body.appendChild(s);
})();