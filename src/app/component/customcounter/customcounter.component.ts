import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../shared/store/counter.actions';
import { counterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getchannelname } from '../../shared/store/counter.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.Model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent implements OnInit {
  constructor(private store: Store<AppStateModel>) {

  }
  counterInput!: number;
  ActionType: string = 'add';
  channelname = '';
  counterSubscribe!: Subscription


  ngOnInit(): void {
    this.store.select(getchannelname).subscribe((data) => {
      this.channelname = data
      console.log('custom counter')
    })
  }
  OnIncrement() {
    this.store.dispatch(customIncrement({ value: +this.counterInput, action: this.ActionType }))
  }

}
