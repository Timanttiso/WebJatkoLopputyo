# Vaihe 4 Projekti esitelmä
## Verkkokauppa
## Projektin yleiskatsaus
Projektissa tehtiin verkkokauppa. Verkkokaupalla on viisi sivua: Etusivu, tuotesivu, checkout, ostoskori ja adminsivu. 
## Käyttötapaukset
| Käyttötapaus | Implementoitiinko? | demonstraatio/muistiinpanot |
|----------|----------------------|------------------------|
| Tuotteiden selaaminen| Kyllä | Implementoitiin hakemalla kaikki tuotteet etusivulle tietokannasta. |
| Tuotteiden haku | kyllä | Implementoitiin antamalla käyttäjän filteröidä tuotteita nimen perusteella, hakukentän avulla. |
| Ostoskoriin lisääminen | Kyllä | Käyttäjä voi klikata lisää ostoskoriin etusivulta tai tuotesivulta.  |
| Ostoskorista poistaminen | Kyllä | Käyttäjä voi poistaa ostoskorista tuotteita klikkaamalla "poista" nappia. |
| Ostaminen/maksaminen | Kyllä | Käyttäjä voi klikata "Maksa tuotteet" nappia, joka vie checkout sivulle ja poistaa kaikki tuotteet ostoskorista. |
| Tuotteiden lisääminen | Kyllä | Kirjaumisen jälkeen voi lisätä tuotteita /admin sivulla |
| Tuotteiden muokkaaminen | Ei | Lisättyjä tuotteita ei voi muokata |
| Tuotteiden poistaminen | Ei | Lisättyjä tuotteita ei voi poistaa |

## Tekninen toteutus
### 1. Backend
Backendissä käytetään nodea ja express kirjastoa. Backendissä on lisäys, poisto ja hakemis ominaisuudet kaikille taulukoille, server.js tiedostossa. Luodut taulukot on products,shoppingCart ja users. Product taulukossa on kaikki tuotteet, joita verkkokaupassa on myynnissä. ShoppingCartissa on kaikkia ostoskorissa olevat tuotteet. Users kansiossa on käyttäjät. Kirjautuminen vaatii .env tiedoston backendin juureen.
### 2. Frontend
Frontend on toteutettu Reactilla. Frontendissä on components kansio, joka sisältää sovelluksessa käytettävät komponentit. Frontendiin on tehty pääsivu App.jsx, jossa on routeri, joka kuljettaa käyttäjää eri sivuille (esim. ostoskori painike). Sivuja ohjelmassa on pääsivu, ostoskori, admin sivu, checkout sivu ja tuote sivu. Pääsivulta voi nähdä kaikki tuotteet, lisätä tuotteita ostoskoriin, hakea tuotteita hakukentästä, siirtyä ostoskorriin tai katsella tuotteen tietoja menemällä tuote sivulle klikkaamalla tuotetta. Ostoskorista voi katsella siellä olevia tuotteita, tuotteet voi maksaa ja tuotteita voi poistaa ostoskorista. Sivulla on headeri (navigointi palkki), josta voi aina palata takaisin etusivulle painamalla "Verkkokauppa" tekstiä. Admin sivulle (tuotteen lisäys sivulla) on kirjauduttava ja sieltä voi lisätä tuotteita verkkokauppaan. Checkout sivu sisältää kiitoksen ostamisesta ja palauttaa käyttäjän takaisin etusivulle lyhyen ajan jälkeen. Tuote sivulta voi lisätä tuotteen ostoskoriin ja katsella sen tietoja.
### 3.Tietokanta
Tietokanta on SQLite pohjainen. Tietokannassa on kolme taulukkoa. Yksi tuotteille, toinen ostoskorille kolmas käyttäjille. Kahdessa ensimmäisessä taulukossa on id, tuotteen-nimi, tuotteen hinta, tuotteen kuvaus ja linkki tuotteen kuvaan. Kolmannessa taulukossa käyttäjille on id, käyttäjätunnus ja salasana. Salasana on encryptattu.

## Tuotanto prosessi


## Pohdinta ja parannusehdotuksia


## Työpäiväkirja (logbook)
| Päivämäärä  | Käytetyt tunnit | Aiheet |  Tulos | Kuka |
| :---        |     :---:       |     :---:       |     :---:      |     :---:      |
|  |  |  |  |  |

## Esityksen linkki
