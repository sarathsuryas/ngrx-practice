import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelname, decrement, increment, reset } from '../../shared/store/counter.actions';
import { counterModel } from '../../shared/store/counter.model';
import { rename } from 'fs';
import { AppStateModel } from '../../shared/store/Global/AppState.Model';
@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {
  constructor(private store: Store<AppStateModel>) {

  }
  OnIncrement() {
    this.store.dispatch(increment())
  }
  OnDecrement() {
    this.store.dispatch(decrement())
  }
  OnReset() {
    this.store.dispatch(reset())
  }
  OnRename() {
   this.store.dispatch(changeChannelname({channel:'hello'}))
  }
}
