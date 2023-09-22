import { Module } from "@nestjs/common";
import { ViewController } from "./controllers/view.controller";
import { JogadorService } from "src/jogador/services/jogador.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    imports: [PrismaModule],
    controllers: [ViewController],
    providers: [JogadorService]
})
export class ViewModule { }