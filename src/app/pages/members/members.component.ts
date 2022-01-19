import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListItem} from '../../common/models/list-item';
import {Observable, Subscription} from 'rxjs';
import {map, finalize} from 'rxjs/operators';
import {Member} from '../../common/models/member';
import {membersFeatureSelector, MembersState} from "../../ngrx/state/members.state";
import {FetchMembers} from "../../ngrx/action/members.actions";
import {Store} from "@ngrx/store";


@Component({
  selector: 'zi-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  members$: Observable<String>;
  listItems$: Observable<ListItem[]>;
  subscriptions: Subscription = new Subscription();
  selectedMember: ListItem;
  isLoading: boolean;

  constructor(private membersStore: Store<MembersState>) {}

  ngOnInit() {    
    this.membersStore.dispatch(FetchMembers());

    /*
    this.members$ = this.membersStore.select(membersFeatureSelector)
    .pipe(
      map((memebertState): string => {
        console.log(memebertState)
        return '';
        //return memberState.id && memberState.name ? `${memberState.id} - ${memberState.name}` : '';
      })
    );
    */
    console.log(this.members$);
  }

  memberSelected(member) {

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
