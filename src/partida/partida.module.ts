import { Module } from "@nestjs/common";
import { PartidaController } from "./controllers/partida.controller";
import { PartidaService } from "./services/partida.service";
import { prismaService } from "src/prisma/prisma.service";


@Module({
    controllers: [
        PartidaController,
    ],
    providers: [
        PartidaService,
        prismaService
    ]
})
export class PartidaModule { }