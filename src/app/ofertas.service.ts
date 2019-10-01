import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

import { URL_API } from './app.api'

import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {
    
    public ofertas: Oferta[]    
    public comoUsar: string

    constructor(private http: HttpClient){}

        public getOfertas(): Promise<Oferta[]>{            
            return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)                
                .toPromise()
                .then(res => this.ofertas = res)                                 
        }

        public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
            return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)            
            .toPromise()
            .then(res => this.ofertas = res)
        }

        public getOfertaPorId(id: number): Promise<Oferta[]>{
            return this.http.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`)
                .toPromise()
                .then(res => this.ofertas = res)                                
        }

        public getComoUsarOfertaPorId(id: number) : Promise<Oferta[]>{
            return this.http.get<Oferta[]>(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then(res => this.ofertas = res)                        
        }

        public getOndeFicaOfertaPorId(id: number) : Promise<Oferta[]>{
            return this.http.get<Oferta[]>(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then(res => this.ofertas = res)
        }

        public pesquisaOfertas(termo:string): Observable<Oferta[]> {
            return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
                .pipe(retry(10))                
                
        }

}