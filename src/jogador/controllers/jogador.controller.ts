import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import {  ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JogadorService } from '../services/jogador.service';

@Controller('jogador')
@ApiTags('jogador')
export class JogadorController {

    constructor(private readonly jogadorService: JogadorService) {
    }

    @Post('/')
    @ApiOperation({
        summary: "Cria um jogador",
        description: "Cria um jogador"
    })
    @ApiResponse({ status: 200, description: "" })
    public async create (@Body() dto: any) {
        return this.jogadorService.create(dto);
    }

    @Get('/')
    @ApiOperation({
        summary: "Retorna todos jogadores",
        description: "Retorna todos jogadores"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findAll () {
        return this.jogadorService.findAll();
    }

    @Get('/:id')
    @ApiOperation({
        summary: "Retorna um jogador",
        description: "Retorna um jogador"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findOne (@Param("id") id: string) {
        return this.jogadorService.findOne(+id);
    }

    @Put('/:id')
    @ApiOperation({
        summary: "Atualiza um jogador",
        description: "Atualiza um jogador"
    })
    @ApiResponse({ status: 200, description: "" })
    public async update (@Param("id") id: string, @Body() dto: any) {          
        return this.jogadorService.update(+id, dto);
    }

    @Delete("/:id")
    @ApiOperation({
        summary: "Remove um jogador",
        description: "Remove um jogador"
    })
    @ApiResponse({ status: 200, description: "" })
    public async remove (@Param("id") id: string) {
        return this.jogadorService.remove(+id);
    }
}