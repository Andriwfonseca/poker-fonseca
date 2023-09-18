import { Module } from "@nestjs/common";
import { ViewController } from "./controllers/view.controller";
import { JogadorService } from "src/jogador/services/jogador.service";
import { prismaService } from "src/prisma/prisma.service";


@Module({
    controllers: [
        ViewController,
    ],
    providers: [
        JogadorService,
        prismaService
    ]
})
export class ViewModule { }