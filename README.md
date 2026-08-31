# Bostadsvideo 24.2

Sajt för Bostadsvideo24 — mäklarkontorets videoavdelning. Positionerad mot
kontorsägaren (franchisetagare/kontorschef/VD) enligt `docs/LP_STRATEGY_KONTOR.md`,
som är kravdokumentet: ändra inga siffror på sajten utan att uppdatera dess §9
(sifferregistret), och stäm av mot §10 (framgångskriterierna) före publicering.

Statisk sida utan byggsteg: öppna `index.html` direkt eller servera mappen med
valfri webbserver.

## Struktur

- `index.html` — landningssidan. Primär CTA: *Få ert Videoindex* (formulär längst ned)
- `tack.html` — tacksida efter formuläret (`/tack`, noindex)
- `maklarfotograf.html` — SEO-sida mot sökordet "mäklarfotograf"; CTA pekar mot `/#videoindex`
- `om-oss.html` — om teamet
- `assets/css/style.css` — designsystem + komponenterna för omtaget (flödesmockup, rapport, pristabell, formulär)
- `assets/js/videoindex.js` — formulärhantering, video-fasader (Bunny laddas först vid klick) och dataLayer-spårning
- `assets/fonts/` — Bricolage Grotesque (variabelt typsnitt, lokalt för GDPR och prestanda)
- `assets/img/` — bilder (JPEG för webben, PNG-original)
- `docs/LP_STRATEGY_KONTOR.md` — strategi, färdig copy, sifferregister, CRO-program
- `Bostadsvideo24 Landningssida.html` — rå designexport från Claude Design (historisk källa)

## Integrationer

- **Formulär:** `FORM_ENDPOINT` överst i `assets/js/videoindex.js` är tom tills
  GHL-webhooken finns — då faller formuläret tillbaka på ett förifyllt mejl till
  info@bostadsvideo24.se, så inget lead tappas. Klistra in webhook-URL:en när den är klar.
- **Spårning:** events pushas till `window.dataLayer` (GTM-redo): `page_view`,
  `video_play`, `pris_view`, `form_start`, `form_submit`. Se spec §6.
- **Video:** Bunny Stream, bibliotek 699355. Iframes laddas först vid klick på poster-bilden.
- **Bokning:** Cal.com-länken (`stefan-vikstrom-peakmarketing/strategimote-bostadsvideo24`)
  finns bara kvar på tacksidan som nästa steg efter Videoindex.

## Att göra

- [ ] Koppla `FORM_ENDPOINT` till GHL och testa hela flödet formulär → tack → rapport
- [ ] Producera en riktig anonymiserad exempelrapport när första Videoindexen körts
- [ ] Referenser/kundcitat när de finns (spec §2: sannolikhet är svagaste levern)
- [ ] A/B-test 1 (H1-varianterna ligger som kommentar i `index.html`, se spec §8)
