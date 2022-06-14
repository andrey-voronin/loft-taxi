import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Login } from "./Login"

describe("Login", () => {
    it("renders correctly", () => {
        const { container } = render(<Login />)
        expect(container.innerHTML).toMatch("Вход")
        expect(screen.getByLabelText("E-mail")).toHaveAttribute("name", "email")
        expect(screen.getByLabelText("Пароль")).toHaveAttribute("name", "password")
    })
})