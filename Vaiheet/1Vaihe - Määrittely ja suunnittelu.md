# 1. Vaihe - Määrittely ja suunnittelu

Tässä tiedostossa käydään läpi projektin suunitelmaa. Projekti tulee olemaan verkkokauppa, jossa myydään tietotekniikka tuotteita ja tietokoneen osia.

## 1. Käyttäjä Persoonat

### PC rakentaja
Nimi: Toni 22 v\
Tausta: opiskelija, joka rakentaa ensimmäistä tietokonetta.\
Tavoitteet: Löytää edullisia komponentteja.\
Ammatti/koulutus: It-alan opiskelija\
Käyttäytyminen: seuraa uutuuksia, alennuksia ja arvosteluita.

### Kilpapelaaja
Nimi: Mikael 18 v\
Tausta: E-urheiluun panostava nuori, joka haluaa tehokkaan pelitietokoneen.\
Tavoitteet: Etsii uusia osia päivittämään vanhaa pelikonettansa.\
Ammatti/koulutus: E-urheilija\
Käyttäytyminen: Ostaa testattuja, ammattilaisten suosittelemia tuotteita, joilla on hyvät arvostelut.


## 2. Käyttötapaukset ja käyttötilanteet

```
          +----------------+
          |     Asiakas    |
          +----------------+
                 |
                 | ---------> (Tuotteiden selaaminen)
                 | ---------> (Tuotteiden haku)
                 | ---------> (Ostoskoriin lisääminen)
                 | ---------> (Ostoskorista poistaminen)
                 | ---------> (Ostaminen/Maksaminen)
                 
          +----------------------------+
          |    Järjestelmän valvoja    |
          +----------------------------+
                 |
                 | ---------> (Tuotteiden lisääminen)
                 | ---------> (Tuotteiden muokkaaminen)
                 | ---------> (Tuotteiden poistaminen)
```

## 3. UI prototyypit

![20250313_144105](https://github.com/user-attachments/assets/976aab3c-18eb-4a52-bec4-4514ab4416bf)


## 4. Tietoarkkitehtuuri ja tekninen suunnittelu

Projektissa tullaan käyttämään tietokantoja. Tietokantoihin tullaan tallentamaan tuotetietoja ja session ostoskori. Admini sivulta voi lisätä tuotteita. Kun tuote lisätään se lisätään tietokantaan ja se löytyy sitten etusivulta. Ohjelma toteutetaan Reactilla.

## 5. Projektinhallinta ja käyttäjätestaus

Projektinhallinnassa käytetään githubia. Työhön käytettyä aikaa seurataan githubissa olevaan tiedostoon. Prototyypillä tullaan testaamaan käytettävyyttä ja ymmärrettävyyttä. Käyttäjätestillä on myös tarkoituksena ennustaa mahdollisia tulevia käytettävyys ongelmia.
