import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZaloNotiModule } from './zalo-noti/zalo-noti.module';
import { OauthZaloModule } from './oauth-zalo/oauth-zalo.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ZaloPayModule } from './zalopay/zalopay.module';
import { MomoModule } from './momo/momo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    ZaloNotiModule,
    OauthZaloModule,
    RedisModule,
    ZaloPayModule,
    MomoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
