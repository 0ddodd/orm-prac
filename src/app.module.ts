import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entity/auth.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username: 'root',
      password: 'root',
      database: 'test-orm',
      entities:[User],
      synchronize:true
    }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
