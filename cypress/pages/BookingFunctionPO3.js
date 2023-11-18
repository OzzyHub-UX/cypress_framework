class BookingFunction {

    getOneWayRoundTripRadioButton(){
        return cy.get('.mr-1')
    }

    getLables(){
        return cy.get('.field > label')
    }

    getBookButton(){
        return cy.get('.Button_c_button__TmkRS')
    }

}

export default BookingFunction