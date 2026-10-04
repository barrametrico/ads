(function () {
  function run() {
    if (typeof aclib === "undefined" || !aclib.runInPagePush) {
      console.warn("[ads] aclib não pronta para push");
      return;
    }
    aclib.runInPagePush({
      zoneId: '12256366',
      maxAds: 2
    });
  }

  if (window.aclib) {
    run();
  } else {
    window.addEventListener("aclib:ready", run, { once: true });
  }
})();