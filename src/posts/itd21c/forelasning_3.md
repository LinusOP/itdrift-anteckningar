---
title: Föreläsning 3
order: 30
---

# Föreläsning 3 - Repetition routing & OSPF

## Repetition router och routing

Som vi diskuterat tidigare är routerns uppgift att koppla ihop flera _olika_ IP-nät (subnät). Varje interface på routern har en egen IP-adress och ligger i ett eget nät. När routern tar emot IP-paket kollar den om den har en egen väg dit (direkansluten) eller om den vet en router att skicka vidare till för att nå nätet. Detta kollar den i routingtabellen.

Specifikt är detta logiken en router följer:

- Är destinationen "directly connected" till routern?
  - Skicka direkt till mottagare
  - Annars gå till nästa steg
- Finns en route till nätet?
  - Skicka till "next hop"
  - Annars gå till nästa steg
- Finns default route (gatway of last resort)?
  - Skicka till den
  - Annars gå till nästa steg
- Inga fler steg
  - Skicka ICMP "Destination Unreachable" datagram till avsändaren

Viktigt här är vår "default route", det är alltså dit en router skickar om den inte har någon annan väg, resterande har vi kollat på innan.

### Hur byggs vår routingtabell upp?

- Directly connected - När vi är direkt anslutna till ett nätverk läggs detta till i routingtabellen
- Statisk route - Routes som manuellt konfigureras med kommandon
- Dynamiska protokoll - Routingprotokoll såsom RIP och OSPF som dynamiskt lär sig routes till olika nätverk

Tänk på att en router lär sig inte routes per automatik (som en switch), vi måste ge den routes eller dynamiska protokoll för att lära sig dessa.

## OSPF

OSPF är precis som RIP ett dybamiskt routing protokoll där routrar delar med sig om vägar till nätverk.

Kollar man på konfigurationen av OSPF liknar den RIP ganska mycket.

RIP:

```
R(conf)# router rip
R(router)# network 192.168.1.0
R(router)# network 192.168.2.0
```

OSPF:

```
R(conf)# router ospf 1
R(router)# network 192.168.1.0 0.0.0.255 area 0
R(router)# network 192.168.2.0 0.0.0.255 area 0
```

Några skillnader:

1. Som vi ser på första raden sätter vi en etta efter `router ospf`, detta har med att man kan ha flera OSPF instanser igånge samtidigt, vi kommer _alltid_ sätta en etta här.
1. Efter nätadressen sätter man en _wildcard mask_, detta kan liknas vid en omvänd nätmask (inte riktigt men nära nog)
1. Efter dett sätter vi ett area-nummer, detta berör vi senare men kortfattat kan OSPF delas in i flera areor för att minska hur många routrar som måste uppdateras vid ändringar i topologin

## Internets uppbyggnad - Interna och externa protokoll

Var passar OSPF (och andra interna protkoll som EIGRP och RIP) in? Och hur skiljer de sig från externa protokoll?

Tittar vi på internets uppbyggnad ser det förenklat ut såhär:

![](/itd21c/f3/fig1.png)

Här kommer mycket nytt på samma gång men kortfattat gäller följande:

ASN (Autonomous System Number) - Nummer för ett AS - Ett AS är ett internt nätverk, t.ex hos ett stort företag eller en ISP. Internet är uppdelat i flera AS, alla har ett nummer (ASN).

Inom ett AS används ett s.k IGP (interior gateway protocol), dessa är t.ex OSPF, RIP, EIGRP eller IS-IS. I bilden ser vi nätverk med OSPF och EIGRP, det är dessa som täcks i kursen.

Däremot måste vi också koppla ihop våra interna nätverk, detta görs med BGP - Border Gateway Protocol - ett protokoll specifikt för att koppla ihop AS. Detta är det enda protokoll som används för detta men ligger också utanför kursen och är inget vi kommer prata om.

Som vi ser använder vi alltså OSPF (och andra interna protokoll) inom interna nätverk.

## Kostnader i OSPF

Uträkningen för kostnaden i OSPF är enkel och bygger på länkhastighet (likt STP i princip), men där finns en fälla.

Formeln ser ut såhär:

$$
\text{kostnad} = \frac{\text{referensbandbredd}}{\text{länkhastighet}}
$$

Det är dock också här vår fälla finns, och den är en kombination av två saker:

- Referensbandbredden är som standard 100 Mb/s
- Lägsta kostnad är 1 (värdet avrundas uppåt till 1 om det är en decimal)

Dvs. att en länk med hastighet 100 Mb/s och 1 Gb/s (1000 Mb/s) får samma kostnad:

$$
\frac{100}{100} = 1
$$

blir det samma som

$$
\frac{100}{1000} = 0,1 \approx 1 \text{(avrundat uppåt)}
$$

Hur löser vi då detta? Jo vi ändrar helt enkelt referensbandbredd, en bra referens kan vara 10 Gb/s (10 000 Mb/s)

Då får vi istället:

$$
\frac{10000}{100} = 100
$$

vilket är större än

$$
\frac{10000}{1000} = 10
$$

På så sätt får vi en tydlig skillnad mellan 100 Mb/s och 1 Gb/s precis som vi vill. Vill man skilja på hastigheter högre än 10 Gb/s (ovanligt, men vissa nätverk kan använda upp till 100 Gb/s) så höjer man helt enkelt referensen.

## OSPF kommunikation mellan routrar

Routrar som "pratar" OSPF gör detta med s.k multicast-adresser. Alltså adresser där flera (men inte alla) enheter lyssnar på samma adress. För OSPF är det adressen `224.0.0.5`. Routrar som vill skicka OSPF-meddelanden till andra gör alltså det genom att skicka ut paket med destinationen `225.0.0.5` som alla andra routrar som kör OSPF lyssnar på. Om en router inte kör OSPF kommer den helt enkelt ignorera paket med denna adress.
