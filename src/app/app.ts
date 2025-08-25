import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Combobox } from './component/combobox/combobox';
import { Country } from './services/country';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, Combobox],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  title = 'Country Combobox';

  countries: string[] = [];
  selectedCountry: string | null = null;

  constructor(private country: Country) {}

  ngOnInit(): void {
    this.country.getAllCountryNames().subscribe({
      next: (names) => {
        this.countries = names;
      },
      error: (err) => {
        console.error('Error loading countries:', err);
      }
    });
  }

  onCountrySelected(country: string): void {
    this.selectedCountry = country;
    console.log('Selected country:', country);
  }
}
