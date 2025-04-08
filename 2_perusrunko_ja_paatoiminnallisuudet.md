# Vaihe 2 - Perusrunko ja päätoiminnallisuudet
Tässä versiossa ohjelmaan tullaan tekemään ohjelman perustoiminnot ja runko.

## 1. Ympäristö

Sovellus-ympäristönä toimii  paikallinen virtuaalikone.

## 2. Backend

Backendissä käytetään nodea ja express kirjastoa. Backendiin on tässä vaiheessa lisätty lisäys, poisto ja hakemis ominaisuudet kaikille taulukoille. Luodut taulukot on products ja shoppingCart. Product taulukossa on kaikki tuotteet, joita verkkokaupassa on myynnissä. ShoppingCartissa on kaikkia ostoskorissa olevat tuotteet. Kirjautuminen vaatii .env tiedoston backendin juureen.

## 3. Frontend

Frontend toteutetaan Reactilla. Frontendissä on components kansio, joka sisältää sovelluksessa käytettävät komponentit. Frontendiin on tehty pääsivu App.jsx, jossa on routeri, joka kuljettaa käyttäjää eri sivuille (esim. ostoskori painike). Sivuja ohjelmassa on pääsivu, ostoskori, admin sivu, checkout sivu ja tuote sivu. Pääsivulta voi nähdä kaikki tuotteet, lisätä tuotteita ostoskoriin, hakea tuotteita hakukentästä, siirtyä ostoskorriin tai katsella tuotteen tietoja menemällä tuote sivulle klikkaamalla tuotetta. Ostoskorista voi katsella siellä olevia tuotteita, tuotteet voi maksaa ja tuotteita voi poistaa ostoskorista. Sivulla on headeri (navigointi palkki), josta voi aina palata takaisin etusivulle painamalla "Verkkokauppa" tekstiä. Admin sivulle (tuotteen lisäys sivulla) on kirjauduttava ja sieltä voi lisätä tuotteita verkkokauppaan. Checkout sivu sisältää kiitoksen ostamisesta ja palauttaa käyttäjän takaisin etusivulle lyhyen ajan jälkeen. Tuote sivulta voi lisätä tuotteen ostoskoriin ja katsella sen tietoja.

## 4. Tietokanta

Tietokanta on SQLite pohjainen. Tietokannassa on kolme taulukkoa. Yksi tuotteille, toinen ostoskorille kolmas käyttäjille. Kahdessa ensimmäisessä taulukossa on id, tuotteen-nimi, tuotteen hinta, tuotteen kuvaus ja linkki tuotteen kuvaan. Kolmannessa taulukossa käyttäjille on id, käyttäjätunnus ja salasana. Salasana on encryptattu.
Admin sivulle voi kirjautua tunnuksilla:
(root, salainen) = admin
(Superuser, sakanikadik) = peruskäyttäjä

## 5. Perusrunko ja arkkitehtuuri

Frontend:
- Sisältää components kansion, josta sovellusten osat tuodaan App.jsx tiedostoon. Kansiosta löytyy komponentteja, kuten: AdminPage, Header, Product ja singleProudct.
- Sisältää services kansion, jossa olevissa tiedostoissa login ja products otetaan yhteys backendiin käyttäjiä ja tuotteita koskeavia toimintoja varten.

## 6. Toiminnallisuudet

Sovelluksessa toimintoja on tuotteiden listaus etusivulle, tuotteiden hakeminen hakukentällä, tuotteiden omien tuotesivujen avaaminen, tuotteen lisääminen ostoskoriin, tuotteen poistaminen ostoskorista, tuotteiden maksaminen, tuotteen lisäys verkkokauppaan ja admin sivulle kirjautuminen.

## 7. Koodin laatu ja dokumentointi

Koodi kirjoitetaan ja kommentoidaan mahdollisimman selkeästi. 

## 8. Testaus ja virheenkäsittely

Projektissa käytetään yksikkötestejä ja jos aika riittää kurmittavuustestejä (k6) ja end to end testejä, jotka toteutetaan playwrightilla. Jos ei aika riitä tehdään ne mahdollisesti 3 vaiheessa. Yksikkötestit löytyvät frontend/src/components/unitTests

## 9. Käyttöliittymä ja vuorovaikutus

Ohjelman etusivuun tulee lista tuotteista. Ostoskoriin pääsee klikkaamalla ostoskori nappia. Ostoskorista pääsee takaisin klikkaamalla verkkokaupan nimeä headerissä. Ostoskorissa on lista tuotteista, joissa on poisto nappi, jotta tuotteet voi poistaa ostoskorista. Pääsivulla klikkaamalla tuotetta listassa se avaa tuotteen oman tuotesivun, josta näkee tuotteen tietoja, kuten kuvaus, hinta ja nimi. Klikkaamalla lisää ostoskoriin nappia tuote menee ostoskoriin. Tuotteen sivulla klikkamalla verkkokaupan nimeä pääsee takaisin etusivulle.
