import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  hasil;
  status;
  a;b;
  text=""
hitung()
{
  this.text=""
this.hasil=Math.pow(this.a,this.b);
if(this.hasil%2==0)
{
this.status="Genap";
for(let i = this.b ;i<=this.hasil;i++)
{
    for(let j = 0; j<i;j++)
    {
          this.text = this.text + "*"
    }
           this.text = this.text + "<br/>"
}
}
else
{
this.status="Ganjil";
 for(let i = 0;i<5;i++)
 {
        for(let j =5-i;j>0;j--)
        {
          this.text += "*"
        }
        for(let k = 0;k<i+1 && k<this.a && i<this.a;k++)
        {
        this.text +="o"    
        }
        this.text+="<br>"
      }
}
}
clear()
{
this.a=0
this.b=0
}
}
