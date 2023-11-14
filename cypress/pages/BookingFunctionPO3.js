class BookingFunction {

    getOneWayRoundTripRadioButton(){
        return cy.get('.mr-1')
    }

    getOneWayRadioButton(){
        return cy.get('.radio:nth-child(1) > input')
    }

    getRoundTripRadioButton(){
        return cy.get('.radio:nth-child(2) > input')
    }

    getCabinFromTo(){
        return cy.get('.field:nth-child(2),.field:nth-child(3),.field:nth-child(4)')
    }

    getDepart(){
        return cy.get('.field:nth-child(5)')
    }

    getReturn(){
        return cy.get('.field:nth-child(6)')
    }

}

export default BookingFunction