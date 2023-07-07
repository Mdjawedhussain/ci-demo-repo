describe('Skills', () => {
    const skills = [
        {id: 1, name: "plumbing"},
        {id: 2, name: "wiring"},
        {id: 3, name: "painting"},
    ]
    test('renders correctly', () => {
        render(<Skills skills={skills}/>)
        const h2Elem = screen.getByRole('heading', {
            level: 2
        })
        expect(h2Elem).toBeInTheDocument()
        const listElem = screen.getByRole('list')
        expect(listItem).toBeInTheDocument()
    })
    test('render the list of skills in proper order', () => {
        render(<skills skills={skills} />)
        const UlElem = screen.getAllByRole('list item')
        expect(itemElem).toHaveLength(3)
        expect(itemElem[0]).toHaveTextcontent(/plumbing/i)
    })
})