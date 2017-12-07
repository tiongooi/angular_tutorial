import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string
  email:string
  age:number
  hobbies:string[]
  address: Address
  showEdit:boolean = false

  constructor() { }

  ngOnInit() {
    this.name = 'John Smith'
    this.age = 20
    this.email = 'js@js.com'
    this.hobbies = ['eating','sleeping','partying']
    this.address = {
      street: '32 Bunn St',
      city: 'Sydney',
      state: 'NSW',
    }
  }

  toggleEdit() {
    this.showEdit = !this.showEdit
  }

}

interface Address {
  street:string,
  city:string,
  state:string,
}
