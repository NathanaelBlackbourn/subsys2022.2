HTML & CSS, Inlämning 1
Återskapa en hemsida.

Grupp: Edvin Djulic & Nathanael Blackbourn
Sida: Göteborgs Konstmuseum, https://goteborgskonstmuseum.se/


Avgränsningar

Sidan har mycket interaktivitet som inte ingår i uppgiftsbeskrivningen. Vi har utelämnat de interaktiva elementen som vi kan inte återskapa som t.ex nav-baren some försvinner när användaren skrullar och bild carousellerna. Vi  har också förenklat strukturen och tagit bort element som vi bedömer inte behöver finnas med för att återskapa hemsidans utseende.

Vi har inte kunnat återskapa originalets div-tagg ”#news-masonry” under h2-taggen ”Aktuellt” eftersom den används genom ett Javascript-bibliotek som heter ”Masonry”. ”Masonry” sorterar alla div-taggar inom sig på ett särskilt sätt när skärmen passerar vissa media breakpoints. På vår sida kommer artiklarna inte sorteras på samma sätt utan de hamnar i en annan ordning.

Vi har inte använt samma fonter som i orginalet eftersom de kostar att använda. Istället har vi använt två fonter som är gratis; ”Gill Sans” och ”Spectral”. Detta gör att det blir en mindre skillnad i vissa avstånd på vår hemsida. Skillnaden märks på våran nav bar och på div klassen 'content' där vi fuck lägga till lite extra pixlar så att texten passar in. Texten wrappar ändå på fel ställe.

Också på klassen 'content' har vi inte fått 'text-overflow' effekten att fungera som på originalen. Vi här lagt till punkterna manuellt i HTMLen.

Orginalets header har en div-tagg som heter "Burger" i denna finns tre i-taggar som utgör orginalets ikon i den högra hörnan. Vi har behållt div-taggen "Burger" men ersatt de tre i-taggarna med en ikon som är inlänkad och hämtad från "Fontawesome". Storleken på ikonen är stylad direkt i HTML-filen genom instruktionen från Fontawesome. Ikonen är inlänkad i head med taggen script istället för link, då det också var instruktionen från Fontawesome.

Vi har, förutom i Footern, inte använt oss av a-taggar för länkar utan bara lagt till samma hover-styling på relevanta div-taggar eller texter.