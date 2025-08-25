import { Component } from '@angular/core';
import { CountrySearch} from './country-search/country-search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountrySearch],
  template: `<app-country-search />`
})
export class App {}
