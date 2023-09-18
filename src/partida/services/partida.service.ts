import { Injectable } from "@nestjs/common";
import { prismaService } from "src/prisma/prisma.service";
import { PartidaDto } from "../dtos/partida.dto";

@Injectable()
export class PartidaService {
    constructor(private readonly prisma: prismaService) { }

    public async create (dto: PartidaDto) {
        return this.prisma.partidas.create({
            data: {
                data: dto.data,
                qtd_jogadores: dto.qtd_jogadores
            }
        });
    }

    public async findAll () {
        return this.prisma.partidas.findMany();
    }

    public async findOne(id: number){
        return this.prisma.partidas.findFirst({
            where: { id }
        });
    }

    public async update(id: number, dto: PartidaDto){
        return this.prisma.partidas.update({
            where: { id },
            data: { 
                data: dto.data,
                qtd_jogadores: dto.qtd_jogadores
            }
        });
    }

    public async remove(id: number){
        return this.prisma.partidas.delete({
            where: { id }
        })
    }

    public async findByDate(date: string){
        return this.prisma.partidas.findFirst({
            where: { data: date }
        });
    }
}