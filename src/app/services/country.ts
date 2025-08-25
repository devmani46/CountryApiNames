import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

type CountryResponse = {
  name: {
    common: string;
    official: string;
  };
};

@Injectable({ providedIn: 'root' })
export class Country {
  private base = 'https://restcountries.com/v3.1/name';

  constructor(private http: HttpClient) {}

  getCountryNames(query: string): Observable<string[]> {
    const url = `${this.base}/${encodeURIComponent(query)}?fields=name`;
    return this.http.get<CountryResponse[]>(url).pipe(
      map(arr => (arr || []).map(c => c.name.common))
    );
  }
}
