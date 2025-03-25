# Vaihe 2 - Perusrunko ja päätoiminnallisuudet
Tässä versiossa ohjelmaan tullaan tekemään ohjelman perustoiminnot ja runko.

## 1. Ympäristö

Sovellus-ympäristö toteutetaan paikalliselle virtuaalikoneelle.

## 2. Backend

Backendissä käytetään nodea ja express kirjastoa. 

## 3. Frontend

Frontend toteutetaan Reactilla. Frontendissä on oltava components kansio, joka sisältää sovelluksessa käytettävät komponentit.

## 4. Tietokanta

Tietokanta on SQLite pohjainen. Tietokannassa on kaksi taulukkoa. Yksi tuotteille ja toinen ostoskorille. Kummassakin taulukossa on id, tuotteen-nimi, tuotteen hinta, tuotteen kuvaus ja linkki tuotteen kuvaan.

## 5. Perusrunko ja arkkitehtuuri

Frontendissä on components kansio, josta sovellusten osat tuodaan app.jsx tiedostoon. Mahdolliset end to end testit tehdään erilliseen kansioon backendin ja frontendin ulkopuolelle.

## 6. Toiminnallisuudet

Sovelluksessa toimintoja on esim. Tuotteiden listaus etusivulle, tuotteiden omien sivujen avaaminen, tuotteen lisääminen ostoskoriin ja tuotteen poistaminen ostoskorista. 

## 7. Koodin laatu ja dokumentointi

Add something

## 8. Testaus ja virheenkäsittely

Add something

## 9. Käyttöliittymä ja vuorovaikutus

Ohjelman pää käyttöliittymään tulee lista tuotteista. Ostoskoriin pääsee klikkaamalla ostoskori nappia. Ostoskorista pääsee takaisin klikkaamalla takaisin nappia. Ostoskorissa on lista tuotteista, joissa on poisto nappi, jotta tuotteet voi poistaa. Pääsivulla klikkaamalla tuotetta listassa se avaa tuotteen oman sivun, josta näkee tuotteen tietoja, kuten kuvaus, hinta ja nimi. Klikkaamalla lisää ostoskoriin nappia tuote menee ostoskoriin. Tuoteen sivulla klikkamalla takaisin nappia pääsee takaisin etusivulle.
