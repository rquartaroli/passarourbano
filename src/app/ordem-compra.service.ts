import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Pedido } from './shared/pedido.model'
import { Observable } from 'rxjs'
import { URL_API } from './app.api'

@Injectable()
export class OrdemCompraService{

    constructor(private http: HttpClient) {}
    
    public efetivarCompra(pedido: Pedido): Observable<number> {        

        let headers: HttpHeaders = new HttpHeaders().set('Content-type', 'application/json')        
        
        return this.http.post<number>(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            { headers: headers }
        )
        
    }
}