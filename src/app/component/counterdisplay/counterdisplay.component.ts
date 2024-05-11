import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { getcounter } from '../../shared/store/counter.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.Model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit , OnDestroy {
  constructor(private store: Store<{ counter:counterModel }>) {

  }
  ngOnDestroy(): void {
    if(this.counterSubscribe) {
      this.counterSubscribe.unsubscribe()
    }
  }
  counterDisplay!: number

 counterSubscribe!:Subscription
counter$!:Observable<AppStateModel>

  ngOnInit(): void {
    this.store.select(getcounter).subscribe((data) => {
      this.counterDisplay = data
      console.log("counter display")
    })
    // this.counter$ = this.store.select('counter')
  
  }
}
