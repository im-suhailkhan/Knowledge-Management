import { Component, OnInit, Input,Inject } from '@angular/core';
import { ApiCallService} from '../api-call.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-ticket-search',
  templateUrl: './ticket-search.component.html',
  styleUrls: ['./ticket-search.component.css']
})
export class TicketSearchComponent implements OnInit {
  constructor(private ApiCall :ApiCallService,public dialog : MatDialog) { }
  ngOnInit() {  }

 refData ={
  Incident: '',
  CI: '',
  Summary:''
 };
 flag = false;
 t1:string;
 t2:string;
 t3:string;
 Data;
dataSource;
displayedColumns = ['Create_Date', 'TicketNumber', 'CI', 'Summary', 'Notes'];

Submit(){
  this.refData.Incident = this.t1;
  this.refData.CI = this.t2;
  this.refData.Summary = this.t3;
  let SearchJSON = JSON.stringify(this.refData);
 console.log(SearchJSON);
 this.ApiCall.getSuggestions(SearchJSON).subscribe((data: any)=>{
   this.Data = data;
   this.dataSource = new MatTableDataSource(this.Data);
   });
   this.flag = true;
}
openDialog(textData) : void {
  const dialogRef = this.dialog.open(NotesDialog, {
      width: '40rem',
      data: {Note: textData}
    });
}
}
@Component(
  {
    selector: 'notes-dialog',
    templateUrl: 'notes-dialog.html'
  })
export class NotesDialog {

  constructor(public dialogRef : MatDialogRef < NotesDialog >, @Inject(MAT_DIALOG_DATA)public data : any) {}

  onNoClick() : void {
    this.dialogRef.close();
  }

}
