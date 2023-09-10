import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import previousMonday from 'date-fns/previousMonday';
import nextSunday from 'date-fns/nextSunday';
import { addDays } from 'date-fns';
import { fi } from 'date-fns/locale';

@Injectable({
  providedIn: 'root',
})
export class FilterServiceService {
  private filterText = new BehaviorSubject<string>('');
  private filterSubject = new BehaviorSubject<string>('');
  filterText$ = this.filterText.asObservable();
  filter$ = this.filterSubject.asObservable();

  setFilter(filter: string) {
    this.filterText.next(filter);
    this.filterSubject.next(this.filterToUrl(filter));
  }

  setSearchFilter(filter: string) {
    this.filterText.next(filter);
    this.filterSubject.next(`&search=${filter}&ordering=-metacritic`);
  }

  filterToUrl(filter: string) {
    let newFilter: string = '';

    let date = format(new Date(), 'yyyy-MM-dd');

    let last30Days = `${format(
      subDays(new Date(date), 30),
      'yyyy-MM-dd'
    )},${date}`;

    let thisWeek = `${format(
      previousMonday(new Date(date)),
      'yyyy-MM-dd'
    )},${format(nextSunday(new Date(date)), 'yyyy-MM-dd')}`;

    let nextWeek = `${date},${format(
      addDays(new Date(date), 7),
      'yyyy-MM-dd'
    )}`;

    switch (filter) {
      case 'Last 30 days':
        newFilter = `&dates=${last30Days}&ordering=-rating`;
        break;
      case 'This week':
        newFilter = `&dates=${thisWeek}&ordering=-rating`;
        break;
      case 'Next week':
        newFilter = `&dates=${nextWeek}&ordering=-rating`;
        break;
      case 'Best of the year':
        newFilter = '&dates=2023-01-01,2023-12-31';
        break;
      case 'Popular in 2022':
        newFilter = '&dates=2022-01-01,2022-12-31&ordering=-added';
        break;
      case 'All time top':
        newFilter = '&metacritic=92,100&ordering=-added';
        break;
      case 'PC':
        newFilter = '&parent_platforms=4';
        break;
      case 'Xbox':
        newFilter = '&parent_platforms=3';
        break;
      case 'Play Station':
        newFilter = '&parent_platforms=2&ordering=-metacritic';
        break;
      case 'Nintendo':
        newFilter = '&parent_platforms=7&ordering=-metacritic';
        break;
      case 'Android':
        newFilter = '&parent_platforms=8';
        break;
      case 'macOs':
        newFilter = '&parent_platforms=5';
        break;
      case 'Linux':
        newFilter = '&platforms=6';
        break;
      case 'Action':
        newFilter = '&genres=action';
        break;
      case 'Strategy':
        newFilter = '&genres=strategy';
        break;
      case 'RPG':
        newFilter = '&genres=5';
        break;
      case 'Shooter':
        newFilter = '&genres=shooter';
        break;
      case 'Adventure':
        newFilter = '&genres=adventure';
        break;
      case 'Puzzle':
        newFilter = '&genres=puzzle';
        break;
      case 'Racing':
        newFilter = '&genres=racing';
        break;
      case 'Sports':
        newFilter = '&genres=sports';
        break;
      default:
        break;
    }
    return newFilter;
  }
}
