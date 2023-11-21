import BookingFunction from "../../pages/BookingFunctionPO3";

const bookingFunction = new BookingFunction();

describe("Project - Booking Function", () => {
  beforeEach(() => {
    cy.fixture("bookingFunction").then(function (data) {
      this.NumberOfPassengersDefault = data.NumberOfPassengersDefault;
      this.Passenger1Default = data.Passenger1Default;
      this.OneWayOnePassenger = data.OneWayOnePassenger;
      this.OneWeekDate = data.OneWeekDate;
      this.NumberOfPassengerPassenger1Default = data.NumberOfPassengerPassenger1Default;
      this.Ticket1 = data.Ticket1;
    });
  });


  it("Test Case 01 - Validate the default Book your trip form", function () {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction.getOneWayRoundTripRadioButton().each(($el, index) => {
      cy.wrap($el).should("be.visible").and("be.enabled");

      if ($el.text().includes('One way')) cy.wrap($el).should("be.checked");
      else if ($el.text().includes('Round trip')) cy.wrap($el).should("not.be.checked");
    });


    bookingFunction.getLables().each(($el, index) => {
      cy.wrap($el).should("be.visible").next().and("be.visible");

      if ($el.text().includes('Return'))
        cy.wrap($el).next().find("input").should("have.attr", "disabled");

      if ($el.text().includes('Number of passengers') || $el.text().includes('Passenger'))
        cy.wrap($el)
          .next()
          .find("option")
          .should("have.value", this.NumberOfPassengerPassenger1Default[index - 5]);
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

    bookingFunction.getLables().each(($el) => {
      cy.wrap($el).should("be.visible").next().and("be.visible");

      if ($el.text().includes('Number of passengers'))
        cy.wrap($el)
          .next()
          .find("option")
          .should("have.value", this.NumberOfPassengersDefault);

      else if ($el.text().includes('Passenger'))
        cy.wrap($el)
          .next()
          .find("option")
          .should("have.value", this.Passenger1Default);
    });

    bookingFunction.getBookButton().should("be.visible").and("be.enabled");
  });

  const nextWeekFromTodayDay = bookingFunction.getADateAWeekFromToday()

  it.only("Test Case 03 - Validate the booking for 1 passenger and one way", function () {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction.clickOnOneWay();

    bookingFunction.getSelect().each(($el, index) => {
      cy.wrap($el).select(this.Ticket1[index])
    })

    bookingFunction.getDatePicker().type(bookingFunction.getADateAWeekFromToday())
    bookingFunction.clickOnBook();

  });
});
