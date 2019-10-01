import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../../ofertas.service'
import { Oferta } from '../../shared/oferta.model'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  public oferta: Oferta[]
  public ondeFica: string = ''

  ngOnInit() {    

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
        .then((oferta: Oferta[]) => {
            this.ondeFica = oferta[0].descricao
      })
    })
  }

}
