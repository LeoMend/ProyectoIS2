import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders} from '@angular/common/http';

export interface Item { name: string;  }

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

 

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  public itemDoc: AngularFirestoreDocument<Item>;


  constructor(public afs: AngularFirestore,
    private http:HttpClient
    ) { 

    this.itemsCollection = afs.collection<Item>('items');/// nombre base de datos 'items'
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    }

getEquipo():Observable<any>{return this.http.get("http://localhost:51005/api/Equipos");}
getCarrera():Observable<any>{return this.http.get("http://localhost:51005/api/Carreras");}

addEquipo(equipo:any)
{
  let json=JSON.stringify(equipo);
  let headers=new HttpHeaders().set('content-Type','application/json');

  return this.http.post("http://localhost:51005/api/Equipos",json,{headers:headers});
}

deleteEquipo(identificador):Observable<any>
{
  return this.http.delete("http://localhost:51005/api/Equipos/"+identificador);
}
















agregarBaseDato(item: Item) {
    this.itemsCollection.add(item);
}


obtenerEquipo(){
  return this.items;
}

obtenerUno(item){
  this.itemDoc=this.afs.doc<Item>(`items/${item.id}`);
  return this.itemDoc;
 }

 EditarItem(item){
  this.itemDoc=this.afs.doc<Item>(`items/${item.id}`);////items es base de datos
   this.itemDoc.update(item);
   }
  
   eliminarItem(item){
    this.itemDoc=this.afs.doc<Item>(`items/${item.id}`);////items es base de datos
    this.itemDoc.delete();
    }

   
}

