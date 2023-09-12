import { Injectable } from "@nestjs/common";
import { prismaService } from "src/prisma/prisma.service";

@Injectable()
export class JogadorService {
    constructor(private readonly prisma: prismaService) { }

    public async create (dto: any) {
        return this.prisma.jogadores.create({
            data: {
                nome: dto.name
            }
        });
    }

    public async findAll () {
        return this.prisma.jogadores.findMany();
    }

    public async findOne(id: number){
        return this.prisma.jogadores.findFirst({
            where: { id }
        });
    }

    public async update(id: number, dto: any){
        return this.prisma.jogadores.update({
            where: { id },
            data: { 
                nome: dto.name,
                qtd_derrotas: dto.qtd_derrotas,
                qtd_partidas: dto.qtd_partidas,
                qtd_vitorias: dto.qtd_vitorias,
                saldo: dto.saldo
            }
        });
    }

    public async remove(id: number){
        return this.prisma.jogadores.delete({
            where: { id }
        })
    }
}