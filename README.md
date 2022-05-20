# Browser Technologies 2122 @CMDA-Minor-Web

In het vak Browser Technologies gaan we onderzoeken wat Progressive Enhancement is en hoe je dit kan toepassen om goede, robuuste, toegankelijke websites te maken. Voor iedereen. Het web is voor iedereen, in dit vak leer je hoe je daarvoor kan zorgen.

## Leerdoelen van Browser Technologies

- _je leert wat Progressive enhancement is en hoe je dit kan toepassen._
- _je leert Browser Technologies te onderzoeken, testen en implementeren als enhancement._
- _je leert hoe je Feature Detection doet en wat je kan doen als een 'feature' niet werkt of wordt ondersteund._

## Installation

clone browser-technologies-2122 with git

```bash
#navigate to directory you want to save in
cd someDirectory/inA/dir
git clone https://github.com/bommezijn/browser-technologies-2122.git
cd browser-technologies-2122
```

Install the project with npm or your preferred package manager

```bash
  npm install my-project
  # To start developing run dev
  npm run dev
```

## Documentatie en opdrachten

Om Browser Technologies te snappen hebben wij theorie moeten leren en begrijpen

- **Opdracht 1: Wat is progressive Enhancement** Het zoeken van metaforen voor progressive enhancement. [Browser Technologies - team 2](https://browser-technologies-team.vercel.app/)
- **Opdracht 2: Break the web** Letterlijk het web breken aannames die jij maakt valideren en in te leven in de eindgebruiker. Aantal features onderzoeken. [zie wiki.](https://github.com/bommezijn/browser-technologies-2122/wiki/BreakTheWeb)

# Eindopdracht

**_Progressive enhancement_** (PE), het van de grond op een website (of webapplicatie) bouwen dat voor iedere gebruiker werkt. Het zal werken in iedere context. Hoe meer de context toe laat hoe beter de website zal werken.  
PE wordt toegepast door middel van progressief het web te bouwen, als het fundament sterk is, zal de rest ook van zelf sterker zijn. Dus de basis; HTML moet als eerste functioneel zijn. Dan maak je dit vervolgens prettig om te gebruiken, je kijkt niet meer alleen naar HTML, maar het is prettig om naar te kijken. Vervolgens maak je het enhanced, met JavaScript voeg je features toe die het de gebruiker alleen maar makkelijker maakt.

In een lopende verhaal heb ik net eigenlijk de drie lagen benoemd:

1. Functional (HTML)
1. Usable (HTML + CSS)
1. Pleasurable (HTML + CSS + JS)

Om te controleren als dit op de juiste manier wordt gedaan is **_feature detection_** ook van belang, het controleren als iets wel wordt ondersteund door de browser, dit kan zowel in JavaScript als in CSS.

## Demo

![Screenshot of the first page of the webapp](https://user-images.githubusercontent.com/13199349/169404329-2f16f1d1-9f33-482b-9d42-628076382609.png)
[Deployed via Heroku, please be patient](https://enigmatic-shelf-01341.herokuapp.com/)

[Backup demo](https://bommezijn.github.io/browser-technologies-2122/src/)

## Wireflow

Basis van de wireflow en de logica van de applicatie. Het doel van de applicatie is om een formulier door de gebruiker in te laten vullen, maar ook om te definieëren wat de verschillende lagen zijn.

![browser-technologies-2122-02](https://user-images.githubusercontent.com/13199349/162284429-11cca4b8-919a-4a44-a423-54bd22825349.jpeg)
![browser-technologies-2122-01](https://user-images.githubusercontent.com/13199349/162284437-cdb3c2aa-650d-4cfa-8fc3-bc46da02f071.jpeg)

**Functional Layer**
![Functional layer](https://user-images.githubusercontent.com/13199349/169404715-dc60f52c-bd2b-45b1-8a7e-672fa72cd979.png)
Functionele laag van de enquete, hier zie je de barebone HTML van de webapplicatie.

**Usable Layer**
![Usable layer](https://user-images.githubusercontent.com/13199349/169405019-3ac5fba5-cef2-4966-868f-bacd9ff65968.png)
De usable layer, de laag waar het visueel aantrekkelijker wordt voor de gebruiker, zodat deze gebruiker de enquete eerder neigt in te vullen.

**Pleasurable layer**
![Pleasurable layer](https://user-images.githubusercontent.com/13199349/169405053-de86a56a-5e8f-4b17-ae4a-01f8884d4ecf.png)
De laag waar alles bij elkaar komt, de pleasurable layer, hier zal bovenop de vorige twee lagen, een laag JavaScript overheen gaan, dit zou het voor de gebruiker nog prettiger moeten maken.

## Features

Welke features / browser technologies zijn er gebruikt in de demo? op basis van [the web platform](https://platform.html5.org/)

**CSS features**

- [`color: currentColor` Het herbruiken van een kleur](https://drafts.csswg.org/css-color/)
- [`@supports` controleren als een feature wel werkt](https://drafts.csswg.org/css-conditional/#at-supports)
- [`display: flex` positionerings model voor een dimensionale layout](https://drafts.csswg.org/css-flexbox/)
- [selectors, psuedo classes en meer](https://drafts.csswg.org/selectors/)
  Usable layer; deze features worden alleen gebruikt in de usable layer voor de styling zodat het prettig is voor de gebruiker maar ook om te controleren als iets wel wordt ondersteund.

**storage technologies**

- [localStorage, het opslaan van data in de browser voor bijvoorbeeld later hergebruiken](https://html.spec.whatwg.org/multipage/webstorage.html#webstorage)
  pleasurable layer; Voor de case is het belangrijk dat de gebruiker later verder kan gaan. Data wordt tussentijds opgeslagen zodat de gebruiker ieder moment de enquete kan voortzetten.

**HTML bonus features**

- [`classList` Methode om makkelijk classes te manipuleren](https://dom.spec.whatwg.org/#dom-element-classlist)
- [`data-*` attributen voor attributen die niet de juiste attributen heeft voor de content](https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
- [`defer` scripting, het afwachten wanneer de script moet worden ingeladen](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-defer)
- [`aria-*` semantische informatie van een element voor accessibility](https://www.w3.org/TR/wai-aria/)
  Functional/Usable layer; Deze features worden toegepast om de HTML toegankelijker te maken voor mensen met bv. een screenreader. Daarnaast worden enkele features ook gebruikt om custom error meldingen te tonen wanneer er iets verkeerd gaat.

## Test devices

Voor het testen van de webapplicatie is er gekeken naar de volgende apparaten
|Device|Chromium|Non-Chromium|works|
|-|-|-|-|
|Laptop|Brave|x|✅|
|Laptop|x||Safari|✅|
|iOS 15|||||✅|
|One UI|||||✅|

## Test verslag

Test verslag dat mijn onderzoek zwart op wit plaatst over hoe en wat ik heb lopen testen op de apparaten.

### Beschrijving van de feature lijst die zijn onderzocht

De feature-lijst die ik heb gebruikt in de applicatie zijn groot en deels 'widely covered' wat inhoudt dat het door de meeste browsers (deels) wordt ondersteund. Hoewel dit vooral browser features zijn, zijn er ook enkele features geschreven om de ervaring van de gebruiker te verbeteren.

Het gebruik van localStorage; Dit zorgt ervoor dat de gebruiker zijn of haar progressie bij kan houden door de enquete heen. Dit is ook één van de requirements van de opdracht. Deze feature werkt echter wel alleen wanneer JavaScript beschikbaar is. Hiervoor is een feature detection check geschreven in de clientside, dit is deels door mijzelf maar ook door [Mozilla geschreven](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

Het gebruik van variabelen en andere nieuwere technieken in CSS; dit is op een soort gelijke manier opgevangen als JavaScript, alleen dan met CSS. Door middel van gebruik te maken van de `@supports` selector kan ik een feature detection uitvoeren waar ik kijk als een bepaalde techniek wel beschikbaar is, is dit niet dan zorg ik ervoor met CSS dat dit wordt afgevangen. Een goed voorbeeld hiervan zijn de CSS variabelen.

### Welke browser(s) de feature(s) wel/niet ondersteunen

Op basis van de devices waarmee ik heb kunnen testen werken alle functionaliteiten zoals toebehoren, maar dat is maar een klein deel van de gebruikbaarheid. Hierom heb ik voor iedere functionaliteit [caniuse](https://caniuse.com/) geraadpleegd.

| Feature                                                  | Percentage | Notes                                                      |
| -------------------------------------------------------- | ---------- | ---------------------------------------------------------- |
| [currentcolor](https://caniuse.com/?search=currentcolor) | 98.12%     | safari 3.2 & IE6-8                                         |
| [@supports](https://caniuse.com/?search=supports)        | 89.15%     | betere support sinds 2019                                  |
| [display flex](https://caniuse.com/?search=flex)         | 98.06%     | IE6-9 en Opera 10-11.5                                     |
| [selectors](https://caniuse.com/?search=selectors)       | 98.17%     | IE6, FF2-3, Safari 3.1                                     |
| [localStorage](https://caniuse.com/?search=localStorage) | 95.51%     | IE6-7, FF2-3, Safar3.1-3.2 Opera, 10.1                     |
| [classList](https://caniuse.com/?search=classList)       | 98.01%     | Support is beter sinds 2013                                |
| [data-\*](https://caniuse.com/?search=data-*)            | 98.19%     | Partial support tot 2012                                   |
| [defer](https://caniuse.com/?search=defer)               | 97.07%     | Opera Mini geen support, tot 2010 minder support           |
| [aria-\*](https://caniuse.com/?search=aria)              | 97.2%      | android 2.1-4.3 geen support, voor de rest partial support |

### Welke functionaliteiten zoals JavaScript je aan en uit hebt gezet in de tests

op iOS heb ik onder `settings > Safari` de opties voor JavaScript / CSS en meer aan en uit gezet, daarnaast heb ik onder advanced gekeken welke technologieen aan staan en gekeken welke uitstaan.
Dit kon worden getest via de inspector tool voor iOS Safari.
![Inspector tool for the iPhone via Safari](https://user-images.githubusercontent.com/13199349/169415680-81bc8338-5a9f-4fe7-849b-821f68c22285.png)

Ook is er gekeken naar hoe de website zich gedraagt een resource niet geladen kan worden, hiermee kun je bedenken dat bijvoorbeeld de CSS bestand(en) of JavaScript bestand(en) foutief zijn ingeladen. Door middel van progressive enhancement blijft de webapplicatie zich voortdoen zoals verwacht. Je kan de formulier blijven invullen zonder CSS of JavaScript, maar dan wordt de progressie niet opgeslagen.

Qua features binnen JavaScript heb ik de code geschreven met zo min mogelijk nieuwe functionaliteiten die zijn geintroduceerd sinds 2015. Toch zijn er enkele doorheen geslipt;

- **[const](https://caniuse.com/?search=const), [let](https://caniuse.com/?search=let)** Om variabelen specifiek te houden voor hun block scope heb ik gebruik gemaakt van deze var alternatieven. De bruikbaarheid volgens [caniuse](https://caniuse.com) is 98.01% en 95.61% respectief. De browsers waar hier een fout zal ontstaan zullen een versie hebben van voor 2015. De fout specifiek in kwestie is dat de variabel declaratie niet als block scope wordt gedefineerd.
- Een enkele arrow function, Voor compatibility redenen heb ik de meeste functies of callbacks geschreven met `function(){ }` maar het mocht toch zijn dat ik hier en daar een arrow function heb gebruikt. Met name in de serverside heb ik dit gedaan. Alhoewel de [support voor arrow functions](https://caniuse.com/?search=arrow) wel op 94.85% staat, zijn het reeds weer de oudere browsers tot medio 2016 dit niet altijd ondersteunen.

### Toekomstige features

Als ik deze webapplicatie zou uitbreiden naar een volledig product / concept zou meer tijd hebben besteed aan de volgende punten;

- Verbetering in het controleren als een feature wordt ondersteund. Op het moment wordt feature detection toegepast waar ik denk dat een feature niet volledig wordt ondersteund, als dit op meerdere plekken voorkomt schrijf ik dit nog maals, dit volgt het principe DRY niet.
- Meer tijd besteden aan validatie, validatie werkt niet volledig zoals verwacht, dit heeft waarschijnlijk te maken met het herschrijven van functionaliteit. Een van de bugs die hier aanwezig zijn is dat de serverside variant de problemen voordoet maar de statische variant dit probleem niet voordoet.
- Als toevoeging zou ik de backend willen uitbreiden om resultaten op een externe locatie op te slaan, zoals een database. Met deze toevoeging zou ik vervolgens een beheerdersomgeving kunnen bouwen waar de beheerder de resultaten kan inzien.
