import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.css']
})
export class RhsComponent implements OnInit, OnDestroy {

  message = '';
  message2: string;
  subscription: Subscription;
  constructor(private service: CommunicationsService) { }

  ngOnInit() {
    this.subscription = this.service.getSubscription()
      .subscribe(newMessage => {
        console.log('Got a new message: ', newMessage);
        this.message2 = newMessage;
      });
  }

  getIt() {
    this.message = this.service.getMessage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
