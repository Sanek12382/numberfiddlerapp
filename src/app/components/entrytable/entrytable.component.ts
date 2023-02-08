import { Component, OnInit } from '@angular/core';
import {FileService} from '../../file.service';
import {Entry} from '../../entry';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-entrytable',
  templateUrl: './entrytable.component.html',
  styleUrls: ['./entrytable.component.css']
})
export class EntrytableComponent implements OnInit{
  headers = ['name', 'contentSum', 'date'];
  rows: Entry[] = [];

  constructor(private fileService: FileService){}


  ngOnInit() {
    this.updateRows();
  }

  public updateRows(): void{
    this.getEntries();
   // this.rows = this.entries;
    // console.log(this.entries);
    console.log(this.rows);
  }

  public getEntries(): void {
    this.fileService.getAllEntry().subscribe(
      (response: Entry[]) => {

        this.rows = response;
        // console.log(this.entries);
      },
      (error: HttpErrorResponse) => {
        alert(error.message + ' inside get Entries ');
      }
    );
  }
}
