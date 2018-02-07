import { Locate } from './loc';

export class Location {

    city: string;
    state: string;
    country: string;
    pincode: string;
    locate: Locate;

    constructor(city, state, country, pincode, loc) {
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
        this.locate = loc;
    }

}
