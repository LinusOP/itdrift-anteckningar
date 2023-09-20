---
title: Datateknisk introduktion - Föreläsning 7 (EJ KLAR)
order: 70
---

# Datateknisk introduktion - Föreläsning 7

## Bitmönster

Ett bitmönster är egentligen bara en sekvens av bitar, t.ex så är detta två bitmönster:

```
0111
1011
```

Skulle vi sen ta dessa igenom en OR grind så jämför vi varje position för var för sig. Dvs att biten längst till höger i varje mönster är position 0, biten ett steg till vänster är position 1 osv.

Oftast ställer man upp detta som addition, något såhär:

$$
\begin{array}{c}
\phantom{\text{\scriptsize{XOR}\space}} 0111 \\
\underline{\text{\scriptsize{XOR}\space} 1011} \\
\phantom{\text{\scriptsize{XOR}\space}} 1111
\end{array}
$$

Man utför sen den logiska operationen på bitarna som är ovanför varandra, en position i taget.

### Bitmasker

En mask är ett fast bitmönster som man använder på andra bitmönster för att få ut ett visst resultat.

Ex, om vi har bitmönstret `0110` och vi vill skapa en mask, ett bitmönster, som gör att alla bitar blir 0. Då kan vi i detta fall använda en AND operation med enbart 0or som mask.

$$
\begin{array}{c}
\phantom{\text{\scriptsize{AND}\space}} 0110 \\
\underline{\text{\scriptsize{AND}\space} 0000} \\
\phantom{\text{\scriptsize{AND}\space}} 0000
\end{array}
$$

Ett annat exempel är om man vill använda en mask som enbart ger 1or, då kan vi använda en OR operation med enbart 1or.

$$
\begin{array}{c}
\phantom{\text{\scriptsize{OR}\space}} 0110 \\
\underline{\text{\scriptsize{OR}\space} 1111} \\
\phantom{\text{\scriptsize{OR}\space}} 1111
\end{array}
$$

## Binär addition

Exempel tal i decimal form: $7 + 5 = 12$

Oftast ställer vi upp detta som så:

$$
\begin{array}{c}
\phantom{+0} 7 \\
\underline{+\phantom{0} 5} \\
\phantom{+} 12
\end{array}
$$

I binär form:  
$7_{10} = 0111$  
$5_{10} = 0101$

Additionen ser då ut såhär:

$$
\begin{array}{c}
\phantom{+\space} 0111 \\
\underline{+\space 0101} \\
\phantom{+\space} 1100
\end{array}
$$

Hur vi kommer dit är dock inte självklart. Men egentligen är principe samma som i decimal addition, vi använder minnessiffror.

Tittar vi i decimal form ser additionen ut såhär:

$$
\begin{array}{c}
\phantom{+} \underline{1}\phantom{0} \\
\phantom{+0} 7 \\
\underline{+\phantom{0} 5} \\
\phantom{+} 12
\end{array}
$$

**Här kommer steg för steg av binär addition senare**

## Binär subtraktion

**Kommer också senare med steg för steg**
