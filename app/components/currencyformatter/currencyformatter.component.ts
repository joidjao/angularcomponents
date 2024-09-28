import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount = 0;
  formattedCurrency = '';

  formatCurrency(currencyType: string) {
    switch (currencyType) {
      case 'USD':
        this.formattedCurrency = `$${this.amount.toFixed(2)}`;
        break;
      case 'PHP':
        this.formattedCurrency = `₱${this.amount.toFixed(2)}`;
        break;
      case 'EUR':
        this.formattedCurrency = `€${this.amount.toFixed(2)}`;
        break;
    }
  }
}
