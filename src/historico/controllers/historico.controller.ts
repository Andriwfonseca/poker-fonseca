import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import {  ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HistoricoService } from '../services/historico.service';

@Controller('historico')
@ApiTags('historico')
export class HistoricoController {

    constructor(private readonly historicoService: HistoricoService) {
    }

    @Post('/')
    @ApiOperation({
        summary: "Cria um historico",
        description: "Cria um historico"
    })
    @ApiResponse({ status: 200, description: "" })
    public async create (@Body() dto: any) {
        return this.historicoService.create(dto);
    }

    @Get('/')
    @ApiOperation({
        summary: "Retorna todo o historico",
        description: "Retorna todo o historico"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findAll () {
        return this.historicoService.findAll();
    }

    @Get('/:id')
    @ApiOperation({
        summary: "Retorna um historico",
        description: "Retorna um historico"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findOne (@Param("id") id: string) {
        return this.historicoService.findOne(+id);
    }

    @Get('/player/:player')
    @ApiOperation({
        summary: "Retorna todo historico do jogador",
        description: "Retorna todo historico do jogador"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findByPlayer (@Param("player") player: number) {
        return this.historicoService.findByPlayer(+player);
    }
    
    @Get('/partida/:partida')
    @ApiOperation({
        summary: "Retorna todo historico do jogador",
        description: "Retorna todo historico do jogador"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findByPartida (@Param("partida") partida: number) {
        return this.historicoService.findByPartida(+partida);
    }

    @Put('/:id')
    @ApiOperation({
        summary: "Atualiza um historico",
        description: "Atualiza um historico"
    })
    @ApiResponse({ status: 200, description: "" })
    public async update (@Param("id") id: string, @Body() dto: any) {          
        return this.historicoService.update(+id, dto);
    }

    @Delete("/:id")
    @ApiOperation({
        summary: "Remove um historico",
        description: "Remove um historico"
    })
    @ApiResponse({ status: 200, description: "" })
    public async remove (@Param("id") id: string) {
        return this.historicoService.remove(+id);
    }
}