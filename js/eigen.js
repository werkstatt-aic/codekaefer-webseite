/* Eigene Downloads nicht mitzählen: Nur in Browsern, in denen das auf zaehler.html eingeschaltet ist,
   zeigen die Download-Knöpfe auf ungezählte Kopien derselben Dateien – Materialien direkt von
   codekaefer.de, Programme direkt aus der Update-Ablage. Liest nur diese eine Einstellung im Browser,
   sendet nichts. */
(function () {
  'use strict';
  var an = false;
  try { an = localStorage.getItem('codekaefer-eigen') === '1'; } catch (e) { an = false; }
  if (!an) return;
  var REL = 'https://github.com/werkstatt-aic/codekaefer-webseite/releases/latest/download/';
  var PAKETE = 'https://raw.githubusercontent.com/werkstatt-aic/codekaefer/main/update/';
  var links = document.querySelectorAll('a[href^="' + REL + '"]');
  for (var i = 0; i < links.length; i++) {
    var datei = links[i].getAttribute('href').slice(REL.length);
    links[i].setAttribute('href', /\.zip$/i.test(datei) ? PAKETE + datei : 'material/' + datei);
  }
})();
