---
title: Datateknisk introduktion - Föreläsning 11
order: 110
---

# Föreläsning 11 - Minneshantering och synkronisering

## Klassisk modell av minneshantering

I tidigare, simplare, datorer kördes ett program i taget. Därmed fick operativsystemet en del av minnet och det programmet kunde använda resten. I dagsläget används denna modell fortfarande i enklare små datorer, microchip osv.

Detta innebar att minnet inte behövde skyddas eftersom det inte fanns flera program i minnet, dock behövdes operativsystemets minnesdel fortfarande skyddas.

Detta system funkar dock inte i dagens datorn där vi behöver flera processer igång samtidigt.

## Minneshantering med flera processer

I dagsläget har vi många processer igång samtidigt, därmed måste vi dela upp minnet i flera små delar för varje process. Ett chip i datorn sköter detta, en så kallad MMU (Memory Management Unit). Denna ser till att processer inte skriver över varandra i minnet.

Om minnet är fullt så finns två alternativ, antingen så får vi låta bli att starta ny processer. Eller så får vi kasta ut processer som inte används tillfälligt, detta kallas swapping.

### Swapping

Swapping innebär enkelt fattat att delar av minnet som inte använts på lång tid flyttas ut till hårddisken för att ge plats åt något nytt som behöver minnet.

## Virtuell minnesadressering

**OBS: Inte samma som virtuella maskiner**

Ett system som underlättar delningen av minnet. Detta genom att varje process får en egen del av minnet som är virtuell, dvs den har inte direkt tillgång till arbetsminnet. Istället kombinerar MMUn delar av hårddisken (för swapping) och det fysiska arbetsminnet och tillsammans skapar dessa det virtuell minne som en process får tillgång till.

Här emellan finns ett så kallat page table, en tabell som översätter adressen som processen tror den sparat på till en faktisk adress i arbetsminnet eller nånstans på hårddisken.

Tabellen skulle kunna se ut något såhär:

| Virtuell plats | Fysisk plats |
| -------------- | ------------ |
| 0              | 5            |
| 1              | Disk         |
| 2              | 3            |

På så sätt behöver processen bara gå från adress 1 till 2 osv, och sen sköter MMUn att dessa är t.ex adress 5 i det faktiska minnet, eller nånstans på hårddisken mm. När programmet exekveras och CPUn behöver tillgång till det som finns på t.ex virtuell plats 2, så frågar den MMUn om den faktiska platsen, den kollar i vårt page table och svarar med fyskisk plats 3 i minnet.

### Page fault

Ett page fault sker då processorn frågar MMUn om en del av minnet som ligger på disk. Säg att programmet vill använda det som finns på den virtuella platsen 1. Då frågar den MMUn om den faktiska platsen, MMUn kollar på vårt page table och svarar att plats 1 ligger på disk, och eftersom CPUn inte direkt kan anropa disken så sker ett page fault.

### Pages och frames

**Kommer sen**

## Synkronisering

Processer behöver i vissa fall tillgång till resurser och I/O enheter. T.ex skrivaren, eller nätverket mm.

Försöker flera processer dock använda skrivaren samtidigt blir det inte bra och dessa kommer nog skriva över varandra.

Det man då använder är något som kallas "Mutual Exclusion"... **Fortsättning kommer**
