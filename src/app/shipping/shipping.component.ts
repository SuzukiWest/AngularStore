import { Component, OnInit } from '@angular/core';

/* Observable? */
import { Observable } from 'rxjs';
/* Service */
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  /* Include shipping cost to total */

  constructor(private cartService: CartService) {}
}
