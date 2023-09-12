import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import {  ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PartidaService } from '../services/partida.service';

@Controller('partida')
@ApiTags('partida')
export class PartidaController {

    constructor(private readonly partidaService: PartidaService) {
    }

    @Post('/')
    @ApiOperation({
        summary: "Cria uma partida",
        description: "Cria uma partida"
    })
    @ApiResponse({ status: 200, description: "" })
    public async create (@Body() dto: any) {
        return this.partidaService.create(dto);
    }

    @Get('/')
    @ApiOperation({
        summary: "Retorna todas partidas",
        description: "Retorna todas partidas"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findAll () {
        return this.partidaService.findAll();
    }

    @Get('/:id')
    @ApiOperation({
        summary: "Retorna uma partida",
        description: "Retorna uma partida"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findOne (@Param("id") id: string) {
        return this.partidaService.findOne(+id);
    }

    @Get('/data/:date')
    @ApiOperation({
        summary: "Retorna uma partida",
        description: "Retorna uma partida"
    })
    @ApiResponse({ status: 200, description: "" })
    public async findByDate (@Param("date") date: string) {
        return this.partidaService.findByDate(date);
    }

    @Put('/:id')
    @ApiOperation({
        summary: "Atualiza uma partida",
        description: "Atualiza uma partida"
    })
    @ApiResponse({ status: 200, description: "" })
    public async update (@Param("id") id: string, @Body() dto: any) {          
        return this.partidaService.update(+id, dto);
    }

    @Delete("/:id")
    @ApiOperation({
        summary: "Remove uma partida",
        description: "Remove uma partida"
    })
    @ApiResponse({ status: 200, description: "" })
    public async remove (@Param("id") id: string) {
        return this.partidaService.remove(+id);
    }
}