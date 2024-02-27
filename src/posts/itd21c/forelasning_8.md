---
title: Föreläsning 8
order: 80
---

# Föreläsning 8 - NAT/PAT

NAT - Network Address Translation - används för att översätta mellan adresser när de routas. Framförallt används det för att översätta mellan privata och publika adresser.

Det möjliggör att man inte behöver mer än en publik adress (kosta ofta pengar att få fler) men ha olika privata adresser till en massa olika hosts. På så sätt har det förlängt livstiden på IPv4 då vi annars inte har tillräckligt med IPv4 adresser för alla enheter som finns i världen.

I NAT delar vi in nät i areor, inom Cisco benämnt insida (inside) och utsida (outside), kan även kallas LAN repsektive WAN. Generellt (men inte alltid) så är insidan då där vi har privata adresser som översätts till publika adresser på utsidan.

## Typer av NAT

### Statisk

Den enklaste formen av NAT är statisk NAT. Här är principen att varje privat IP adress är matchad med en publik IP adress i en tabell. När paket går genom routern
