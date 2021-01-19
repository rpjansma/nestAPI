import { Controller, Post, Body } from '@nestjs/common';
import { BeerService } from './beer.service';

@Controller('beer')
export class BeerController {
  constructor(private beerService: BeerService) {}

  @Post()
  create(@Body() createBeerDto: BeerDto) {
    this.beerService.create(createBeerDto);
  }
}
