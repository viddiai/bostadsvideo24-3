# Åtgärdsplan — SEO och AI-synlighet

**Underlag:** rapport 1–5 i `seo/`, all data hämtad 2026-07-31.
**Plan skriven:** 2026-08-01. **Kodbas:** statisk enkelsida på Vercel, serverad från repo-roten.

---

## Utgångsläget i en mening

Sajten är tekniskt felfri (on-page 100/100, TTFB 137 ms, CLS 0) och fullständigt osynlig: noll rankande sökord, noll refererande domäner, ingen robots.txt, ingen sitemap, ingen strukturerad data, en enda sida — och noll omnämnanden i 24 AI-körningar där 73 andra leverantörer namngavs.

**Det här är inte en trafikplan.** Rapport 1 mätte hela nischen till 140 sökningar/mån med ett tak på ~38 besök/mån vid förstaplats på allt. Organisk sök blir aldrig tillväxtkanalen. Planen finns för tre andra skäl:

1. **Hygien.** Sajten rankar inte ens på "bostadsvideo24". En prospekt som fått ett outbound-mejl och googlar namnet hittar Trustpilot-sidan för ett annat bolag.
2. **AI-citerbarhet.** Fem av 24 AI-svar namngav ingen leverantör alls — dörren står bokstavligen öppen. På frågan "vem levererar mäklarvideo inom 24 timmar" gissade Perplexity på två fotobolag som "sannolikt" klarar video. Det är er positionering, besatt av en gissning.
3. **Outbound-stöd.** Katalogprofiler, strukturerad data och citerbara sidor gör att en kontorschef som kollar upp er efter ett mejl möter något som ser etablerat ut.

---

## Status 2026-08-01

**Genomfört i kod:**

| | Åtgärd |
|---|---|
| ✅ | Utgången kampanjtext borttagen på båda ställena — månadsnamnet är borta permanent |
| ✅ | `robots.txt` i roten, med elva AI-crawlers explicit tillåtna |
| ✅ | `sitemap.xml` i roten |
| ✅ | `llms.txt` i roten |
| ✅ | Canonical-tagg |
| ✅ | JSON-LD `@graph`: Organization, WebSite, WebPage, Service med tre prissatta Offers, FAQPage |
| ✅ | Synlig FAQ-sektion — speglar JSON-LD ordagrant (verifierat maskinellt) |
| ✅ | `og:image` + Twitter-taggar; og-bild producerad i sajtens formspråk |
| ✅ | Title, meta description, H1 och ingress — "bostadsfilm" och "mäklarvideo" inlagda |
| ✅ | Bilder till WebP via `<picture>`: **1 004 KB → 307 KB, −70 %** |

**Kompletterat med uppgifter från Stefan 2026-08-01:**

| | Åtgärd |
|---|---|
| ✅ | `LocalBusiness` med adress Metodvägen 2 B, Mölnlycke + öppettider mån–fre 08–17 |
| ✅ | Moderbolag rättat till **Peak Automation AB**, org.nr 559555-6936 (jag hade gissat Peak Marketing AB) |
| ✅ | E-post och telefon i schema, i `#boka` och i sidfoten — JS-fri kontaktväg live |
| ✅ | `VideoObject` × 2 med självhostade thumbnails, längd och uppladdningsdatum |
| ✅ | FAQ utökad till sju frågor med skarpa svar — inklusive de tre som saknades |
| ✅ | Processteg 2 rättat från "Vi filmar och redigerar" till "Vi producerar och redigerar" |

**Kvar att lösa:**

| | Åtgärd | Blockerat på |
|---|---|---|
| ⏸ | `sameAs` till LinkedIn | Ingen företagssida ännu — rapport 1 pekade ut den som en av de tre första inlänkarna |
| ⏸ | Search Console-verifiering + inskickad sitemap | Kräver domänåtkomst |
| ⏸ | Google Business Profile | Adressen i Mölnlycke ligger nu i schemat — underlaget är på plats |

**Avgjort och genomfört senare samma dag:**

