import { Injectable } from "@nestjs/common";
import { prismaService } from "src/prisma/prisma.service";

@Injectable()
export class HistoricoService {
    constructor(private readonly prisma: prismaService) { }

    public async create (dto: any) {
        return this.prisma.historico.create({
            data: {
                id_partida: dto.id_partida,
                id_jogador: dto.id_jogador,
                valor_apostado: dto.valor_apostado,
                saldo: dto.saldo
            }
        });
    }

    public async findAll () {
        return this.prisma.historico.findMany();
    }

    public async findOne(id: number){
        return this.prisma.historico.findFirst({
            where: { id }
        });
    }

    public async update(id: number, dto: any){
        return this.prisma.historico.update({
            where: { id },
            data: { 
                id_partida: dto.id_partida,
                id_jogador: dto.id_jogador,
                valor_apostado: dto.valor_apostado,
                saldo: dto.saldo
            }
        });
    }

    public async remove(id: number){
        return this.prisma.historico.delete({
            where: { id }
        })
    }

    public async findByPlayer(player: number){
        return this.prisma.historico.findMany({
            where: { id_jogador: player }
        });
    }
}