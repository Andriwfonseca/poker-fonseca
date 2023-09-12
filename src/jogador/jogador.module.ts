import { Module } from "@nestjs/common";
import { JogadorController } from "./controllers/jogador.controller";
import { JogadorService } from "./services/jogador.service";
import { prismaService } from "src/prisma/prisma.service";


@Module({
    controllers: [
        JogadorController,
    ],
    providers: [
        JogadorService,
        prismaService
    ]
})
export class JogadorModule { }