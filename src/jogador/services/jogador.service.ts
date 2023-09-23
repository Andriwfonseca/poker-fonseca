import { Injectable } from "@nestjs/common";
import { prismaService } from "src/prisma/prisma.service";
import { JogadorDto } from "../dtos/jogador.dto";

@Injectable()
export class JogadorService {
    constructor(private readonly prisma: prismaService) { }

    public async create (dto: JogadorDto) {
        return this.prisma.jogadores.create({
            data: {
                nome: dto.nome,
                qtd_derrotas: dto.qtd_derrotas,
                qtd_partidas: dto.qtd_partidas,
                qtd_vitorias: dto.qtd_vitorias,
                saldo: dto.saldo,
                receber: dto.receber,
                devendo: dto.devendo
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

    public async update(id: number, dto: JogadorDto){
        return this.prisma.jogadores.update({
            where: { id },
            data: { 
                nome: dto.nome,
                qtd_derrotas: dto.qtd_derrotas,
                qtd_partidas: dto.qtd_partidas,
                qtd_vitorias: dto.qtd_vitorias,
                saldo: dto.saldo,
                receber: dto.receber,
                devendo: dto.devendo
            }
        });
    }

    public async remove(id: number){
        return this.prisma.jogadores.delete({
            where: { id }
        })
    }
}