class BookingFunction {

    getOneWayRoundTripRadioButton(){
        return cy.get('.mr-1')
    }

    getRoundTripRadioButton(){
        return cy.get('[value="Round trip"]')
    }

    getOneWayRadioButton(){
        return cy.get('[value="One way"]')
    }

    getLables(){
        return cy.get('.field > label')
    }

    getBookButton(){
        return cy.get('.Button_c_button__TmkRS')
    }

    clickOnRoundTrip(){
        return this.getRoundTripRadioButton().click()
    }

    clickOnOneWay(){
        return this.getOneWayRadioButton().click()
    }

    clickOnBook(){
        return this.getBookButton().click()
    }

}

export default BookingFunction