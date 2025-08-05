import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-using-switch',
  templateUrl: './message-using-switch.component.html',
  styleUrls: ['./message-using-switch.component.scss']
})
export class MessageUsingSwitchComponent implements OnInit {
  selectedRole: string = ''; 
  roles: string[] = ['Admin', 'Editor', 'Viewer'];

  setRole(role: string) {
    this.selectedRole = role;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
