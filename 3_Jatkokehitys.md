# Vaihe 3 - Jatkokehitys
## Valittu parannuskohta
Hakukentän toimivuus. Hakukenttä toimii vain etusivulla. Haluamme muuttaa hakukenttää niin, että sillä voi hakea tuotteita myös muilta sivuilta. 
Se toimisi niin, että kun hakukenttään kirjoittaa jotain ja painaa enter/haku-ikonia, etusivu aukeaa ja näyttää haetut tuotteet. Sivulla voisi myös näkyä teksti 
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

- Verkkokauppaan implementointiin parempi hakukenttä. Hakukenttä toimii nyt jokaisella sivulla. Jos etsii tuotteita esim. Ostoskorissa ja painaa enter/haku-ikonia hakukenttä vie takaisin etusivulle ja näyttää hakutulokset. Hakukenttä myös näyttää virheilmoituksen jos tuotteita ei löytynyt.
- Tiedostossa Header.jsx olevaan Filter komponenttiin lisättiin uusia metodeja, jotka siirtävät sinut etusivulle ja tekevät haun, jos olet muualla kuin etusivulla. Komponentissa on nyt myös metodi enter napin painamisen tunnistamiseen. App.jsx:ään lisättiin tarkistus haettujen tuotteiden määrästä.

- Haasteita tuli esimerkiksi löydettyjen tuotteiden määrän etsimisessä, sillä muuttuja, josta määrää haettiin päivittyi myöhässä. Ongelma ratkaistiin käyttämällä ns. globaalin muuttujan filteredProducts sijasta kyseisen metodin findProduct alussa määriteltyä lokaalia muuttujaa updateProduct, jotta saadaan tarkistukseen mukaan uusimmat arvot. 
