export class Person {
    name: string;
    price: number;
    image: string;
    location: Location;
    access: boolean;

    constructor(name, price, acc, image, location) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.access = acc;
        this.location = location;
    }

 }
