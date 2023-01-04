# THE CRATER

https://nathanaelblackbourn.github.io/the-crater/

JavaScript grundkurs.
Laboration 1.
Individuellt arbete.

JavaScript basics course.
Exercise 1.
Individual task.

*Brief*
'I den här laborationen skall du skapa en textbaserad interaktiv upplevelse där användaren kan göra förändringar i en värld.'

'In this exercise you will created a text-based interactive experience where the user can make changes in a world.'


# Solution
*Plot*
2045, Gertrud Rask Land, Greenland.

A huge explosion occurs at a mining operation within the arctic circle. The cause of the explosion is unknown. The player and their team of three scientists are sent to investigate.

-----

En stor explosion händer på gruvingsoperation inom polcirkeln. Anledningen för explosionen är oklar. Spelaren och sitt team får uppdrag att investigera.


*Gameplay*
The Crater is a text-based adventure game. It is played by entering predetermined commands into a text field. Each scene is described in a text box on the screen and available commands are communicated to the player in the text. The game is both winnable and losable. 

With each new scene time progresses one game day.

The number of moves the player can make is limited as the temperture ticks down with each new day and as soon as it hits the floor at minus fifty-five the player loses.

Food is also a limited resource for the player which ticks down each game day. Food, however, can be restored at one scene in the game.

The game is won by collected two items and taking them to the game's central scene.

-----

'The Crater' är ett textbaserat äventyr spel. Det spelas genom att skriva kommandon i inmatningsfält. Varje scene beskrivs i text på skärmen och möjliga kommandon kommuniceras till spelaren i texten. Man kan både vinna och förlora spelet.

Vid varje ny scene avancerar tid framåt en speldag.

Numret drag spelaren kan göra är begränsad som temperaturen stiger ner med varje ny dag, så snart den når minus femtio-fem grader förlorar spelaren.

Mat är också en begränsad resurs för spelaren vilken stiger ner varje speldag. Mat, dock, kan fyllas på vid en scene i spelet.

Spelet vinnas genom at hämta två objekt och ta med dem till spelets centrala scene.


*Avgränsningar/limitations*
Should I continue with this project indefinitely there are a lot of ideas and fixes that I would like to implement but have been needed to consciously rule out. Realising them is well within my ability but the time it would take would carry me past the hand-in deadline. They include:

- Conditional compilation of text for each scene. I would put together each scene's text according to which parts of the game have already been explored by the player, the actions available to them should also be dynamic. I have partly implemented this in the 'midCrater' scene but it should be rolled out throughout the project.
- More in depth writing. The joy of a text based game lies in the richness of the descriptions and the creativity expressed in the world building. I wanted to create time to focus on code so I have kept writing short and in most cases just used the first draft. For bear scene outcomes some text is duplicated.
- An element of chance to the game at injury scenes. Probably a 50% chance of injury, the following scene would then be decided according to whether an injury had occured.
- A more developed inventory element in gameplay. I would like the team to enter the crater with a number of piece of equipment that can help or be lost at various scenes. For example, an icepick that give bonuses when fighting a bear or breaking the pilot out of the ice block and can be lost during a bear fight.
- The text could be structured in order to make the player investigate each scene more to find the scene's keywords and possible actions. Certain options could be displayed only in team members thoughts, forcing the player to talk to each tea member before proceeding and adding depth.
- Incentive to keep team members alive. As it stands, the is no reason why a player shouldn't leave their team members behind to die apart from empathy. Hiding keywords in team member dialogue would incentivise the player to keep them alive. The player should also be more vunerable to injury with fewer or no team members to help them during injury scenes. As it stands the player cannot get injured at all.

-----

Om jag skulle fortsätta med projektet obegränsat är det många idéer och justeringar jag skulle implementera men just för den här inlämningen fick jag gränsa av. Jag är kapabel av at realisera dem men tiden det hade tagit skulle passera tidsgränsen. De inkulderar:

- Texten ska kompileras enligt relevanta villkor för varje scene. Innehållet ska förändras beroende på vilka delar av spelet spelaren har kompletterat. Tillgängliga kommandon ska också bero på detta. Jag har implementerat en del av detta på 'midCrater' scenen men det ska också vara med igenom resten av spelet.
- Mer utvecklad skrivande. Text baserad spel kräver bra texter för engagemang. Jag ville skapa tid för att fokusera på koden så jag har hållit mig till korta texter och har oftast kört med den första versionen utan ändringar. Vissa björn scener har dupilcerad text.
- Slump vid skadningsscener, förmodligen 50%. Scenen som följer skulle bero på resultatet.
- Djupare inventorielistan funktionalitet. Teamet ska börja med et flertal objekt utrustning som kan hjälpa och förloras vid vissa scener. Till exempel en ishacka som ger bonus när spelaren konfronterar björnen eller bryter ut piloten från isblocket men också förloras under björn-konfrontationen.
- Strukturera om texten för att tvinga spelaren att investigera varje scene för att upptäcka nyckelord. Vissa möjligheter kan visas enbart när man pratar med teamet.
- Incitament att hålla teamet vid liv. Just nu hat spelaren ingen motiv att rädda livet av sina tea medlemmar. Att gömma nyckelord i dialogen kan ger det. Spelaren ska också bli mer öppen till skadning med mindre team medlemmar kvar. Just nu kan inte spelaren bli skadad alls.


*Conclusions/slutsatser*

This exercise has given me a lot of insight into the complexities of realising relatively simple functionality. I did not realise when planning the game how many lines of code would be required to build the mechanisms I was adding. This is key to time-management and gives me some insight into how to plan my projects going forwards.

Structuring the code logically has also been an interesting challenge during this exercise. The project contains the more lines of JavaScript than any other I have done. The freedom one has to structure code any way one likes together with the intricacies of how the purpose of the code influences its structure adds up to a lot to think about. Implementing what I have learnt during this project in this project would be going back and rewriting large sections of it before handing in. This won't be possible, as I write this there are only four hours until deadline. I can however apply everything I have learned to following projects and perhaps come back to the crater one day to refine and expand it.

-----

Den här laborationen har givit mig många bra insikter på kompletiteten av at skapa relativt enkel funktionalitet. Jag visste inte näar jag planerade spelet hur många rader kod skulle krävas för att bygga mekanismerna jag lade till. Detta är viktigt när det gäller tidshantering och jag kommer använda mina nya lärdomar i projekten framåt.

Logisk strukterering av koden har också varit en intressant utmaning. Projektet innehåller mera rader JavaScript än någon annan jag har genomfort. Friheten man har med strukturen tillsammans med detaljerna av hur kodens syfte påverkar struktur ger man mycket att tänka på. Att implementera allt jag har lärt mig under projektets gång skulle innebära att jag skriver om stora delar av koden vilket är inte möjligt innan tidsgränsen. Jag kan bara applicera de nya kunskaperna till kommande projekt och kanske återkomma någon dag till 'The Crater' för att refinera och expendera spelet.