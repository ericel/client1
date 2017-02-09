import { Component, Optional } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor( private _dialog: MdDialog){

  }

  openDialog() {
     let dialogRef = this._dialog.open(DialogContact);
  }

}

@Component({
  template: `
    <div class="alert alert-success">contact us:</div>
    <div>
    <i class="fa fa-volume-control-phone fa-5x" aria-hidden="true"></i> Tel: 0248 8493 8273
    </div>
     <div>
    <i class="fa fa-envelope" aria-hidden="true"></i> Tel: 0248 8493 8273
    </div>
  `,
})
export class DialogContact {
  status: any;
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContact>) { }
}