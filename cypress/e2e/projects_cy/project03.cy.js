import BookingFunction from "../../pages/BookingFunctionPO3";

const bookingFunction = new BookingFunction();

describe("Project - Booking Function", () => {
  beforeEach(() => {
    cy.fixture("bookingFunction").then(function (data) {
      this.NumberOfPassengersDefault = data.NumberOfPassengersDefault;
      this.Passenger1Default = data.Passenger1Default;
      this.OneWayOnePassenger = data.OneWayOnePassenger;
      this.OneWeekDate = data.OneWeekDate;
    });
  });

  it("Test Case 01 - Validate the default Book your trip form", function () {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction.getOneWayRoundTripRadioButton().each(($el, index) => {
      cy.wrap($el).should("be.visible").and("be.enabled");

      if (index === 0) cy.wrap($el).should("be.checked");
      if (index === 1) cy.wrap($el).should("not.be.checked");
    });

    bookingFunction.getLables().each(($el, index) => {
      cy.wrap($el).should("be.visible").next().and("be.visible");

      if (index === 4)
        cy.wrap($el).next().find("input").should("have.attr", "disabled");

      if (index === 5)
        cy.wrap($el)
          .next()
          .find("option")
          .should("have.value", this.NumberOfPassengersDefault);

      if (index === 6)
        cy.wrap($el)
          .next()
          .find("option")
          .should("have.value", this.Passenger1Default);
    });

    bookingFunction.getBookButton().should("be.visible").and("be.enabled");
  });

  it("Test Case 02 - Validate the Book your trip form when Round trip is selected", function () {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction
      .clickOnRoundTrip()
      .should("be.checked")
      .parent()
      .parent()
      .contains("One way")
      .should("not.be.checked");

    bookingFunction.getLables().each(($el, index) => {
      cy.wrap($el).should("be.visible").next().and("be.visible");

      if (index === 5)
        cy.wrap($el)
          .next()
          .find("option")
          .should("have.value", this.NumberOfPassengersDefault);
      if (index === 6)
        cy.wrap($el)
          .next()
          .find("option")
          .should("have.value", this.Passenger1Default);
    });

    bookingFunction.getBookButton().should("be.visible").and("be.enabled");
  });

  it.only("Test Case 03 - Validate the booking for 1 passenger and one way", function () {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction.clickOnOneWay();

    bookingFunction.getLables().each(($el, index) => {
      if (index === 3) cy.wrap($el).next().children().type(this.OneWeekDate);
      if (index === 4)
        cy.wrap($el).next().find("input").should("have.attr", "disabled");

      cy.wrap($el).next().children().select(this.OneWayOnePassenger[index]);
    });

    bookingFunction.clickOnBook();
  });
});
