import React from "react"
import { render } from "@testing-library/react"
import Map from "./Map"

jest.mock('mapbox-gl', () => () => <div />)

describe("Map", () => {
    it("renders correctly", () => {
        const  { container } = render(<Map />)
        expect(container.innerHTML).toMatch("Карта")
    })
})