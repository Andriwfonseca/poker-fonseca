import { Module } from '@nestjs/common';
import { JogadorModule } from './jogador/jogador.module';
import { PrismaModule } from './prisma/prisma.module';
import { PartidaModule } from './partida/partida.module';
import { HistoricoModule } from './historico/historico.module';
import { ViewModule } from './view/view.module';

@Module({
  imports: [
    JogadorModule,
    PartidaModule,
    HistoricoModule,
    ViewModule
  ],
  providers: [],
})
export class AppModule { }
