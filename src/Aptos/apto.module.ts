import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AptoController } from './apto.controller';
import { aptoProviders } from './apto.providers';
import { AptoService } from './apto.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AptoController],
  providers: [
    ...aptoProviders,
    AptoService,
  ],
})
export class AptoModule {}