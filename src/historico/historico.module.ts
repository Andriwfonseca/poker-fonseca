import { Module } from "@nestjs/common";
import { HistoricoController } from "./controllers/historico.controller";
import { HistoricoService } from "./services/historico.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    controllers: [HistoricoController],
    imports: [PrismaModule],
    providers: [HistoricoService ]
})
export class HistoricoModule { }