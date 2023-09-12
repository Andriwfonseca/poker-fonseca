import { Module } from "@nestjs/common";
import { HistoricoController } from "./controllers/historico.controller";
import { HistoricoService } from "./services/historico.service";
import { prismaService } from "src/prisma/prisma.service";


@Module({
    controllers: [
        HistoricoController,
    ],
    providers: [
        HistoricoService,
        prismaService
    ]
})
export class HistoricoModule { }