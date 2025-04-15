# Vaihe 3 - Jatkokehitys
## Valittu parannuskohta
Hakukentän toimivuus. Hakukenttä toimmii vain etusivulla. Haluamme muuttaa hakukenttää niin, että sillä voi hakea tuotteita myös muilta sivuilta. 
Se toimisi niin, että kun hakukenttään kirjoittaa jotain ja painaa enter etusivu aukeaa tai jos klikkaa ikonia hakukentässä ja näyttää haetut tuotteet. Sivulla voisi myös näkyä teksti 
"Tuotteita ei löytynyt", jos tuotteita ei löydy.
## Alkuperäinen suunnitelma
Alkuperäisessä suunnitelmassa ei ole kovin tarkasti määritelty hakukentän toimintoa. Hakukenttä toimii, mutta vaatii parannusta.
```
          +----------------+
          |     Asiakas    |
          +----------------+
                 |
                 | ---------> (Tuotteiden haku)
```
## Implementointi

Appiin implementointiin parempi hakukenttä. Hakukenttä toimii nyt jokaisella sivulla. Jos etsii tuotteita esim. Ostoskorissa ja painaa hakunappia tai klikkaa enteriä hakukenttä vie takaisin etusivulle ja näyttää hakutulokset. Hakukenttä myös näyttää virheilmoituksen jos tuotteita ei löytynyt. Header.jsx filter komponentiin lisättiin uusia metodeja, jotka handlaavat etusivulle viennin ja hauntekemisen, muualla kuin etusivulla. Metodi lisättiin myös enter napin painamisen tunnistamiseen. App.jsx:ssään lisättiin tarkistus haettujen tuotteiden määrästä. Haasteita tuli esimerkiksi tuotteiden määrän etsimisessä, sillä muuttuja, josta määrää haettiin päivittyi myöhässä. Ongelma ratkaistiin tajuamalla, että on mahdollista käyttää muuttujaa, josta päivitetään arvo aikaisempaan muuttujaan, jotta saadaan tarkistukseen mukaan uusimmat arvot. 
