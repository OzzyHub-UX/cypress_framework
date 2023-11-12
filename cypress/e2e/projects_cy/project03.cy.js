import BookingFunction from "../../pages/BookingFunctionPO3";

const bookingFunction = new BookingFunction();

describe("Project - Booking Function", () => {
  it("Test Case 01 - Validate the default Book your trip form", () => {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction.getOneWayRoundTripRadioButton().each(($el) => {
      cy.wrap($el)
        .contains("Round trip")
        .should("be.enabled")
        .and("be.displayed")
        .and("be.checked");
    });
  });
});
