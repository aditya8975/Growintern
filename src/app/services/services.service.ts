import { Injectable } from '@angular/core';
import { Foods } from '../shared/food';
import { Tag } from '../shared/tag';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  static getFoodById(arg0: any): Foods {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getFoodById(id:number):Foods{
return this.getAll().find(food =>food.id == id)!;
  }


getAllFoodByTag(tag:string) :Foods[]{
return tag == "All"?
this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));
}
getAllTag():Tag[]{  
return[
  { name:'All',count: 2},
  { name:'shoes',count: 4},
  { name:'shirts',count: 3},
  { name:'electronic',count: 1},
  { name:'other',count: 1}

];
}
  getAll():Foods[]{
    return [
     {
      id:1,
      price:200,
      name:'Red Shoes',
      favoritate:false,
    
      tags:['sport','all'],
      imageUrl:'../../assets/images/b.webp',
    
     origins:['nicky'],
     },
     {
      id:2,
      price:999,
      name:'Black Shoes',
      favoritate:false,
    
      tags:['sport','fashion'],
      imageUrl:'../../assets/images/k.webp',
      
     origins:['jorden'],
     },
     {
      id:3,
      price:990,
      name:'Pink Shoes',
      favoritate:false,
     
      tags:['new','trend'],
      imageUrl:'../../assets/images/d.webp',
 
     origins:['asian'],
     },
     {
      id:4,
      price:500,
      name:'White Shoes',
      favoritate:false,
      
      tags:['fashion','trend'],
      imageUrl:'../assets/images/f.webp',
     
     origins:['airforce'],
     },
     {
      id:5,
      price:500,
      name:'White Shoes',
      favoritate:false,
      
      tags:['fashion','trend'],
      imageUrl:'../assets/images/g.jpg',
     
     origins:['airforce'],
     },
     {
      id:6,
      price:500,
      name:'White Shoes',
      favoritate:false,
  
      tags:['fashion','trend'],
      imageUrl:'../assets/images/n.jpg',
     
     origins:['airforce'],
     },
     {
      id:7,
      price:500,
      name:'White Shoes',
      favoritate:false,
     
      tags:['fashion','trend'],
      imageUrl:'../assets/images/i.jpg',
   
     origins:['airforce'],
     },
     {
      id:8,
      price:500,
      name:'White Shoes',
      favoritate:false,
     
      tags:['fashion','trend'],
      imageUrl:'../assets/images/q.jpg',
   
     origins:['airforce'],
     },
     {
      id:9,
      price:500,
      name:'White Shoes',
      favoritate:false,
     
      tags:['fashion','trend'],
      imageUrl:'../assets/images/x.webp',
   
     origins:['airforce'],
     },
     {
      id:10,
      price:500,
      name:'White Shoes',
      favoritate:false,
     
      tags:['fashion','trend'],
      imageUrl:'../assets/images/s.webp',
   
     origins:['airforce'],
     },
     {
      id:11,
      price:500,
      name:'White Shoes',
      favoritate:false,
     
      tags:['fashion','trend'],
      imageUrl:'../assets/images/o.jpg',
   
     origins:['airforce'],
     },
     {
      id:12,
      price:500,
      name:'White Shoes',
      favoritate:false,
     
      tags:['fashion','trend'],
      imageUrl:'../assets/images/v.jpg',
   
     origins:['airforce'],
     },


    ]
  }
}
