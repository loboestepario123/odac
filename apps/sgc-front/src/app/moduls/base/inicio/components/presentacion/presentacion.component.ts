import { Component, OnInit } from '@angular/core';
import { PresentacionService } from './presentacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'odac-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.sass'
})

export class PresentacionComponent implements OnInit {

  r='local'
  posts$: Observable<unknown[]> | undefined;


  constructor(private presentacionService:PresentacionService){}

  ngOnInit(): void {
    const data=this.presentacionService.getRepos();
    console.log(data);

  }

    dos() {
      //const p=this.presentacionService.getPresentacion();
      console.log('p');
    }

}
