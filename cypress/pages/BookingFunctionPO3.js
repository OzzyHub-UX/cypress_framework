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

    getSelect(){
        return cy.get('.field select')
    }

    getBookButton(){
        return cy.get('.Button_c_button__TmkRS')
    }

    getDatePicker(){
        return cy.get('.control:nth-child(2) input')
    }

    e

    clickOnRoundTrip(){
        return this.getRoundTripRadioButton().click()
    }

    clickOnOneWay(){
        return this.getOneWayRadioButton().click()
    }

    clickOnBook(){
        return this.getBookButton().click()
    }



    getADateAWeekFromToday(){
        const date = new Date()
        let nextWeekFromTodayDay = String(date.getDate() + 7)
        let currentMonth = String(date.getMonth() + 1)
        let currentYear = date.getFullYear()
        return (`${currentMonth}/${nextWeekFromTodayDay}/${currentYear}`)
    }

    getaADateAMonthFromToday(){
        const date = new Date()
        let currentDay = String(date.getDate() + 7)
        let currentMonth = String(date.getMonth() + 2)
        let currentYear = date.getFullYear()
        return (`${currentMonth}/${currentDay}/${currentYear}`)
    }



}

export default BookingFunction