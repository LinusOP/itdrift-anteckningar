---
title: Föreläsning 1
order: 10
---

# Föreläsning 1 - Inledning till AD

**Föreläsningen började med kursintroduktion, se slides**

I grunden handlar AD om central administration. Alltså att hantera användare, behörigheter, tillgång till tjänster mm.

AD hanterar också datorer i miljön (som är domänanslutna), detta genom s.k Group Policy. Detta är regler för hur datorn ska bete sig, vad användare får eller inte får göra mm.

Utan AD hade vi t.ex fått logga in på varje enskild dator för att skapa användare. Detta funkar om man har 3 datorer, har man 1800 blir det jobbigare.

## Domänkontrollanter

Domänkontrollanten (DC) är den del av en AD miljö som styr och hanterar stora delar. T.ex är det den som faktiskt lagrar användarinformation, hanterar autentisering. Den har flera delar, viktigast är: DNS, LDAP, Kerberos, GPO (Group Policy Objects).

### Filer på domänkontrollanten

Databasens data lagrar som standard i mappen `C:\Windows\NTDS`. Här lagras också loggfiler som standard.

En annan viktig aspekt av filer är "sysvol". Den ligger under `C:\Windows\Sysvol` och är en utdelning som delas ut till användare. T.ex inloggningsskriptet "netlogon".

### Flera DC

I laborationer har vi skapat en DC, i praktiken vill man ofta ha flera DC för redundans.

För att detta ska funka replikeras databas, loggfiler mm mellan alla DC, dvs de är kopierade mellan dessa. Detta bygger på DFS, Distributed File System.

Utöver DC kan man konfigurera filservrar som också utnyttjar DFS och delar ut filerna.

## DNS och AD

En AD domän är också en DNS-zon. När man installerar AD DS rollen får man helt enkelt DNS på köpet. Detta då DNS och AD är väldigt hårt sammanbundet. Detta ger framförallt 2 funktioner i AD:

**Komma åt hostar med namn**

Använder A records och översätter en klients namn till dess IP. Dva att varje domänansluten enhet får ett A record och därmed kan nås med sitt namn i domänen.

**Komma åt funktioner i AD**

DNS används också för att ge åtkomst till olika funktioner i AD, t.ex LDAP (tillgång till databasen) eller Kerberos. Denna funktion bygger på den förra, dvs för att tjänsterna ska funka krävs det också att datornamn kan översättas till adresser.

Kollar man i DNS zonen för ett AD kan man se dessa tjänster, har man t.ex `itd.local` domänen kan man under denna i DNS se en `_tcp` mapp, i denna hittar man t.ex `_kerberos`. Som är ett record (av SRV typ) som berättar hur en klient ska komma åt kerberos tjänsten.

Båda funktionerna är nödvändiga för att AD ska fungera korrekt.