| | Åtgärd |
|---|---|
| ✅ | **Fullpris genomgående.** Schema, FAQ och `llms.txt` anger 7 900 / 14 900 / 29 900 kr/mån. Priskorten märkta "3 950 kr/första mån · Därefter 7 900 kr/mån" — prismotsägelsen borta |
| ✅ | **Boneo borttaget** på tre ställen (processteg 3, Flaggskepp-punkt, CTA-chip). De erbjuder inte video |
| ✅ | **Siffermuren utbytt mot Hemnets verifierade data**, med länk och mätperiod utskriven |
| ✅ | Tre osourcade tal i priskortens punktlistor strippade på precision (81 %, +139 %, 2–4×, ~20 %, ~35–40 %) |

**Byggt 2026-08-02 — `/maklarfotograf`:**

| | Åtgärd |
|---|---|
| ✅ | Ny sida `maklarfotograf.html` — 1 532 ord brödtext |
| ✅ | `vercel.json` med `cleanUrls` så URL:en blir `/maklarfotograf` utan filändelse |
| ✅ | JSON-LD: WebPage, BreadcrumbList, Service och FAQPage med sex frågor — speglar synlig text ordagrant |
| ✅ | Intern länkning åt båda håll — `internal_links_count` går från 1 till flera |
| ✅ | Inlagd i `sitemap.xml` och `llms.txt` |

Se avsnittet *"Sidan `/maklarfotograf`"* längre ned för vinkeln och varför den bör hålla.

---

## Om siffrorna: vad utbytet faktiskt gällde

Uppgiften var "källhänvisning: Hemnet". Artikeln *"Alla vinner med video i bostadsannonsen"* (19 dec 2024) hämtades och lästes. Den bär inte sidans siffror:

| Hemnet säger | Sidan sa |
|---|---|
| Annonsen sparas **31 %** oftare | +403 % fler förfrågningar |
| Visningstiden sparas **44 %** oftare | 73 % väljer mäklare med video |
| Annonsen delas **76 %** oftare | 1 200 % fler delningar |

Att skriva "Källa: Hemnet" under +403 % hade varit en falsk hänvisning — sämre än ingen alls. Siffran spårar i varje sekundärkälla till "NAR" men ingen länkar ett primärdokument; samma sak med 1 200 %. Det är återcirkulerade branschsiffror.

Sidan bär nu Hemnets tal i stället. Det är en uppgradering, inte en eftergift:

- **Primärdata** från plattformen, inte en siffra citerad vidare i tio led.
- **Svensk**, om svenska annonser, med mätperiod (juni–november 2024) utskriven.
- **Om exakt den kanal ni säljer till.** Ni säljer video för Hemnet-annonser; nu står Hemnets egen mätning av vad video gör för en Hemnet-annons på sidan.
- **Citerbar.** Rapport 5 visade att fem av 24 AI-svar vägrade namnge någon leverantör med hänvisning till att de inte kunde verifiera något. En daterad, länkad primärkälla ger en motor det den saknade.

Hemnet skriver dessutom i samma artikel att *"idag är det ganska få mäklare som regelbundet jobbar med video i annonserna"* — ett argument från plattformen själv som säljtexten kan använda.

---

## Vad uppgifterna avslöjade — tre fynd som ändrar planen

### A. Tjänsten innehåller ingen filmning

Stefan, 2026-08-01: *"Nej. Vi använder mäklarens professionella bilder."*

Videon **byggs av mäklarens befintliga stillbilder**. Ingen kamera åker till objektet. Det förklarar också varför commit `634d333` bytte "filmat" mot "producerat" i hero-etiketten — men processteg 2 stod kvar med "Vi filmar och redigerar" ända tills nu.

**Det här är inte ett problem, det är den starkaste säljpunkten på sidan — och den stod ingenstans.** Den förklarar båda löftena på en gång:

- *Varför 24 timmar är möjligt:* ingen ska boka in en filmning, resa dit, eller vänta på väder.
- *Varför hela Sverige täcks:* leveransen är inte geografiskt bunden.
- *Varför priset kan vara fast per månad:* ingen restid att prissätta.

Formuleringen ligger nu i FAQ, `Service`-beskrivningen och `llms.txt`. Den bör få mer plats i den synliga säljtexten också — det är en mening en AI-motor kan citera som svar på "hur kan någon leverera bostadsvideo på 24 timmar?", vilket är exakt frågan ChatGPT vägrade svara på i rapport 5.

### B. Fotosökorden i rapport 2 bygger på ett omfång som inte stämmer

