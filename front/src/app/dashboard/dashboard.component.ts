import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private api: BackendService
    ) { }

  ngOnInit(): void {
    this.api.getIndex().subscribe(
      (data:any)=>{
        console.log(data);
        this.messageService.add(`DashboardComponent: OnInit()`);
        this.messageService.add(`DashboardComponent: OnInit() => ${data}`);
      }
    )
  }
}