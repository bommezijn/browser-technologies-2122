# Browser Technologies @cmda-minor-web 20-21

_Robuuste, toegankelijke websites ontwerpen en maken …_

Één van de mooiste [principes](https://www.w3.org/DesignIssues/Principles.html) van het web is dat iedereen met een computer en een browser het web kan gebruik. [Het web is voor iedereen](https://www.youtube.com/watch?v=UMNFehJIi0E). Het is geen gecontroleerde (programmeer) omgeving, je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij in je browser ziet. Er zijn technische beperkingen, zoals afmetingen van de browser, grootte van het apparaat, manier van interactie, kwaliteit van de hardware, kwaliteit van het netwerk en er zijn mensen, allemaal verschillende mensen ...

In het vak Browser Technologies gaan we onderzoeken wat Progressive Enhancement is en hoe je dit kan toepassen om goede, robuuste, toegankelijke websites te maken. Voor iedereen. Het web is voor iedereen, in dit vak leer je hoe je daarvoor kan zorgen.

### Leerdoelen

- _je leert wat Progressive enhancement is en hoe je dit kan toepassen._
- _je leert Browser Technologies te onderzoeken, testen en implementeren als enhancement._
- _je leert hoe je Feature Detection doet en wat je kan doen als een 'feature' niet werkt of wordt ondersteund._

### Opdracht 1 - Wat is Progressive enhancement

Voor progressive enhancement had ik vorig jaar met het team verschillende metaforen gezocht en beschreven hoe wat en waarom. Dit staat online op de volgende website;

[Browser Technologies - team 2](https://browser-technologies-team.vercel.app/)

### Opdracht 2 - Break the web

Het web breken door features bewust uit te zetten, het doel van de opdracht is erachter te komen dat de aannames die je hebt gemaakt wellicht niet kloppen en om in te leven in de eindgebruiker. Daardoor is de opdracht dat we een aantal features onderzoeken en beschrijven.

[zie wiki.](https://github.com/bommezijn/browser-technologies-2122/wiki/BreakTheWeb)

### Eindopdracht ✨ Progressive Enhanced Browser Technologie

Voor de eindopdracht ontwerp en maak je een interactieve toepassing volgens het principe van Progressive Enhancement. Zorg dat alle gebruikers, met alle browsers, in iedere context de toepassing zo goed mogelijk te zien, horen en/of voelen krijgen. De meest 'enhanced' versie is 'delightful UX', mooi en prettig om te gebruiken.

- [De eindopdracht - Progressive Enhanced Browser Technologie](assignments/eindopdracht.md)

[Rubric](https://icthva.sharepoint.com/:x:/s/FDMCI_EDU_CMD_Minor_Web_Design__Development/ET8k_fDG3VVPvqMkqx2uCusBR5-yeGaKo01meb9bDorLuQ?e=0hbmOk)

## Eindopdracht

Het doel van deze opdracht is te leren hoe je een online interactieve toepassing kan maken met behulp van _Progressive Enhancement_ en _Feature Detection_ zodat die het altijd doet ...

### Uitleg

Maak een demo op basis van een user story. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de _core functionaliteit_ te zien/horen/voelen krijgen en maximaal een hele goede user experience.

Bouw je demo in 3 lagen, volgens het principe van _Progressive Enhancement_.

Gebruik als enhancement een [Browser Technologie](https://platform.html5.org) die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.
Je onderzoekt hoe je verschillende _features_ door verschillende browsers worden ondersteund, hoe je voor goede fallback kan zorgen en je test de _features_ op verschillende browsers <del>en het Device Lab</del>.

Polyfills en NPM packages op de client zijn niet toegestaan, op de server kun je doen wat je wil. Wat voor deze opdracht telt, is de HTML/CSS/JavaScript die aan de browser wordt aangeleverd.

Gebruik [caniuse.com](https://caniuse.com), [html5test.com](https://html5test.com), [css3test.com](http://css3test.com) en [kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

[Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/)

### Usecase - enquete

> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Wireflow

Basis van de wireflow en de logica van de applicatie. Het doel van de applicatie is om een formulier door de gebruiker in te laten vullen, maar ook om te definieëren wat de verschillende lagen zijn.

![browser-technologies-2122-02](https://user-images.githubusercontent.com/13199349/162284429-11cca4b8-919a-4a44-a423-54bd22825349.jpeg)
![browser-technologies-2122-01](https://user-images.githubusercontent.com/13199349/162284437-cdb3c2aa-650d-4cfa-8fc3-bc46da02f071.jpeg)

### Testing

On which browser does the application run?
|Browser|Does it work|
|--|--|
|Brave (chromium)|✅|
|Safari (webkit)|✅|
|iOS|🕑|
|Android|🕑|

#### Test case

> Yet to be written.

<details>
<summary>requirements & assignments</summary>
#### Vereisten voor de Enquete

- Studentgegevens (naam + nummer) verplicht
- Per vak
  - naam
  - docent(en)
  - weken waarin je het vak deed
  - beoordeling op schaal 1-10 van
  - lesstof (hoe moeilijk is het)
  - uitleg (hoe duidelijk is het uitgelegd)
  - eigen inzicht (hoe goed snap je het)
- Validatie: alles moet zijn ingevuld voordat je verder mag met het formulier. Geef duidelijke foutmeldingen.
- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### opdrachten

- [x] wireflow en/of breakdown-schets met hoe de demo moet gaan werken en hoe hett eruit komt tet zien. Bepaal functional/reliable, usable en pleasurable laag.
- [x] Onderzoek functional / reliable laag naar semantische HTML elementen.
- [ ] Kijk voor de usable laag naar gebruiksvriendelijkheid en design patterns die je zou kunnen toepassen
- [ ] De meest 'enhanced' versie is super vet, gaaf, en prettig om te gebruiken... dit is de pleasurable laag.

> Voor de eindopdracht telt alleen de HTML CSS JS die aan de browser wordt geserveerd. De server / backend boeit niet.

## Criteria eindopdracht

- [ ] Student kan de _Core functionaliteit_ van een use case doorgronden
- [x] Student kan uitleggen wat _Progressive Enhancement_ en _Feature Detection_ is en hoe dit toe te passen in Web Development
- [ ] De demo is opgebouwd in 3 lagen, volgens het principe van _Progressive Enhancement_
- [x] De user experience van de demo is goed
  - Let op leesbaarheidsregels, contrast en kleuren
  - Let op gebruiksvriendelijkheid, zoals affordance en feedback op interactieve elementen
  - De meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken

Er is een Readme toegevoegd met daarin:

- [ ] Een link naar de demo.
- [x] Een (wireflow) schets van de functionaliteit met een beschrijving van de core functionality. Geef ook aan wat de functional/reliable, usable en pleasurable laag.
- [ ] Een beschrijving van de feature(s)/Browser Technologies die in je demo zijn gebruikt en hoe je dit PE hebt toegepast
- [ ] Een lijst met vier browsers waarin je hebt getest:
  - voor de desktop 1 Chromium 1 niet-Chromium browser
  - voor mobiel 1 iOS + 1 Android OF een Samsung- en een niet-Samsung Android)
- [ ] een testverslag met
  - een beschrijving van de feature-lijst die zijn onderzocht
  - welke browsers de feature(s) wel/niet ondersteunen
  - welke functionaliteiten zoals JavaScript je aan en uit hebt gezet in de tests

</details>

<!-- Niet boeiende planning voor mij dan. -->
<!--
## Planning & programma

### Week 2

In week 2 beginnen we met de eindopdracht. We hebben in week 1 onderzocht wat PE is en welke feautures wel of niet goed worden ondersteund. Deze week gaan we leren hoe je een interactieve toepassing in 3 lagen kan ontwerpen en wat je kan doen als een browser een 'enhancement' niet kan tonen.

#### Woensdag 29 maart

Woensdag krijg je een briefing van de eindopdracht en een college over browsers, en alles (!) wat daarbij hoort. Daarna gaan we aan de slag: als je een interactieve toepassing ontwerpt die alle gebruikers, met alle browsers moeten kunnen zien, dan zul je moeten bedenken hoe je de toepassing in 3 lagen kan opbouwen, eerst bepaal je de core functionaliteit en de user-delight ... schetsen maar!

#### Donderdag 31 maart

Donderdag gaan we voorbeelden van PE en feature detection bespreken in een college over form validatie. Daarna aan de slag met je ontwerp, in clubjes gaan we je ontwerpideeën bespreken en bedenken hoe je dit in 3 lagen zou kunnen bouwen.

Lezen voor les 4 📖

- [Be progressive by Jeremy Keith](https://adactio.com/journal/7706)

#### Vrijdag 1 april

Vrijdag bespreken we in groepjes de vorderingen voor de eindopdracht. Zorg dat je vandaag weet welke browsers (en devices) jij gaat testen. -->
