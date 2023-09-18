import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';
import { JogadorModule } from './jogador/jogador.module';
import { PrismaModule } from './prisma/prisma.module';
import { PartidaModule } from './partida/partida.module';
import { HistoricoModule } from './historico/historico.module';
import { ViewModule } from './view/view.module';

@Module({
  imports: [
    SampleModule,
    JogadorModule,
    PartidaModule,
    HistoricoModule,
    ViewModule,
    PrismaModule
  ],
  providers: [],
})
export class AppModule { }
