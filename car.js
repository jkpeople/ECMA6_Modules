class Car {
    constructor(id, make, model, year) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display() {
        document.querySelector("#car-make").textContent = this.make;
        document.querySelector("#car-model").textContent = this.model;
        document.querySelector("#car-year").textContent = this.year;

    }
}

export default Car;