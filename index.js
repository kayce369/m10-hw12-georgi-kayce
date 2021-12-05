// YOUR CODE HERE

class Car {
    constructor (make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    honk() {
        console.log('beep beep!')
    }
    performMaintenance() {
        setTimeout(() => {
            console.log ('Maintenance Complete')
        }, 3000);
    }
}