import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  get historialBusqueda () {
    return this.gifService.historialBusqueda;
  }

  constructor(private gifService: GifService) { }
  
  ngOnInit(): void {
    
  }







}
