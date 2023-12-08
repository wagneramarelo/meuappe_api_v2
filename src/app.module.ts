import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { AptoModule } from './Aptos/apto.module';

@Module({
  imports: [
    UserModule,
    AptoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
