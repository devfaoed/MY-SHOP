import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  firstname: String = '';
  email: String = '';
  address: String = '';
  city: String = '';
  state: String = '';
  zip: String = '';
  cardname: String = '';
  cardnumber: String = '';
  expmonth: String = '';
  expyear: String = '';
  cvv: String = '';

  @Output() addCheckout: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    const checkedd = {
      firstname: this.firstname,
      email: this.email,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      cardname: this.cardname,
      cardnumber: this.cardnumber,
      expmonth: this.expmonth,
      expyear: this.expyear,
      cvv: this.cvv
    }
    this.addCheckout.emit(checkedd);

      this.firstname = '';
      this.email = '';
      this.address = '';
      this.city = '';
      this.state = '';
      this.zip = '';
      this.cardname = '';
      this.cardnumber = '';
      this.expmonth = '';
      this.expyear = '';
      this.cvv = '';
  }

  clearFilter(): void {}

}
