// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Country} from '../services/country';

// @Component({
//   selector: 'app-country-search',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './country-search.html',
//   styleUrls: ['./country-search.scss']
// })
// export class CountrySearch {
//   query = '';
//   names: string[] = [];
//   loading = false;
//   error: string | null = null;

//   constructor(private country: Country) {}

//   search() {
//     const q = this.query.trim();
//     if (!q) {
//       this.names = [];
//       this.error = null;
//       return;
//     }
//     this.loading = true;
//     this.error = null;
//     this.names = [];

//     this.country.getCountryNames(q).subscribe({
//       next: (names) => {
//         this.names = names;
//         this.loading = false;
//       },
//       error: () => {
//         this.error = 'No countries found.';
//         this.loading = false;
//       }
//     });
//   }
// }
