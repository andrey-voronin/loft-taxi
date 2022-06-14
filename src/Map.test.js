import React from "react"
import { render } from "@testing-library/react"
import Map from "./Map"


jest.mock('mapbox-gl', () => ({
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn(),
    }))
}))


describe("Map", () => {
    it("renders correctly", () => {
        const { container } = render(<Map />)
        expect(container.innerHTML).toMatch("Карта")
    })
})