import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const headerH2 = screen.queryByText(/Checkout Form/i)

    expect(headerH2).toBeInTheDocument();
    expect(headerH2).toBeTruthy();
    expect(headerH2).toHaveTextContent(/Checkout Form/i)

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const checkoutBtn = screen.getByRole('button')

    userEvent.click(checkoutBtn)

    const succMess = screen.getByTestId(/successMessage/i)

    expect(succMess).toBeInTheDocument()
});