Rapport 2 utgick från tjänsteomfånget **"Video + stillbilder"**. Stillbilder ingår inte — kunden levererar dem. Därmed vilar följande på fel premiss:

| Kluster i rapport 2 | Volym | Problem |
|---|---|---|
| `/maklarfotograf` — **byggprioritet 1** | 90/mån | Ni är inte mäklarfotograf. Att ranka där är att bygga en tratt mot en tjänst ni inte säljer. |
| `/maklarfotograf-stockholm`, `-goteborg` | 50/mån | Samma sak, lokalt. |
| `/vad-kostar-bostadsfotografering` | 20/mån | Prisfrågan gäller foto, inte video. |
| `/guide/maklarbilder` | 110/mån | Guide om att fotografera — inte er produkt. |

Det är exakt fällan rapport 3 varnade för i e-styling-beslutet: *"Skriver ni sidan utan att kunna leverera bygger ni en tratt mot en tjänst som inte finns."*

Kvar som obestridligt era: `/bostadsfilm`, `/bostadsvideo-24-timmar`, `/infor-fotografering`. Tillsammans en mycket mindre volym — men rapport 1 slog redan fast att taket för hela nischen är ~38 besök/mån, så det som går förlorat är litet i absoluta tal.

**Medelvägen valdes 2026-08-02.** Se nästa avsnitt.

---

## Sidan `/maklarfotograf`

Beslutet blev att tävla om ordet — men från den ärliga sidan av det. Sidan säger aldrig att Bostadsvideo24 fotograferar. Hela vinkeln är att kunden **behåller sin fotograf** och att ni kommer efter i kedjan.

### Varför det är starkare än rapport 2:s ursprungliga brief

Rapport 2 skrev: *"Vad som gör att ni slår dem: de säljer bröllop, barnfoto och företagsporträtt och har mäklarfoto som en rad i menyn. Ni gör bara bostad. Säg det på sidan."* Den briefen förutsatte att ni fotograferar. Ni gör inte det — så differentieringen blir en annan, och bättre:

Topp 10 består av fotografer som alla säljer samma sak. Er sida är den enda som inte konkurrerar med dem. Det gör två saker: en kontorschef som redan har en fotograf och inte tänker byta känner igen sin egen situation i rubriken, och sidan blir inget hot mot den relation hen redan har. Det är en position ingen annan på resultatsidan kan ta, eftersom alla andra vill ha fotouppdraget.

### Vad sidan gör som topp 10 inte gör

| Grepp | Underlag |
|---|---|
| **1 532 ord** | Rapport 3: SERP-ettan har 672 ord, trean 1 201. Täckning rankar, inte längd i sig — men 672 ord täcker inte pris, garanti, leveranstid och invändningar. |
| **Öppen prislista** | Rapport 2: `bofoto.se/priser.php` tar plats 8 nationellt på ingenting annat än en prislista. Ingen på förstasidan anger pris. |
| **Fyra invändningar besvarade** | Rapport 3: HF Agency äger frågan "Är det inte vilseledande?" på sin e-stylingsida. Den som besvarar invändningen äger den. |
| **Hemnets data med källa** | Ingen konkurrent på ordet citerar plattformen mäklaren faktiskt publicerar i. |
| **Sidhastighet** | Rapport 3: HF Agencys sida ligger på Wix, väger 672 KB och blir interaktiv efter 3 205 ms. Er sida gör det på 354 ms. Det är en rankingfaktor de inte kan fixa utan att byta plattform. |
| **Egen tjänste-URL** | Rapport 5: motorerna citerade aldrig en startsida när en djupare tjänstesida fanns. |

### Vad som saknas på sidan

**~~Tekniska krav på bildunderlaget~~ — TILLAGT 2026-08-02.** FAQ-frågan "Vilken kvalitet måste bilderna hålla?" finns nu på både startsidan och : originalfiler i stället för Hemnet-nedladdningar, riktmärke 2 400 px, 8–15 bilder per objekt, tre typer som inte fungerar, och löfte om granskning samma dag.

**Referenser.** Sidan har inga kundcitat. Startsidans "wall of love" är fortfarande platshållare. Ett enda citat från ett kontor som behållit sin fotograf och lagt till film vore det starkaste beviset på hela sidan.

### C. Ni sitter i Göteborgsregionen — det vänder ortsprioriteringen

