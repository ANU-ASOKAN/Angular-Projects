import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data.interface';


@Component({
  selector: 'app-table-users',
  standalone: false,
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent implements OnInit {

  userList:Data[] =[];
  displayUsers:Data[] =[];
  sortByLogin :string ='login';
  
  sortingDirection:'asc' | 'desc' ='asc'
  current:number =1;
  size:number =5;
  pages:number =0;

  constructor(private http:HttpClient){
   
  }
  ngOnInit(): void {
    this.getUsersData();
  }
  getUsersData(){
    this.http.get<Data[]>('https://api.github.com/users').subscribe((result)=>{
      this.userList = result;
      this.pages = this.userList.length/this.size;
      console.log('No of pages should be given:',this.pages);
      this.sorting('login');
      console.log('Users data:',result);
    })
  }
  sorting(col:string){
    if(this.sortByLogin === col){
        this.sortingDirection = this.sortingDirection ==='asc'? 'desc':'asc';
        console.log('sorted in: ',this.sortingDirection);
      }else{
        this.sortingDirection = 'asc';
        this.sortByLogin =col;
        console.log('sorted in ascending order');
      }
    
    let log1;
    let log2;
    this.userList.sort((a,b)=>{
      log1 = a.login.toLowerCase();
      log2 = b.login.toLowerCase();
      return this.sortingDirection ==='asc'? log1.localeCompare(log2): log2.localeCompare(log1);
    });
    this.updateDisplay();
  }

  updateDisplay(){
    const start =(this.current-1)*(this.size);
    console.log(start);
    this.displayUsers = this.userList.slice(start,start + this.size);
  }
  pagination(page:number){
    if(page >=1 && page <= this.pages){
      this.current =page;
      this.updateDisplay();
    }
  }  
  

}
