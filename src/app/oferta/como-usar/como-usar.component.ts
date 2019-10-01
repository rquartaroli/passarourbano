import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../../ofertas.service'
import { Oferta } from '../../shared/oferta.model'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  public oferta: Oferta[]
  public comoUsar: string = ''

  ngOnInit() {    

    this.route.parent.params.subscribe((parametros: Params) =>{
      this.ofertasService.getComoUsarOfertaPorId(parametros.id)
        .then((oferta: Oferta[]) => {                    
          this.comoUsar = oferta[0].descricao
      })
    })

  }

}