Adressen är Mölnlycke, Härryda kommun. Rapport 2 rekommenderade *"Ta Stockholm först"* med motiveringen att "mäklarfotograf göteborg" har konkurrensindex 86 mot Stockholms 18.

Den rekommendationen kände inte till var ni sitter. En lokal adress är vad Google Business Profile och `LocalBusiness` bygger på, och det är i Göteborg ni kan visa upp en fysisk närvaro. Konkurrensindex mäter dessutom **annonsbudgivning**, inte organisk svårighet — det säger att någon budar hårt på Google Ads i Göteborg, inte att den organiska SERP:en är svår.

Bygg Göteborg först om ortssidor byggs alls (se fynd B).

---

## Korrigeringar mot rapporterna

Tre saker i rapporterna stämmer inte mot den faktiska kodbasen. Följ planen, inte rapporten, på dessa punkter.

| Rapport | Påstående | Verkligheten i koden |
|---|---|---|
| 4, åtgärd 01 | Lägg `public/robots.txt` och `public/sitemap.xml` | Ingen `vercel.json`, inget ramverk — Vercel serverar från repo-roten. En `public/`-mapp skulle ge 404. **Filerna ska i roten.** |
| 4, åtgärd 07 | Motstridiga uppgifter om canonical, graderat "låg" | Rå markup har noll `rel="canonical"`. DataForSEO:s `checks.canonical: true` betyder "ingen *motstridig* canonical". **Taggen saknas — punkt.** |
| 4, åtgärd 06 | "Sidan har redan sex H3-rubriker i frågeform — FAQPage utan att skriva om en rad" | De sex H3:orna är tre processteg och tre paketnamn. **FAQ-innehåll måste skrivas från noll.** Det är 2 timmar, inte 0. |

---

## Steg 0 — Akut, idag (~35 min)

### 0.1 Utgången kampanj ligger live just nu
**Fil:** `index.html` rad 29 och 191.
Byt `Introduktionspris hela juli — 50 % rabatt på första månaden`
mot `Introduktionspris — 50 % rabatt på första månaden`.

Att ta bort månadsnamnet är den varaktiga lösningen — annars återkommer problemet den 1:a varje månad. **10 min.**

