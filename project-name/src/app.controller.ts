import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MintTokensDto } from './dtos/mintTokens.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-randomNumber')
  getRandomNumber(): any {
    return this.appService.getRandomNumber();
  }

  @Get('openBets')
  openBets(@Query('closingTime') closingTime: number): Promise<any> {
    return this.appService.openBets(closingTime);
  }

  @Get('purchaseTokens')
  purchaseTokens(): Promise<any> {
    return this.appService.purchaseTokens();
  }

  @Get('bet')
  bet(): Promise<any> {
    return this.appService.bet();
  }

  @Get('betMany')
  betMany(@Query('times') times: number): Promise<any> {
    return this.appService.betMany(times);
  }

  @Get('closeLottery')
  closeLottery(): Promise<any> {
    return this.appService.closeLottery();
  }

  @Get('prizeWithdraw')
  prizeWithdraw(@Query('amount') amount: number): Promise<any> {
    return this.appService.prizeWithdraw(amount);
  }

  @Get('ownerWithdraw')
  ownerWithdraw(@Query('amount') amount: number): Promise<any> {
    return this.appService.ownerWithdraw(amount);
  }

  @Get('returnTokens')
  returnTokens(@Query('amount') amount: number): Promise<any> {
    return this.appService.returnTokens(amount);
  }

  
  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('other-thing')
  getAnotherThing(): string {
    return this.appService.getAnotherThing();
  }
  @Get('get-address')
  getTokenAddress(): string {
    return this.appService.getTokenAddress();
  }

  @Get('get-total-supply')
  getTotalSupply(): Promise<bigint> {
    return this.appService.getTotalSupply();
  }

  @Get('get-token-balance')
  getTokenBalance(@Query('address') address:string): Promise<bigint> {
    return this.appService.getTokenBalance(address);
  }

  @Post('mint-tokens')
  mintTokens(@Body() body: MintTokensDto): Promise<any> {
    return this.appService.mintTokens(body.address);
  }
  */
}
