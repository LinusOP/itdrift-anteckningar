---
title: Datateknisk Introduktion - Föreläsning 2
---

# Datateknisk Introduktion - Föreläsning 2

**Ej renskriven**

## Fortsättning på föreläsning 1

Notera att föregående föreläsning avslutades med genomgång av strategi 1 "Pusselmetoden".

### Fortsättning: Räkna från bas 10 till bas 2

Strategi 2: Dela med 2 metoden

Exempel 1: Räkna 56 (bas 10) till bas 2:

1. 56/2 = 28 -> Skriv med decimal: 28,0
2. Ta decimaldelen och multiplicera med vår bas, 28,**0** -> **0**x2 = 0 -> Första siffran i vårt tal är 0
3. Ta kvarvarande 28, repetera -> 28/2 = 14 -> 14,0 -> Andra siffran är 0x2 = **0** -> Hela talet: **0**0
4. Fortsätt: 14/2 = 7 -> 7,0 -> 0x2 = **0** -> Fortsatt är talet: **0**00
5. 7/2 = 3,5 -> 0,5x2 = **1** -> Fortsatt är talet **1**000
6. Eftersom vi använt vår decimal har vi 3 kvar, vi fortsätter med resterande tal som 3
7. 3/2 = 1,5 -> 0,5x2 = **1** -> Fortsatt är talet **1**1000
8. 1/2 = 0,5 -> 0,5x2 = **1** -> Fortsatt är talet **1**11000
9. Våra heltal är nu 0, vi är klara, hela talet blir 111000

Exempel 2: Räkna 17 (bas 10) till bas 2

1. 17/2 = 8,5 -> 0,5x2 = 1 -> Första siffran är 1 (stämmer även överens med det faktum att ojämna tal alltid har en 1 längst till höger, jämna tal har 0)
2. 8/2 = 4 -> 4,0 -> 0x2 = **0** -> Andra siffran är 0, hela talet: **0**1
3. 4/2 = 2 -> 2,0 -> 0x2 = **0** -> Hela talet: **0**01
4. 2/2 = 1 -> 1,0 -> 0x2 = **0** -> Hela talet: **0**001
5. 1/2 = 0,5 -> 0,5x2 = **1** -> Hela talet: **1**0001
6. Inga heltal kvar (vänster om kommat är 0), vi är klara, hela talet: 10001

### Hexadecimala tal:

Tal i basen 16, används för att skriva ut binära tal kortare.

Använder symbolerna (siffrorna) 0-F: 1, 2, 3, 4, 5, 6, 7, 8, 9, A (10), B (11), C (12), D (13), E (14), F (15)  
Vi kan i praktiken representera 0-15 med en symbol.

#### Att räkna från hexadecimalt till decimalt

Principen blir den samma som i alla positionsbaserade talsystem. Vi räknar symbolen multiplicerate med basen upphöjt till positionen (position börjar på 0).  
Formel: symbol x 16^position

Exempel på ett hexadecimalt tal: A5 (bas 16)

```
A   5
|   |
|   5 x 16⁰ = 5 x 1 = 5
A = 10 -> 10 x 16¹ = 10 x 16 = 160
```

Addera värdet för varje position: 160 + 5 = 165  
A5 (bas 16) = 165 (bas 10)

Exemepel 2: A00 (bas 16)

```
A   0   0
|   |   |
|   |   0 x 16⁰ = 0
|   0 x 16¹ = 0
A = 10 -> 10 x 16² = 10 x 256 = 2560
```

Addera värdet för varje position: 2560 + 0 + 0 = 2560  
A00 (bas 16) = 2560 (bas 10)

#### Att räkna från decimalt till hexadecimalt

Samma princip som dela med 2 metoden, men vi delar med 16 pga att basen är 16.

Exempel 1: 47 (bas 10)

1. 47/16 = 2,**9375**
2. Ta decimaldelen, multiplicera med vår bas: 0,**9375** x 16 = 15 -> konvertera till hexadecimal symbol 15 = F, första siffran är F.
3. Repetera med den 2an som är kvar: 2/16 = 0,125
4. Ta decimaldelen: 0,125 x 16 = **2**, fortsatt är vårt tal **2**F
5. Vi har en 0a kvar som heltal, vi är klara. Vårt tal är 2F (bas 16)

