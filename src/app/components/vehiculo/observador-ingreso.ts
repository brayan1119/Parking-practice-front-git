import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ObservadorIngreso {

    // Observable string sources
    private missionAnnouncedSource = new Subject<string>();

    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();

    // Service message commands
    announceMission() {
      this.missionAnnouncedSource.next();
    }

}