### 0.2 robots.txt i repo-roten
Ny fil `robots.txt`. Utöver standardraderna ska AI-crawlarna namnges uttryckligen. Ingen robots.txt = tillåtet som default, men en explicit rad skyddar mot att någon senare lägger in en bred `Disallow` och råkar stänga ute GPTBot.

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://www.bostadsvideo24.se/sitemap.xml
```

**5 min.**

### 0.3 sitemap.xml i repo-roten
Ny fil med enbart de URL:er som faktiskt existerar — startsidan idag, växer med varje ny sida i steg 3. **5 min.**

### 0.4 Canonical
`<link rel="canonical" href="https://www.bostadsvideo24.se/">` i `<head>`.
Måste göras **före** första annonskampanjen, annars indexeras varje `?utm_source=`-variant separat. **2 min.**

### 0.5 Search Console
Verifiera domänen, skicka in sitemapen, begär indexering av startsidan.
Detta är den enskilda åtgärd som ändrar sajtens tillstånd i grunden: svaret på "kan Google hitta sajten?" går från nej till ja. **15 min.**

> **Förväntan:** indexering och rankning på det egna varumärkesnamnet inom 1–3 veckor. Inte trafik. Se rapport 1.

---

## Steg 1 — Maskinläsbar identitet (denna vecka, ~4 h)

Det här steget är det som gör mest för AI-synligheten, och det är samma arbete som ger Google något att bygga en Knowledge Graph-panel av. Både `bostadsfoto.se` och `bostadsfilm.se` har en sådan panel idag; ni har ingenting att bygga en av.

### 1.1 JSON-LD i `<head>` — ett `@graph`-block
Sex entiteter i ett block:

| Typ | Varför |
|---|---|
| `Organization` | Namn, logotyp, org.nr, e-post, telefon, `parentOrganization: Peak Marketing AB`, `sameAs` till LinkedIn. Utan detta vet ingen maskin vad företaget heter och gör. |
| `WebSite` | Kopplar sajten till organisationen, `inLanguage: sv-SE`. |
| `Service` | `serviceType: "Bostadsvideo för mäklarkontor"`, `areaServed: Sverige`. |
| `OfferCatalog` med tre `Offer` | **Priserna står redan i klartext på sidan** — 3 950 / 7 450 / 14 950 kr/mån. Det är en tillgång konkurrenterna inte har; ingen av de nio sidorna på e-styling-SERP:en anger pris. Märk upp dem så att de kan citeras. |
| `FAQPage` | Se 1.2. |
| `VideoObject` × 3 | Tre Bunny Stream-embeds saknar all uppmärkning. Kräver thumbnail-URL, `uploadDate`, `duration` från Bunny. |

**Blockerat på:** org.nr, e-post, telefon, ev. besöksadress, LinkedIn-URL. Utan besöksadress blir det `Organization`, inte `LocalBusiness` — och då ingen Knowledge Graph-panel med adress som konkurrenterna har.

**60 min** när uppgifterna finns.

### 1.2 FAQ-sektion med verkligt innehåll (inte bara markup)
Åtta frågor, formulerade som en kontorschef ställer dem — och medvetet matchade mot de frågor AI-motorerna faktiskt fick i rapport 5:

1. Vad kostar bostadsvideo för ett mäklarkontor?
2. Hur snabbt levereras videon, och hur räknas de 24 timmarna? ← *ChatGPT vägrade svara på exakt denna fråga*
3. Vad händer om leveransen spricker?
4. Vilka format ingår? (16:9, 9:16, mäklarprofil)
5. Måste mäklaren filma själv?
6. Var kan videon användas? (Hemnet, Boneo, hemsida, IG/TikTok/FB)
7. Vilka orter täcker ni?
8. Ingår stillbilder i leveransen? ← *gör ordet "fastighetsfotograf" ärligt att ranka på, per rapport 1*

Skriv dem som **fristående, citerbara påståenden**. En LLM lyfter ut en mening — den meningen måste bära hela svaret utan omgivande kontext. "Leveransen sker inom 24 timmar räknat från avslutad filmning, helgfria vardagar" fungerar. "Vi är snabba" gör det inte.

**2 h** — merparten är skrivarbete.

### 1.3 JS-fri kontaktväg
Idag: noll `<form>`, noll `<button>`, noll `mailto:`, noll `tel:`. Alla sex knappar är `<a href="#boka">` med `data-cal-link` som kräver att `app.cal.com/embed/embed.js` laddas.

Två skäl att fixa:
- **Konvertering:** blockeras skriptet av en företagsbrandvägg scrollar alla sex knappar till en sektion utan bokningsmöjlighet. Målgruppen är mäklarkontor — företagsnät blockerar tredjepartsskript oftare än privatnät.
- **AI-citerbarhet:** en LLM som läser sidan kör ingen JavaScript. Frågan "hur kontaktar man Bostadsvideo24?" har idag inget svar i markupen alls.

Lägg synlig `mailto:` och `tel:` i `#boka` och i sidfoten. Behåll cal.com som primärval. **30 min.**

### 1.4 og:image och Twitter-taggar
Sidan har `og:title`, `og:description`, `og:type`, `og:locale` — men ingen bild. Varje delad länk renderas som ett naket textkort. Rapport 1 landade i att outbound är kanalen, vilket betyder att länken delas i LinkedIn-meddelanden, mejl och Slack. För ett bolag som säljer visuell produktion är det den dyraste möjliga första kontakten.

1200×630-bild + `og:image`, `og:image:width`, `og:image:height`, `og:url`, `twitter:card=summary_large_image`. **20 min** om bilden finns, **1 h** om den ska produceras.

### 1.5 Title, meta description och H1
| Element | Idag | Föreslaget | Skäl |
|---|---|---|---|
| `<title>` | "Bostadsvideo24 — Proffsig bostadsvideo levererad inom 24 timmar" (63 tkn) | "Bostadsfilm & mäklarvideo inom 24 timmar \| Bostadsvideo24" (57 tkn) | "bostadsvideo" har **ingen mätbar sökvolym alls**. "bostadsfilm" och "mäklarvideo" har 10/mån vardera — små tal, men de enda som inte är noll. |
| `meta description` | 229 tecken | ≤155 tecken | Klipps i SERP idag. |
| `<h1>` | "Sälj bostäder snabbare med proffsig video — levererad inom 24 timmar." | "Sälj bostäder snabbare med proffsig **bostadsfilm** — levererad inom 24 timmar." | Ett ords ändring. Behåller nyttoformuleringen, tar in det sökta ordet. |
| `hero-lead` | — | Väv in "mäklarvideo" i första meningen | Andra mätbara ordet. |

