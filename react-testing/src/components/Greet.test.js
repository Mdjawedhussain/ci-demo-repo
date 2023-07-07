import {render, screen} from "testing-library/react"

desccribe('Greet component', () => {
    test('render correctly', () => {
        
    })
})
test("render correctly", () => {
    render(<Greet />)
    const h1Elem = screen.getByRole('heading', {
        level: 1
    })
    expect(h1Elem).toBeInTheDocument()
})

test("renders with prop", () => {
    render(<Greet name={"jawed"}/>)

    const h1Elem = screen.getByText("Hello jawed")
    expect(h1Elem).toBeInTheDocument()
})