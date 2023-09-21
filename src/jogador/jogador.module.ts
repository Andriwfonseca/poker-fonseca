import { Module } from "@nestjs/common";
import { JogadorController } from "./controllers/jogador.controller";
import { JogadorService } from "./services/jogador.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    controllers: [JogadorController],
    imports: [PrismaModule],
    providers: [JogadorService]
})
export class JogadorModule { }