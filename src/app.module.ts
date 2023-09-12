import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';
import { JogadorModule } from './jogador/jogador.module';
import { PrismaModule } from './prisma/prisma.module';
import { PartidaModule } from './partida/partida.module';

@Module({
  imports: [
    SampleModule,
    JogadorModule,
    PartidaModule,
    PrismaModule
  ],
  providers: [],
})
export class AppModule { }
