---
title: Datateknisk introduktion - Föreläsning 7 (EJ KLAR)
order: 70
---

# Datateknisk introduktion - Föreläsning 7

## Bitmönster

Har vi två bitmönster, ex:

```
0111
1011
```

Skulle vi sen ta dessa igenom en OR grind så jämför vi varje position för var för sig. Dvs att biten längst till höger i varje mönster är position 0, biten ett steg till vänster är position 1 osv.

Oftast ställer man upp detta som addition, något såhär:

$$
\begin{aligned}
0111 \\
\text{XOR } 1011 \\
\hline 1111
\end{aligned}
$$

Man utför sen den logiska operationen på bitarna som är ovanför varandra, en position i taget.

### Bitmasker

En mask är ett fast bitmönster som man använder på andra bitmönster för att få ut ett visst resultat.

Ex, om vi har bitmönstret `0110` och vi vill skapa en mask, ett bitmönster, som gör att alla bitar blir 0. Då kan vi i detta fall använda en AND operation med enbart 0or som mask.

$$
\begin{aligned}
0110 \\
\text{AND } 0000 \\
\hline 0000
\end{aligned}
$$

Ett annat exempel är om man vill använda en mask som enbart ger 1or, då kan vi använda en OR operation med enbart 1or.

$$
\begin{aligned}
0110 \\
\text{OR } 1111 \\
\hline 1111
\end{aligned}
$$

## Binär addition

Exempel tal i decimal form: $7 + 5 = 12$

Oftast ställer vi upp detta som så:

$$
\begin{aligned}
7 \\
+ \space 5 \\
\hline 12
\end{aligned}
$$

I binär form:  
$7_{10} = 0111$  
$5_{10} = 0101$

Additionen ser då ut såhär:

$$
\begin{aligned}
0111 \\
+ \space 0101 \\
\hline 1100
\end{aligned}
$$

Hur vi kommer dit är dock inte självklart. Men egentligen är principe samma som i decimal addition, vi använder minnessiffror.

Tittar vi i decimal form ser additionen ut såhär:

$$
\begin{aligned}
\underline{1}& \\
&7 \\
+ \enspace &5 \\
\hline 1&2
\end{aligned}
$$

**Här kommer steg för steg av binär addition senare**

## Binär subtraktion

**Kommer också senare**