Notera:  
Har du ett tal som är _under_ 16 kan du placera detta direkt och sen avsluta.  
Dvs steg 3 ovan är onödigt, vi hade direkt kunnat sätta vår 2a längst fram.  
Detta pga att vi egentligen tar 2/16 x 16, detta blir alltid 2. Precis som att 5/10 x 10 blir 5 (5/10 = 0,5 -> 0,5 x 10 = 5).  
Eftersom att talet är mindra än 16 vet vi också att delar du detta med 16 så blir resultatet mindre än 0, och vi kommer därmed kunna avsluta efteråt. Notera att steg 5, efter att vi delat vår 2a med 16, är att vi avslutar.

Exempel 2: 156 (bas 10)

1. 156/16 = 9,**75** -> 0,**75** x 16 = 12 -> Hexadecimal symbol 12 = C, första siffran är C
2. 9/16 -> Då talet är under 16 kan vi placera detta direkt i positionen, och detta blir sista talet -> Fortsatt är talet 9C
3. Vi är klara, hela talet är 9C (bas 16)

Hade vi velat göra det uförligt istället för vår genväg i steg 2, för tydlighetens skull, ser det ut såhär:

1. 156/16 = 9,**75** -> 0,**75** x 16 = 12 -> Hexadecimal symbol 12 = C, första siffran är C
2. Repetera med 9an som är kvar: 9/16 = 0,5625
3. Ta decimaldelent: 0,5625 x 15 = **9**, fortsatt är vårt tal **9**C.
4. Vi är klara, vi har 0 kvar som heltal, hela talet är 9C (bas 16)

Man _måste_ inte använda genvägen, resultate blir samma. Är man osäker är det bättre att göra alla stegen tills man får 0, såsom i exempel 1.

#### Att räkna från hexadecimalt till binärt (och tillbaka)

```
Dec. Hex.  Binärt
0     0     0000
1     1     0001
2     2     0010
3     3     0011
4     4     0100
5     5     0101
6     6     0110
7     7     0111
8     8     1000
9     9     1001
10    A     1010
11    B     1011
12    C     1100
13    D     1101
14    E     1110
15    F     1111
```

Med hjälp av denna "fusklapp" kan vi konvertera hexadecimalt till binärt enkelt.

Exempel tal: B3 (bas 16)

B = 1011  
3 = 0010

B 3 = 1011 0011 -> 10110011 (bas 2)

Ta ett längre tal: A647 (bas 16)

A = 1010
6 = 0110
4 = 0100
7 = 0111

A 6 4 7 = 1010 0110 0100 0111 = 1010011001000111 (bas 2)  
Notera att vi ofta skriver det binära i grupper om 4, för att enkelt kunna tyda det, och då varje grupp om 4 är en hexadecimal symbol.

På andra hållet:

Exempel: 10110101 (bas 2) till hexadecimalt

Dela upp i grupper om 4 -> 1011 0101  
Använd fusklappen:  
1011 = B  
0101 = 5  
1011 0101 (bas 2) = B5 (bas 16)

Exempel då vi inte enkelt kan dela upp det binära talet i grupper om 4:

Tal: 110010  
Precis som i ett decimalt tal får vi lägga till 0or till vänster. 0015 = 15

Använd samma princip, lägg till 0or tills vi får ett tal vi enkelt kan dela upp i 4or:  
**00**110010 -> **00**11 0010

Använd metoden som ovan:

```
Binärt: 0011  0010
Hexa:    3      2
```

110010 (bas 2) = 32 (bas 16)

#### Tal med decimal

Exempel: 11,11 (bas 2)

Här vill vi skapa två grupper om 4a, notera att en grupp inte får ha ett komma i mitten, därav blir detta två.

Som nämnt innan kan vi lägga till nollor till vänster, som i ett decimalt tal. Samma sak gäller till höger om kommat. Dvs. 56,7 = 56,700000

