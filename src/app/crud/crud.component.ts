import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title : String = 'Aplicacion Empresarial';
  msg :string = '';

  empleados = [
    {'brm': 'BRM15690','position':' Desarrollador Front End Sr','name':'Jesus Alexis','photo':'foto.jpg'},
    {'brm': 'BRM14620','position':' Desarrollador Front End Jr','name':'Jose Eduardo','photo':'foto1.jpg'},
    {'brm': 'BRM14620','position':'Desarrollador Front End Jr','name':'Luis Manuel','photo':'foto2.jpg'}
  ];

  position = [
    {'position': 'Desarrollador FrontEnd Sr'},
    {'position2': 'Desarrollador FrontEnd Jr'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate: boolean = true;
  


  addEmpleado():void {
    this.empleados.push(this.model);
    this.msg = 'Empleado Agregado';
  }

  deleteEmpleado():void {
    let i = this.myValue;
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer){
      this.empleados.splice(i,1);
    }
    this.msg = 'Empleado Eliminado';
  }

  myValue: any
  editEmpleado():void {
    this.hideUpdate = false;
    let i = this.myValue;
    this.model2.brm = this.empleados[i].brm;
    this.model2.name = this.empleados[i].name;
    this.model2.position = this.empleados[i].position;
    this.myValue = i;
  } 

  updateEmpleado():void {
    let i = this.myValue;
    for (let j = 0; j < this.empleados.length; j++) {
      if(i==j){
        this.empleados[i] = this .model2;
        this.model2 = {};
      }
    }
    this.msg = 'Empleado Actualizado';
  }


  closeAlert():void{
    this.msg = '';
  }

}
