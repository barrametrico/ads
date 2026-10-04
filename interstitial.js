(function () {
  function run() {
    if (typeof aclib === "undefined" || !aclib.runInterstitial) {
      console.warn("[ads] aclib não pronta para interstitial");
      return;
    }
    aclib.runInterstitial({
      zoneId: '12256358'
    });
  }

  if (window.aclib) {
    run();
  } else {
    window.addEventListener("aclib:ready", run, { once: true });
  }
})();