**20 min.**

### 1.6 Källhänvisningar på siffrorna
Sidan påstår "+403 % fler förfrågningar", "73 % av bostadsägare", "1 200 % fler delningar" — utan en enda källa. En LLM som väger om ett påstående ska citeras tittar efter attribution. Sätt ut källa och år vid varje siffra.

Detta höjer också trovärdigheten hos den mänskliga läsaren, och skyddar mot att en siffra visar sig vara ospårbar när en kontorschef frågar var den kommer ifrån. **45 min.**

### 1.7 llms.txt
`/llms.txt` i roten — en kort markdown-fil som beskriver vad företaget gör, vad som ingår, priser och kontaktväg. Framväxande standard, ingen garanterad effekt, men kostar 15 minuter och är exakt det format en LLM vill ha.

---

## Steg 2 — Sidvikt (denna vecka, ~45 min)

Sidan väger 992 KB. HTML + CSS + typsnitt = 108 KB. **Två JPEG-filer = 884 KB, alltså 89 %.**

| Fil | Idag | Åtgärd |
|---|---|---|
| `assets/img/maklarprofil-exempel.jpg` | 474 442 B, 1920×1080 | WebP q80, max 1600 px bredd |
| `assets/img/stillbilder-underlag.jpg` | 430 892 B, 3048×400 | WebP q80, max 2000 px bredd |

Servera via `<picture>` med JPEG som reserv. `fetchpriority="high"` på bild ett (hero), behåll `loading="lazy"` på bild två.

**Verktyg:** `cwebp` saknas på maskinen, och `sips` klarar inte WebP-export här (testat). **Pillow 12.1.1 med WebP-stöd finns** — konverteringen görs med ett litet Python-skript, inga nya beroenden.

**Mät:** kör PageSpeed Insights före och efter. LCP gick aldrig att mäta i rapport 4 (`instant_pages` returnerade 0, Lighthouse-anropet fallerade tre gånger), så ingen förbättringssiffra är prognostiserad. Mät själva.

---

## Steg 3 — Innehållsarkitektur (vecka 2–6)

Idag: `internal_links_count: 1`. En sida, ett internt länkmål.

Rapport 5 hittade ett entydigt mönster: **AI-motorerna citerade aldrig en startsida när en djupare tjänstesida fanns.** De hämtade `hfagency.se/film`, `husfoto.se/video`, `se360.se/filmproduktion/bostadsfilm/`, `fotografstockholm.se/maklarfotograf/`. En AI som ska svara på "vem gör bostadsvideo" citerar en sida som *handlar om* bostadsvideo — inte en sida om ett företag som bland annat gör bostadsvideo.

Samma uppdelning står som prioritet i rapport 2 av rena SEO-skäl. Den betalar sig i båda kanalerna.

