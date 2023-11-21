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
      this.Ticket2 = data.Ticket2;
      this.Ticket3 = data.Ticket3
      this.TicketChild = data.TicketChild
      this.Ticket3Child = data.Ticket3Child
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

  it("Test Case 03 - Validate the booking for 1 passenger and one way", function () {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction.clickOnOneWay();

    bookingFunction.getSelect().each(($el, index) => {
      cy.wrap($el).select(this.Ticket1[index])
    })

    bookingFunction.getDatePicker().each(($el, index) => {
      if(index === 0) cy.wrap($el).clear().type(`${bookingFunction.getADateAWeekFromToday()}{enter}`)
      if(index === 1) cy.wrap($el).should('have.attr', 'disabled')
    })

    bookingFunction.clickOnBook()

    bookingFunction.get3Text().each(($el) => {
      if($el.text().includes('DEPART')) cy.wrap($el).should('have.text', 'DEPART')
      if($el.text().includes('IL')) cy.wrap($el).should('have.text', 'IL to FL')
      if($el.text().includes('Tue Nov 28 2023')) cy.wrap($el).should('have.text', 'Tue Nov 28 2023')
    })

    bookingFunction.get3OtherText().find('p').each(($el) => {
      if($el.text().includes('Number')) cy.wrap($el).should('have.text', 'Number of Passengers: 1')
      if($el.text().includes('Adult')) cy.wrap($el).should('have.text', 'Passenger 1: Adult (16-64)')
      if($el.text().includes('Cabin')) cy.wrap($el).should('have.text', 'Cabin class: Business')
    })
  })

  it("Test Case 04 - Validate the booking for 1 passenger and round trip", function () {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction.clickOnRoundTrip()

    bookingFunction.getSelect().each(($el, index) => {
      cy.wrap($el).select(this.Ticket2[index])
    })

    bookingFunction.getDatePicker().each(($el, index) => {
      if(index === 0) cy.wrap($el).clear().type(`${bookingFunction.getADateAWeekFromToday()}{enter}`)
      if(index === 1) cy.wrap($el).clear().type(`${bookingFunction.getaADateAMonthFromToday()}{enter}`)
    })

    bookingFunction.clickOnBook()

    bookingFunction.get3Text().each(($el) => {
      if($el.text().includes('DEPART')) cy.wrap($el).should('have.text', 'DEPART')
      if($el.text().includes('CA to IL')) cy.wrap($el).should('have.text', 'CA to IL')
      if($el.text().includes('Tue Nov 28 2023')) cy.wrap($el).should('have.text', 'Tue Nov 28 2023')
      if($el.text().includes('IL to CA')) cy.wrap($el).should('have.text', 'IL to CA')
      if($el.text().includes('Thu Dec 28 2023')) cy.wrap($el).should('have.text', 'Thu Dec 28 2023')
    })

    bookingFunction.get3OtherText().find('p').each(($el) => {
      if($el.text().includes('Number')) cy.wrap($el).should('have.text', 'Number of Passengers: 1')
      if($el.text().includes('Adult')) cy.wrap($el).should('have.text', 'Passenger 1: Adult (16-64)')
      if($el.text().includes('Cabin')) cy.wrap($el).should('have.text', 'Cabin class: First')
    })
  })

  it("Test Case 05 - Validate the booking for 1 passenger and round trip", function () {
    cy.visit("https://techglobal-training.netlify.app/frontend/project-3");

    bookingFunction.clickOnOneWay() 

    bookingFunction.getSelect().each(($el, index) => {
      cy.wrap($el).select(this.Ticket3[index])
    })

    bookingFunction.getPassenger2().select(this.Ticket3Child)

    bookingFunction.getDatePicker().each(($el, index) => {
      if(index === 0) cy.wrap($el).clear().type(`${bookingFunction.getaADateADayFromToday()}{enter}`)
      if(index === 1) cy.wrap($el).should('have.attr', 'disabled')
    })

    bookingFunction.clickOnBook()

    bookingFunction.get3Text().each(($el) => {
      if($el.text().includes('DEPART')) cy.wrap($el).should('have.text', 'DEPART')
      if($el.text().includes('NY to TX')) cy.wrap($el).should('have.text', 'NY to TX')
      if($el.text().includes('Wed Nov 29 2023')) cy.wrap($el).should('have.text', 'Wed Nov 29 2023')
    })

    bookingFunction.get3OtherText().find('p').each(($el) => {
      if($el.text().includes('Number')) cy.wrap($el).should('have.text', 'Number of Passengers: 2')
      if($el.text().includes('Adult')) cy.wrap($el).should('have.text', 'Passenger 1: Adult (16-64)')
      if($el.text().includes('Child')) cy.wrap($el).should('have.text', 'Passenger 2: Child (2-11)')
      if($el.text().includes('Cabin')) cy.wrap($el).should('have.text', 'Cabin class: Premium Economy')
    })
  })
});
