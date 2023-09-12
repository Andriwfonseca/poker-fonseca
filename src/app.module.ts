import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';
import { JogadorModule } from './jogador/jogador.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    SampleModule,
    JogadorModule,
    PrismaModule
  ],
  providers: [],
})
export class AppModule { }
