import { Module } from "@nestjs/common";
import { PartidaController } from "./controllers/partida.controller";
import { PartidaService } from "./services/partida.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    controllers: [PartidaController],
    imports: [PrismaModule],
    providers: [PartidaService]
})
export class PartidaModule { }