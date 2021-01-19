import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeerController } from './beer/beer.controller';
import { BeerService } from './beer/beer.service';

@Module({
  imports: [],
  controllers: [AppController, BeerController],
  providers: [AppService, BeerService],
})
export class AppModule {}
