import { Module } from '@nestjs/common';
import { AdresseModule } from './adresse/adresse.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [AdresseModule,ContactModule]
})
export class DirectoriesModule {}
