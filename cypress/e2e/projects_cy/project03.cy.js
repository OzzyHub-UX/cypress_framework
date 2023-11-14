import BookingFunction from "../../pages/BookingFunctionPO3";

const bookingFunction = new BookingFunction();

describe("Project - Booking Function", () => {
  it("Test Case 01 - Validate the default Book your trip form", () => {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

        bookingFunction.getOneWayRoundTripRadioButton().each(($el) => {
          cy.wrap($el)
          .should('be.visible')
          .and('be.enabled')
        })

        bookingFunction.getOneWayRadioButton()
        .should('be.checked')

        bookingFunction.getRoundTripRadioButton()
        .should('not.be.checked')

        bookingFunction.getCabinFromTo().find('label').each(($el) => {
            cy.wrap($el)
            .should('be.visible')
        })

        bookingFunction.getCabinFromTo().find('.select').each(($el) => {
            cy.wrap($el)
            .should('be.visible')
        })

        bookingFunction.getDepart()
        .find('label')
        .should('be.visible')
        .parent()
        .find('.control')
        .and('be.visible')

        bookingFunction.getReturn()
        .find('label')
        .should('be.visible')
        .parent()
        .find('input')
        .and('be.disabled')



        

  });
});
