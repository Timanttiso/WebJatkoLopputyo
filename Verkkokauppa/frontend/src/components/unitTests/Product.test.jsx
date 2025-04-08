import { render, screen } from '@testing-library/react'
import Product from '../Product'

// testaa Product.jsx komponentin toimintaa
test('renderöi tuotteen nimen, hinnan, kuvauksen ja kuvan', () => {
    // luo tuotteen
    const product = {
        productName: 'Tuotteen nimi',
        price: 14.99,
        description: 'Tuotteen kuvaus',
        imageLink: 'kuva.jpg',
    }

    // Renderöi tuotteen sivulle
    render(<Product product={product} />)

    // Etsii sivulta tuotteen -nimen, -hinna, -kuvauksen ja -kuvan
    const productName = screen.getByText(
        'Tuotteen nimi', { exact: false }
    )

    const price = screen.getByText(
        '14.99', { exact: false }
    )

    const description = screen.getByText(
        'Tuotteen kuvaus', { exact: false }
    )

    // Etsii kuvaa sitä kuvaavan tekstin avulla
    const imageLink = screen.getByAltText(
        'Tuotteen nimi', { exact: false }
    )

    expect(productName).toBeDefined()
    expect(price).toBeDefined()
    expect(description).toBeDefined()
    expect(imageLink).toBeDefined()
})