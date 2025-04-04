# Vaihe 2 - Perusrunko ja päätoiminnallisuudet
Tässä versiossa ohjelmaan tullaan tekemään ohjelman perustoiminnot ja runko.

## 1. Ympäristö

Sovellus-ympäristö toteutetaan paikalliselle virtuaalikoneelle.

## 2. Backend

Backendissä käytetään nodea ja express kirjastoa. Backendiin on tässä vaiheessa lisätty lisäys, poisto ja hakemis ominaisuudet kaikille tableille. Luodut tablet on products ja shoppingCart. Product tablessa on kaikki tuotteet, joita verkkokaupassa on myynnissä. ShoppingCartissa on kaikkia ostoskorissa olevat tuotteet. 

## 3. Frontend

Frontend toteutetaan Reactilla. Frontendissä on oltava components kansio, joka sisältää sovelluksessa käytettävät komponentit. Frontendiin on tehty pääsivu, jossa on routeri, joka kuljettaa käyttäjää eri sivuille napeista, yms. Sivuja ohjelmassa on pääsivu, ostoskori, admin sivu, checkout sivu ja tuote sivu. Pääsivulta voi nähdä kaikki tuotteet, lisätä tuotteita ostoskoriin, hakea tuotteita, siirtyä ostoskorriin tai katsella tuotteen tietoja menemällä tuote sivulle klikkaamalla tuotetta. Ostoskorista voi katsella siellä olevia tuotteita ja tuotteita voi poistaa ostoskorista. Sivulla on headeri, josta voi aina palata takaisin etusivulle. admin sivulla on salasana ja sieltä voi lisätä tuotteita verkkokauppaan.

## 4. Tietokanta

Tietokanta on SQLite pohjainen. Tietokannassa on kaksi taulukkoa. Yksi tuotteille ja toinen ostoskorille. Kummassakin taulukossa on id, tuotteen-nimi, tuotteen hinta, tuotteen kuvaus ja linkki tuotteen kuvaan.

## 5. Perusrunko ja arkkitehtuuri

Frontendissä on components kansio, josta sovellusten osat tuodaan app.jsx tiedostoon.

## 6. Toiminnallisuudet

Sovelluksessa toimintoja on esim. Tuotteiden listaus etusivulle, tuotteiden omien sivujen avaaminen, tuotteen lisääminen ostoskoriin ja tuotteen poistaminen ostoskorista. 

## 7. Koodin laatu ja dokumentointi

Koodi kirjoitetaan ja kommentoidaan mahdollisimman selkeästi. 

## 8. Testaus ja virheenkäsittely

Projektissa käytetään yksikkötestejä ja jos aika riittää kurmittavuustestejä (k6) ja end to end testejä, jotka toteutetaan playwrightilla.

## 9. Käyttöliittymä ja vuorovaikutus

Ohjelman pää käyttöliittymään tulee lista tuotteista. Ostoskoriin pääsee klikkaamalla ostoskori nappia. Ostoskorista pääsee takaisin klikkaamalla verkkokaupan nimeä headerissä. Ostoskorissa on lista tuotteista, joissa on poisto nappi, jotta tuotteet voi poistaa. Pääsivulla klikkaamalla tuotetta listassa se avaa tuotteen oman sivun, josta näkee tuotteen tietoja, kuten kuvaus, hinta ja nimi. Klikkaamalla lisää ostoskoriin nappia tuote menee ostoskoriin. Tuoteen sivulla klikkamalla takaisin nappia pääsee takaisin etusivulle.