Använd principen:  
11,11 = 0011,1100

Översätt med vår "fusklapp"

0011 = 3 (bas 16)  
1100 = 12 (bas 10) = C (bas 16)

11,11 (bas 2) = 3,C (bas 16)

## Början på slides för föreläsning 2

### Maximala värden

Vad är det största värdet som vi kan representera med ett visst antal tecken eller siffror?

Formeln: basen^antalet siffror - 1

Exempel: Vad är det största talet vi kan beskriva med 4 siffror i basen 10?

10⁴ - 1 = 10 000 - 1 = 9999 (Ganska självklart för oss när man ser det decimalt)

Samma princip gäller i t.ex bas 7

Största talet med 3 siffror i bas 7:  
7³ - 1 = 343 - 1 = 342

### Konvertera binärt till/från decimalt med decimaldel/binaldel

Decimaldel / Binaldel:  
Är den delen efter kommat, i 8,94 är ,94 binaldelen. Termen "binaldel" måste man inte kunna.

#### Binärt till decimalt

Exempel tal: 1001,011 (bas 2) till bas 10

Använd positionernas värde, precis som i föreläsning 1:

```
1   0   0   1,  0   1   1
|   |   |   |   |   |   |
|   |   |   |   |   |   Position -3: 0x2⁻³ -> Se nedan
|   |   |   |   |   Position -2: 0x2⁻² -> Se nedan
|   |   |   |   Position -1: 0x2⁻¹ -> Se nedan
|   |   |   1 x 2⁰ = 1
|   |   0 x 2¹ = 0
|   0 x 2² = 0
1 x 2³ = 8
```

Potenser med negativa tal:  
2⁻¹ kan skriva som 1/2¹ = 1/2 = 0,5  
2⁻² -> 1/2² = 1/4 = 0,25  
2⁻³ -> 1/2³ = 1/8 = 0,125

Generell regel: 2⁻ˣ = 1/2ˣ

Applicera ovan:

```
1   0   0   1,  0   1   1
|   |   |   |   |   |   |
|   |   |   |   |   |   Position -3: 1x2⁻³ = 1 x 1/2³ = 1 x 1/8 = 1 x 0,125 = 0,125
|   |   |   |   |   Position -2: 1x2⁻² = 1 x 1/2² = 1 x 1/4 = 1 x 0,25 = 0,25
|   |   |   |   Position -1: 0x2⁻¹ = 0 x 1/2¹ = 0 x 1/2 = 0 x 0,5 = 0
|   |   |   1 x 2⁰ = 1
|   |   0 x 2¹ = 0
|   0 x 2² = 0
1 x 2³ = 8
```

Precis som tidigare adderar vi sedan, heltalsdel och decimaldel var för sig:  
Heltalsdel: 8 + 1 = 9  
Decimaldel: 0,25 + 0,125 = 0,375

Lägg ihop delarna: 9 + 0,375 = 9,375  
1001,011 (bas 2) = 9,375 (bas 10)

#### Decimalt till binärt

Vi använder svaret från ovan, enbart för att då ser vi enkelt om vi har rätt svar.

Räkna 9,375 (bas 10) till bas 2

Börja med heltalen, 9 (bas 10) till bas 2:  
Använd metoder från föreläsning 1 eller fusklappen ovan: 9 (bas 10) = 1001 (bas 2)

Talet hittils: 1001,xxxxx (x är nånting)

Nu decimaldelen:  
Multiplicera decimalen med basen: 0,375 x 2 = 0,75

Första talet, till vänster om kommat (**0**,75) sätter vi ut, talet är nu 1001,0xxxx

Multiplicera sedan decimaldelen av svaret igen med basen:  
0,75 x 2 = 1,5 -> Sätt ut talet till vänster om kommat: talet är nu 1001,01xxxxx

Multiplicera decimaldelen av svaret:  
0,5 x 2 = 1,0 -> Sätt ut heltalet: 1001,011xxxx

Vi har inga decimaler kvar, vi är klara.

9,375 (bas 10) = 1001,011 (bas 2)
