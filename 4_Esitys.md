# Vaihe 4 Projekti esitelmä
## Verkkokauppa
## Projektin yleiskatsaus
Projektissa tehtiin verkkokauppa. Verkkokaupalla on viisi sivua: Etusivu, tuotesivu, checkout, ostoskori ja adminsivu. 
## Käyttötapaukset
| Käyttötapaus | Toteutettu? | demonstraatio/muistiinpanot |
|----------|----------------------|------------------------|
| Tuotteiden selaaminen| Kyllä | Toteutettiin hakemalla kaikki tuotteet etusivulle tietokannasta. |
| Tuotteiden haku | kyllä | Toteutettiin antamalla käyttäjän filteröidä tuotteita nimen perusteella, hakukentän avulla. |
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
### 1. Suunnitelma
Alussa sunnittelimme verkkokaupan ottaen huomioon vain kaikista oleellisimmat toiminnallisuudet, koska käytössä on rajallinen aikataulu. Jouduimme täten karsimaan suunnitelmasta kasan ominaisuuksia. 

### 2. Projektin perusrunko
Aluksi luotiin tietokanta-tiedosto, backend, ja backendiin tietokanta-yhteys ja eri toiminnot (esim. tuotteiden hakemiselle tietokannasta). Seuraavaksi luotiin frontend ja sinne tehtiin komponentteja, joita kutsutaan App.jsx tiedostosta. Etusivulle saatiin tuotteet näkymään ja niihin toiminnallisuudet. Seuraavaksi tehtiin navigointipalkki ja siihen hakukenttä ja tuotesivu yksittäisille tuotteille. Seuraavaksi tehtiin tuotteen lisäys sivu (admin sivu) ja sille kirjautuminen. Kirjautumisesta tehtiin myöhemmin token pohjainen. Tässä vaiheessa parannettiin projektin tyyliä ja ulkonäköä. Jatkokehitys vaiheessa paransimme hakukentän toimivuutta. Lopuksi siirsimme kehitysympäristön paikalliselle virtuaalikoneelle.

## Pohdinta ja parannusehdotuksia
Projektissa tuotteiden näyttäminen etusivulla oli suhteellisen helppo toteuttaa ja se on hyvin toiminut. Yhteistyö onnistui hyvin. Useiden sivujen näyttäminen Reactissa oli meille uusi asia, joten se aiheutti jonkin verran vaikeuksia. Kehitysympäristön asettaminen paikalliseen virtuaalikoneeseen oli odotettua vaikeampaa ja tuotti myös hieman haasteita. Annettuun aikaan verrattuna lopputuloksesta tuli mainio. Ohjelmaan olisi parannettavaa, esim. Parempi kuvan lisäys järjestelmä tuotteille. Tämän hetkinen kuvan lisäys järjestelmä on hyvin hidas ja manuaalinen. Toinen parannus idea olisi lisätä viimeiset kaksi käyttötapausta eli tuotteiden muokkaaminen ja tuotteiden poistaminen. Ostoskori olisi parempi, jos se toimisi esim. session id:n avulla, mutta emme ehtineet sitä toteuttaa. Responsiivisuus vaatisi myös parannusta. 


## Työpäiväkirja (logbook)
| Päivämäärä  | Käytetyt tunnit | Aiheet |  Tulos | Kuka |
| :---        |     :---:       |     :---:       |     :---:      |     :---:      |
|  10.3.2025 | 1,5h | Suunnittelu  | Github repo tehty, idea keksitty ja suunnitelman kirjoitusta aloitettu | Yhdessä |
|  13.3.2025 | 1,5h | Suunnittelu  | Luotu prototyypit eri sivuille. Lisätty teknistä suunnittelua. Tehty usecaset ja käyttäjäpersoonat | Yhdessä |
|  19.3.2025 | 0,5h | Projektin alustus  | Luotu frontend template | Yhdessä |
|  20.3.2025 | 5h | Etusivun ja ostoskorin alustus  | Backend luotu, frontend perusrunko, komponentteja tehty | Yhdessä |
|  25.3.2025 | 4h | Etusivun ja ostoskorin parantaminen plus 2 vaiheen raportin päivitys | Etusivulle lisätty lisää ostoskoriin nappi ja sen toiminnot tehty, Poista nappi ostoskorin tuotteisiin ja sen toiminta tehty, Ostoskoriin ostonappi ja sen toiminnot. CSS paranneltu. | Yhdessä |
|  4.4.2025 | 4h | Hakukentän ja tuotesivun tekeminen | Tuotesivu tehty, hakukenttä tehty, tuotteen lisäys sivu (admin sivu) tehty, parannettu css | Yhdessä |
|  4.4.2025 | 5h | Kirjautuminen tuotteen lisäys (admin) sivulle | Kirjautuminen toimii ja admin sivulle ei nyt pääse ellei ole kirjautunut | Rami |
|  5.4.2025 | 1h | CSS ja tyyli | Parannuksia CSS:lle ja ulkonäölle usealle sivulle | Niko |
|  7.4.2025 | 2h | Tokeni pohjainen kirjautuminen | Vain admin käyttäjä voi nyt lisätä tuotteita | Rami |
|  8.4.2025 | 3h | Viimehetken parannuksia, dokumentoinnin viimeistely | Ostoskoriin tehty siellä olevien tuotteiden määrä painikkeeseen, yksi yksikkötesti, dokumentointia päivitetty | Yhdessä |
|  15.4.2025 | 3,2h | Hakukentän parannus, vaihe 3, vaihe 4 aloitus | Ei olla varmoja onko vaihe 3 valmis. Hakukentällä voi nyt hakea muualtakin, kuin vain etusivulta. Esityksen dokumentaatiota on aloitettu. Yritimme laittaa nettisivua paikalliseen virtuaalikoneeseen, mutta se jäi kesken | Yhdessä |
|  15.4.2025 | 2,5h | Verkkokaupan yhteensopivuuden kehittämistä virtuaalikoneen kanssa ja sen asettamista virtuaalikoneeseen | Toimivuus onnistuneesti luotu virtuaalikoneen kanssa | Niko |
|  15.4.2025 | 2,5h | Verkkokaupan yhteensopivuus paikallisen virtuaalikoneen kanssa | Verkkokauppa toimii virtuaalikoneessa minimaalisin muutoksin | Rami |
|  17.4.2025 | 1h | Jostain syystä vm ei enää toimi, pyrin sitä korjaamaan | Sain verkkokaupan toimimaan virtuaalikoneessa | Rami |
|  23.4.2025 | -h | Esityksen valmistelua | - | Yhdessä |

Käytetyt tunnit: 36,7h \
Tunteja käytetty yhteensä (Yhdessä x 2 + erikseen): 59,4h \
Tunteja käytetty per nenä ((Yhdessä x 2 + erikseen)/2): 29,7h
## Esityksen linkki