| # | URL | Volym/mån | Varför i denna ordning |
|---|---|---|---|
| 1 | `/maklarfotograf` | 90 | **Enda bekräftat svaga SERP:en med rätt köpare.** Fem av nio träffar är generella ortsfotografer med en tunn undersida — en fotograf i Umeå och en i Gävle rankar nationellt. Högst CPC inom omfånget (6,09 kr). Ortssidorna behöver den som moderssida. |
| 2 | `/bostadsvideo-24-timmar` | — | **AI-sidan.** ChatGPT vägrade svara på 24-timmarsfrågan; Perplexity fyllde tomrummet med två fotobolag och gissningen att de "sannolikt" klarar snabb video. H1 ≈ "Mäklarvideo levererad inom 24 timmar". Skriv den som **svar på en fråga, inte som säljtext**: vad som ingår, hur klockan räknas, vad som händer om leveransen spricker. |
| 3 | `/bostadsfilm` | 20 | Er kärntjänst och ert domännamn. SERP:en är öppen — plats 9 hålls av en gratis Carrd-enkelsida, plats 4 av en Shopify-kollektionssida. Billig att skriva. Förvänta er ingen trafik. |
| 4 | `/maklarfotograf-stockholm`, `/maklarfotograf-goteborg` | 50 | Lokal konkurrens svagare än nationell. **Ingen Malmö-sida** — Google Ads returnerade ingen volymdata alls för vare sig "bostadsfotograf malmö" eller "mäklarfotograf malmö". Ta Stockholm först: konkurrensindex 18 mot Göteborgs 86. |
| 5 | `/vad-kostar-bostadsfotografering` | 20 | `bofoto.se/priser.php` tar plats 8 nationellt på **ingenting annat än en prislista**. "Mäklarfotograf pris" återkommer som relaterad sökning på tre av fem hämtade SERP:ar. Sorterar dessutom bort privatpersoner före bokat möte. |
| 6 | `/infor-fotografering` (+ badrum/kök/sovrum) | 240 | Checklista mäklaren skickar vidare till sin säljare — ett säljverktyg, inte en bloggpost. Gör den nedladdningsbar med kontorets logga. **Räkna inte hem trafiken:** SERP:en toppas av en AI Overview som besvarar frågan fullständigt med sju källor. Att bli citerad där är värdet. Egen vinkel ingen annan har: *styling inför film* — sladdar syns i panorering, dörrar måste stå öppna, ljus måste vara jämnt genom hela rummet. |
| 7 | `/guide/maklarbilder` | 110 | **Störst volym, byggs sist.** SERP:en är tio år gammal och lätt att slå, men läsaren är en privatperson som ska sälja sin lägenhet eller en hobbyfotograf. 110 sökningar av fel personer är fortfarande fel personer. Länkmagnet, inte leadkälla. |

**E-styling utgår.** Beslut 2026-08-01: Bostadsvideo24 säljer inte e-styling. `/e-styling` och `/e-styling-pris` stryks därmed ur planen. Kvar från rapport 3 blir `/infor-fotografering` (nr 6 ovan) — som ändå bär rapportens egna vinkel *styling inför film*, ett ämne ingen konkurrent täcker och som bara ni har anledning att skriva om.

Varje ny sida: egen `Service`-markup, ömsesidig intern länkning, in i sitemapen.

---

## Steg 4 — Utanför kodbasen (parallellt, ~1 dag)

Det här steget avgör AI-synligheten mer än något i koden. Katalogsidor citerades i **fyra av de 19 källförsedda AI-svaren**. Det är den snabbaste vägen in i motorernas källmaterial, eftersom katalogerna redan är indexerade och redan citeras — er sajt är ingetdera.

**Detta är också den enda delen av planen som inte kräver att sajten först blir indexerad.**

- [ ] Google Business Profile
- [ ] `fotografer.se` — Perplexity hämtade `/stockholm/bostadsfotograf/`
- [ ] `reco.se`
- [ ] `houzz.se` — Gemini hämtade den
- [ ] `ocast.com`
- [ ] `offerta.se`
- [ ] `partna.se`
- [ ] `maklarlabbet.se` — Perplexity hämtade `/fotografering.php`
- [ ] Första inlänkarna: Peak Marketing AB, Leadsmaskinen, LinkedIn-företagssida

I varje profil, skriv uttryckligen **"bostadsvideo för mäklarkontor"** och **"leverans inom 24 timmar"**. Det är de fraser som ska kunna citeras tillbaka.

**Städa också bevakningslistan:** stryk de 15 norska domänerna. Samtliga returnerade 0 rader mot svenska Google — de rankar på "boligfotograf", inte "bostadsfotograf", och kan aldrig ta en position ifrån er i Sverige. Behåll HF Agency (två domäner, ett bolag), SE360, Diakrit och bostadsfoto.se.

**Bevaka dessutom de AI-synliga konkurrenter som inte syns i Google:** GM Shots (6 svar), Exposia (5), Fotograf Patrik Lindqvist (3), MotionMyProperty, Din:Kon, Drönarfoto Stockholm, Daniel Alloh, STHLM Bostadsfoto, Bostadsfotograferna, Hellström Photography, EJ:s Fotografi. GM Shots citeras oftare än SE360 och Diakrit — era huvudkonkurrenter i sökresultaten.

---

## Beslut som blockerar

**1. ~~Säljer ni e-styling?~~ — AVGJORT 2026-08-01: nej.** Klustret utgår ur planen.

