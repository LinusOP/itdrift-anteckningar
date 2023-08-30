---
title: Föreläsning 1
---

# Föreläsning 1

## Talsystem

Positionsbaserade talsystem

### Decimalt talsystem

Tecken 0-9

```
2   1   5
|   |   |
|   |   Ental - 5x1 (Egentligen 5x10⁰)
|   Tiotal - 1x10 (Egentligen 1x10¹)
Hundratal - 2x100 (Egentligen 2 x 10²)
```

Formel: siffra x 10 ^ position (Ex: 8**6**489 - 6an är i position 3 (vi börjar på 0, från höger), värde: 6x10³ = 6x1000 = 6000)

### Binärt talsystem

Tecken 0 och 1

Exempel på varför vi behöver förstå binära tal:  
En IP adress ex: 192.162.0.10 är egentligen 32 1or och 0or, representerade i bas 10 för människors skull

Formel: siffra x 2 ^ position (Ex: 1**1**10 - 1an har position 2 (börja på 0, från höger), värde: 1x2² = 1x4 = 4)

#### Terminologi:

Datorers minsta del är en bit, en 0a eller 1a.

```
1   0   0   1
|           |
|           Minst signifikanta bit (Least Significant Bit, LSB)
Mest signifikanta bit (Most significant bit, MSB)
```

Ett binärt tal med 8 bitar är en byte

#### Räkna bas 2 till bas 10

Exempel 1:  
Ex nummer: 1011(bas 2) (4 bitar)

```
Långa versionen:
1   0   1   1
|   |   |   |
|   |   |   1x2⁰ = 1
|   |   1x2¹ = 1x2 = 2
|   0x2² = 0x(2x2) = 0x4 = 0
1x2³ = 1x(2x2x2) = 1x(4x2) = 1x8 = 8
```

Addera varje positions värde, 8+0+2+1=11

Exempel 2:  
Ex nummer: 101011(bas 2) (6 bitar)

```
1   0   1   0   1   1
|   |   |   |   |   |
|   |   |   |   |   1x2⁰ = 1
|   |   |   |   1x2¹ = 2
|   |   |   0x2² = 0
|   |   1x2³ = 8
|   0x2⁴ = 0
1x2⁵ = 32
```

Lathundsvariant:  
Skriv ut varje positions värde, addera där du har en 1a

```
1   0   1   1   0   1
|   |   |   |   |   |
|   |   |   |   |   Position 0 - Värde 1
|   |   |   |   Position 1 - Värde 2
|   |   |   Position 2 - Värde 4
|   |   Position 3 - Värde 8
|   Position 4 - Värde 16
Position 5 - Värde 32
```

1 finns på position 5, 3, 2, 0 vilka har värdena: 32, 8, 4, 1  
101101 = 32 + 8 + 4 + 1 = 45

## Ränka bas 10 till bas 2

Exempel, konvertera 54 (bas 2) till decimalt

Strategi 1 "Pusselmetoden":

Skriv ut varje värde för varje position upp tills vi når talet.  
64 32 16 8 4 2 1

Sedan ignorerar vi första talet (du kan inte beskriva 54 med hjälp av 64)  
Sedan börjar vi subtrahera talen från vänster, talen vi kan subtrahera blir 1 i vårt binära tal, resterande 0. Målet är att inte ha något kvar, men vi får inte vara under 0.

```
32  16  8  4  2  1
|   |   |  |  |  |
|   |   |  |  |  0 -> 0-1 tar oss annars under
|   |   |  |  1 -> 2 - 2 = 0 (Här är vi klara, resterande till höger är 0)
|   |   |  1 -> 6 - 4 = 2
|   |   0 ->  8 - 6 = -2 (Får ej komma under 0)
|   1 -> 22 - 16 = 6
1 -> 54 - 32 = 22
1   1   0  1  1  0 = 110110 (54 binärt)
```

## Frågor under föreläsning

**Hur mycket ska man utveckla på tentor?**

Står det t.ex "Vad blir 1010 decimalt?" då krävs endast svar, "10".  
Dock kan man rädda en del av poängen om man visar sin tankegång, även om man i slutändan får fel svar.  
Därför är det oftast värt att utveckla mer än vad man _måste_ för att vara på den säkra sidan.

**Finns där gamla tentor på canvas?**

Ja, dessa kan vara något efter eller sakna vissa saker, då kursen uppdaterats, men kan ändå vara bra att ha

**Finns där gränser för U och G på tentor, hur funkar det??**

Ja det finns det, olika för lärare och kurser.

"Standard Erictenta"  
(Poänggränserna brukar även vara liknande för tentor från andra lärare som Ted osv)  
Totalt - 50p  
VG - 40p  
G - 25p

(Får man _alla_ rätt får man en pizza (enbart för Erics tentor))

**Vad händer när man lägger till nollor på binära tal?**

I slutet händer inget, dvs 101 -> **0**101 är samma tal, precis som i decimala system, 67 = **0**67 (osv)

I början så händer dock något, titta decimalt, 13 -> 13**0**, stor skillnad.  
Samma princip i binära tal, 101 = 5, 101**0** = 10

## Övrigt

**Mer om tentor från Eric**

Tentor delas normalt upp i huvuduppgifter eller kategorier där det krävs poäng i varje kategori för godkänt.  
Klarar man alla delar utom en får man komplettera specifikt i den kategorin.
