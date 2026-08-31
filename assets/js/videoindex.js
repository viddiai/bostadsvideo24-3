/* ============================================================
   Bostadsvideo24 — Videoindex-formulär, video-fasader, spårning
   (docs/LP_STRATEGY_KONTOR.md §5–§6)
   ============================================================ */

/* BYT NÄR GHL ÄR KLART: klistra in formulärets webhook-URL här.
   Tom sträng = formuläret faller tillbaka på ett förifyllt mejl
   till info@bostadsvideo24.se — inget lead går förlorat. */
var FORM_ENDPOINT = "";

/* ---------- Spårning (GTM-redo dataLayer, inga externa script) ---------- */
window.dataLayer = window.dataLayer || [];
function track(event, data) {
  var payload = Object.assign({ event: event }, data || {});
  window.dataLayer.push(payload);
}

track("page_view", { page: location.pathname });

/* pris_view — en gång när prissektionen blir synlig (§6: scrolldjup till pris) */
(function () {
  var pris = document.getElementById("priser");
  if (!pris || !("IntersectionObserver" in window)) return;
  var obs = new IntersectionObserver(function (entries) {
    if (entries.some(function (e) { return e.isIntersecting; })) {
      track("pris_view");
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(pris);
})();

/* ---------- Video-fasader: iframen laddas först vid klick ---------- */
/* Ger video_play-eventet och håller sidan fri från iframe-requests före
   interaktion — poster-bilden är LCP-vänlig, Bunny laddas bara vid behov. */
document.querySelectorAll(".video-facade").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var frame = btn.parentElement;
    var src = btn.getAttribute("data-embed");
    if (!frame || !src) return;
    track("video_play", { video: btn.getAttribute("data-video-id") || src });
    var iframe = document.createElement("iframe");
    iframe.src = src + (src.indexOf("?") === -1 ? "?" : "&") + "autoplay=true";
    iframe.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
    iframe.title = btn.getAttribute("aria-label") || "Videospelare";
    frame.appendChild(iframe);
    btn.remove();
  });
});

/* ---------- Videoindex-formuläret ---------- */
(function () {
  var form = document.getElementById("videoindex-form");
  if (!form) return;

  var status = document.getElementById("form-status");
  var started = false;

  form.addEventListener("focusin", function () {
    if (started) return;
    started = true;
    track("form_start");
  });

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (!form.reportValidity()) return;

    var data = {};
    new FormData(form).forEach(function (value, key) { data[key] = value; });

    /* Honeypot: fältet är osynligt för människor — innehåll = bot. */
    if (data.webbplats) return;
    delete data.webbplats;
    data.sida = location.pathname;

    track("form_submit", { roll: data.roll || "" });

    if (FORM_ENDPOINT) {
      var knapp = form.querySelector(".vi-submit");
      if (knapp) { knapp.disabled = true; knapp.textContent = "Skickar …"; }
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        location.href = "/tack";
      }).catch(function () {
        if (knapp) { knapp.disabled = false; knapp.textContent = "Få ert Videoindex — gratis"; }
        visaMejlFallback(data, "Något gick fel när formuläret skickades.");
      });
    } else {
      visaMejlFallback(data, "");
    }
  });

  /* Reservväg utan backend: ett färdigskrivet mejl med samma uppgifter. */
  function visaMejlFallback(data, prefix) {
    if (!status) return;
    var rader = [
      "Kontor och ort: " + (data.kontor || ""),
      "Namn: " + (data.namn || ""),
      "E-post: " + (data.epost || ""),
      "Roll: " + (data.roll || ""),
      "Telefon: " + (data.telefon || "—"),
      "Antal mäklare: " + (data.antal_maklare || "—")
    ];
    var href = "mailto:info@bostadsvideo24.se" +
      "?subject=" + encodeURIComponent("Videoindex — " + (data.kontor || "")) +
      "&body=" + encodeURIComponent("Hej!\n\nVi vill ha vårt Videoindex.\n\n" + rader.join("\n") + "\n");
    status.innerHTML = (prefix ? prefix + " " : "") +
      "Skicka er förfrågan som mejl i stället — allt är redan ifyllt: " +
      '<a href="' + href + '">Öppna mejlet</a> eller ring <a href="tel:+46760288732">076-028 87 32</a>.';
    status.hidden = false;
  }
})();