**2. ~~Företagsuppgifter~~ — AVGJORT.** Peak Automation AB, org.nr 559555-6936, Metodvägen 2 B Mölnlycke, info@bostadsvideo24.se, 076-028 87 32. Allt inlagt i schema, sidfot och `#boka`.

**3. ~~Bunny Stream-metadata~~ — AVGJORT.** Två filmer (PT15S och PT10S), uppladdade 2026-07-07. Thumbnails självhostade eftersom Bunny svarar 403 utan referer.

**4. ~~Är 3 950 kr månadspriset eller förstamånadspriset?~~ — AVGJORT: fullpris gäller.** 7 900 / 14 900 / 29 900 kr/mån löpande; 50 % rabatt endast första månaden. Priskorten märkta därefter.

**5. ~~Boneo~~ — AVGJORT: bort.** Boneo erbjuder inte video. Borttaget på tre ställen.

**6. ~~Ska ni tävla om "mäklarfotograf"?~~ — AVGJORT 2026-08-02: ja, med vinkeln "ni har redan en fotograf".** Sidan är byggd. Se nedan.

**Fortfarande öppna:**

**1. Ändras drönarbeslutet?**
Fyra av åtta gap-sökord handlar om drönare, tillsammans 1 110 sökningar/mån — nästan två tredjedelar av hela gapet. Både SE360 och HF Agency har byggt guider om spridningstillstånd. Det är den **enda innehållstyp i branschen där två konkurrenter oberoende av varandra investerat i samma ämne** — den mest bevisade innehållsefterfrågan i hela materialet. Bortvalt i rapport 2. Om beslutet ändras är det den första sidan att skriva.

---

## Vad jag medvetet inte föreslår

- **Ingen Malmö-sida.** Ingen mätbar volym. Bygg den när det finns en lokal referens att visa.
- **Ingen sida på ordet "bostadsfoto"** (110/mån, konkurrensindex 1). Det ser ut som analysens bästa fynd och är en fälla: SERP:en ägs helt av `bostadsfoto.se` med fem sitelinks och en Knowledge Graph-panel. Konkurrensindexet är 1 för att ingen budar på någon annans varumärke. Att bygga där är att betala för att skicka trafik till en konkurrent.
- **Ingen inlining av CSS.** En enda stylesheet på 15 KB; att spara en tur och retur som redan tar 137 ms ligger inom mätbrus.
- **Inga `title`-attribut på bilder.** DataForSEO flaggar `no_image_title`. Attributet har inget SEO-värde. Båda bilderna har beskrivande `alt`.
- **Ingen ändring av cache-control.** `max-age=0` ser fel ut, men `x-vercel-cache: HIT` visar att edge-cachen serverar dokumentet. Rätt uppsättning för HTML som ska kunna uppdateras direkt.
- **Ingen omdirigeringsfix.** Kedjorna är redan korrekta i ett hopp med permanenta koder.

---

## Mätning

| Vad | Hur | När |
|---|---|---|
| LCP | PageSpeed Insights manuellt | Före och efter steg 2 |
| Indexering | Search Console — rankar sajten på "bostadsvideo24"? | 1–3 veckor efter steg 0 |
| AI-synlighet | Kör om rapport 5:s 24 frågor mot samma fyra motorer | 90 dagar efter steg 4 |
| Core Web Vitals | Fältdata i Search Console | När trafik finns |

Rapport 5:s huvudresultat — noll omnämnanden över 24 körningar — är inte ett slumputfall och är därför ett användbart nolläge att mäta mot.

---

## Sammanställd tidsåtgång

| Steg | Innehåll | Tid |
|---|---|---|
| 0 | Akut: kampanjtext, robots, sitemap, canonical, Search Console | 35 min |
| 1 | JSON-LD, FAQ, kontaktväg, og:image, title/H1, källor, llms.txt | ~4 h |
| 2 | Bildoptimering | 45 min |
| 3 | Sju nya sidor | 3–5 veckor skrivarbete |
| 4 | Kataloger, GBP, första inlänkarna | ~1 dag |

Steg 0–2 är kod och kan göras direkt. Steg 3 är skrivarbete. Steg 4 är Stefans, och är det som faktiskt flyttar AI-synligheten.
