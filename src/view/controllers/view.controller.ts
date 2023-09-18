import { Controller, Get, Render } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JogadorService } from 'src/jogador/services/jogador.service';


@Controller('')
@ApiTags('')
export class ViewController {
    constructor(
        private readonly jogadorService: JogadorService
    ){}
    @Get('/')
    @Render('poker-fonseca/home')
    public async home () {          
        return {  layout: "template" };
    }

    @Get('/jogadores')
    @Render('poker-fonseca/jogadores')
    public async createUser () {   
        const viewModel = await this.jogadorService.findAll(); 
        console.log(viewModel, 'viewModel')   
        return {  viewModel, layout: "template" };
    }

    @Get('/cadastros')
    @Render('poker-fonseca/cadastros')
    public async cadastros () {          
        return {  layout: "template" };
    }
}