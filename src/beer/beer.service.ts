import { Injectable } from '@nestjs/common';
import { Beer } from 'src/beer/interfaces/beer.interface';

@Injectable()
export class BeerService {
  private readonly beers: Beer[] = [];

  create(beer: Beer) {
    this.beers.push(beer);
  }

  allBeers() {
    return this.beers;
  }
}
