import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  usdValue: number | null = null;
  phpValue: number | null = null;
  conversionRate: number = 56;  // 1 USD = 56 PHP

  convertCurrency(): void {
    if (this.usdValue !== null) {
      this.phpValue = this.usdValue * this.conversionRate;
    }
  }
}
