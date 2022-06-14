import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Profile } from "./Profile"


describe("Profile", () => {
    it("renders correctly", () => {
        const { container } = render(<Profile />)
        expect(container.innerHTML).toMatch("Профиль")
        expect(screen.getByLabelText("Номер карты")).toHaveAttribute("name", "cardNumber")
        expect(screen.getByLabelText("Имя владельца")).toHaveAttribute("name", "cardName")
        expect(screen.getByLabelText("Срок действия")).toHaveAttribute("name", "expireDate")
        expect(screen.getByLabelText("CVC")).toHaveAttribute("name", "cvc")
    })
})