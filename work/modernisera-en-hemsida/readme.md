#Craigslist 2.0

Vi har valt att modernisera craigslist (https://stockholm.craigslist.org), front-page och sidan där annonser listas. Vi valde den eftersom vi tycker den har en åldrad design och saknar responsivitet.

Grupp: Nathanael Blackbourn och Leon Björklund
-------------------------------------------------------------------------------------

PROBLEM:

1. Sidan är för komplicerat med för mycket information på.
2. Sidan är inte responsiv.
3. Sidans utseende är utdaterad.

LÖSNINGAR:

1. Dölja odnödvändigt information med användning av ikoner och drop-down menyer.
2. Använda media queries för att skapa tre olika versioner för desktop, tablet och mobil.
3. Skapa an ren, modern utseende på sidan.

PLAN:

1. Skissa upp mobil, tablet och laptop & desktop-design för vardera sida, 6 skisser totalt.
2. Dela upp arbete (Nath orange, Leon blå)
3. Välj media breakpoints, preliminära finns där nere.
4. Skapa HTML-filer (finns nedan)
5. Skapa CSS-filer (finns nedan)
6. Jobba inom samma ramverk! Vilka maxbredder och vilka maxhöjder?
7. Börja koda! 

Uppdelning av front-page: 

Leon tar <main>
Nath tar <sidebar> & <header>, <footer>

Uppdelning av annonslisting-page:

Leon tar .list-block
Nath tar resten

Media breakpoints: 

Mobile: 0-480px
Tablet: 481px-768px (front-page: side-bar går in i header eller footer)
Laptop & Desktop: 769px above (max width 1200px)

index.html:

1. front-page.css (desktop/laptop, rot fil)
2. front-page-tablet.css (tablet, <768px)
3. front-page-mobile.css (mobil, <480px)

annons-list.html CSS-filer:

1. annons-list.css (desktop/laptop, rot fil)
2. annons-list-tablet.css (tablet, <768px)
3. annons-list-mobil.css (mobil, <480px)

AVGRÄNSNINGAR

1. Länkarna i footern har ändrats. Duplikata objekter har tagits bort och ordningen har ändrats för att göra den mer logisk.
2. Den enda knappen som ska fungera är sök filtrering knappen vilken visar formulären på annons lista sidan. De andra har ibland hover och active egenskaper men ingen funktion.
3. De enda länkar som ska fungera är länkan till 'bostad önskas' listan på front pagen och länken tillbaka till front pagen från lista sidan (vilken ligger vid toppen, ordet 'craigslist').

--------- VI HAR MARKERAT DE FUNGERANDE LÄNKARNA MED * ---------