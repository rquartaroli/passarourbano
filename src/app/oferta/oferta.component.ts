import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import {CarrinhoService} from "../carrinho.service"

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {  

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
    ) { }

  public oferta: Oferta

  ngOnInit() {    

    this.route.params.subscribe((parametros: Params) => {
        
      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta[]) => {                        
            this.oferta= oferta.shift()            
      })
        .catch((param:any) =>{
          console.log(param)
        })

    })

  }

    ngOnDestroy(){
      
    }

    public adicionarItemCarrinho(): void {
      this.carrinhoService.incluirItem(this.oferta) 
      alert('Item adicionado com sucesso ao carrinho!')
    }

}
