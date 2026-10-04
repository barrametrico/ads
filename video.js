(function () {
  function initVideoAd() {
    if (typeof videojs === "undefined") {
      console.warn("[ads] video.js não carregado");
      return;
    }
    const player = videojs("my-video");
    player.ima({
      adTagUrl: "https://youradexchange.com/video/select.php?r=12256350"
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVideoAd);
  } else {
    initVideoAd();
  }
})();