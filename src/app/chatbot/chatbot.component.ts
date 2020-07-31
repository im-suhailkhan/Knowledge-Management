import { Component, OnInit,ElementRef,Renderer2,ViewChild,HostListener,Directive} from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})


export class ChatbotComponent implements OnInit {

  // @HostListener('click') onClick(){

  //   var div=this.render.createElement('div');
  //   var text=this.render.createText('hrllo');
  //   this.render.appendChild(div,text);
  //   //this.render.addClass(div,"msj macro");
  //   this.render.appendChild(this.el.nativeElement,div);
  // }
  
  @ViewChild('cgi') div:ElementRef;
  constructor(private botservice:ChatbotService,private render:Renderer2,private el:ElementRef) { }

  ngOnInit() {
    
  }

  reply:string;
  inputtext:string;
  useravatar:String="https://image.flaticon.com/icons/png/512/306/306473.png";
  botavatar:String="https://getdrawings.com/free-icon/bot-icon-52.png";
  flag1:boolean=false;
  flag2:boolean=false;
  appendbothtml:string='<li style=width:"100%;"><div class="msj-rta macro"><div class="text text-r"><p>{{this.reply}}</p><p><small></small></p></div><div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="{{botavatar}}" /></div></div></li>';
  appenduserhtml:string='<li style="width:100%"> <div class="msj macro"><div class="avatar"><img class="img-circle" style="width:100%;" src="{{useravatar}}"/></div> <div class="text text-l"><p> {{inputtext}} </p><p><small>  </small></p></div></div></li>';
  appenduserhtml1:string=this.inputtext;
  appendbothtml2:string=this.reply;
  myhtml:string='';
  // x1:string='<li style=width:"100%;">';
  // x2:string='<div class="msj macro" style="max-width: 300px;padding: 10px;background-color: white;">';
  // x3:string='<div class="avatar" style="display:flex;justify-content:center; align-items:center;width:25%;float:left;padding-right:10px;">';
  // x7:string='<img class="img-circle" style="width:100%;" src="https://image.flaticon.com/icons/png/512/306/306473.png"/>';
  // x5:string='</div><div class="text text-l">';
  // x6:string='</div></div></li>';
  // x8:string='<div class="msj-rta macro">'
  // x9:string='<div class="text text-r">';
  // x10:string='</div><div class="avatar" style="padding:0px 0px 0px 10px !important">';
  // x11:string='<img class="img-circle" style="width:100%;" src="https://image.flaticon.com/icons/png/512/306/306473.png"/>';
 
  insertUserChat():void
{
      //this.flag1=true;
      console.log(this.inputtext);
      var d1=this.el.nativeElement.querySelector('ul')
      d1.insertAdjacentHTML('beforeend','<div style="margin-top:5px;width:85%;border-radius:5px;padding:5px;display:flex;float:left;background:#d0efff;">');
      d1.insertAdjacentHTML('beforeend',this.inputtext);
      
      // var d2=this.el.nativeElement.querySelector('msj macro')
      // d2.insertAdjacentHTML('beforeend','<div class="avatar"></div>');
      // var d4=this.el.nativeElement.querySelector('avatar')
      // d4.insertAdjacentHTML('beforeend','<img class="img-circle" style="width:100%;" src="{{useravatar}}"></div>');
      // var d3=this.el.nativeElement.querySelector('msj macro')
      // d3.insertAdjacentHTML('beforeend','<div class="text text-l"></div>');
      // var div=this.render.createElement('div');
      // var text=this.render.createText(this.inputtext);
      //this.render.appendChild(div,text);
      //this.render.addClass(div,'chat-popup');
      // const element=this.render.selectRootElement('.to');
      // this.render.appendChild(element,text);
     //this.myhtml= this.myhtml + this.x1+ this.x2+this.x5+ this.inputtext+this.x6+this.x7;
      
      this.botservice.getReply(this.inputtext).subscribe((res:any)=>{
        this.reply=res;
        this.flag2=true;
      })
      //this.insertBotChat();
}

insertBotChat():void
{
      //this.flag1=true;
      console.log(this.reply);
      this.myhtml= this.myhtml + this.x1+this.x8+this.x9+'what'+this.x10+this.x11+this.x6;
      
}

openForm() {
  document.getElementById("myForm").style.display = "block";
}

closeForm() {
  document.getElementById("myForm").style.display = "none";
}

}

// var me = {};
// me.avatar = "https://image.flaticon.com/icons/png/512/306/306473.png";

// var you = {};
// you.avatar = "https://getdrawings.com/free-icon/bot-icon-52.png";
          


  
//   insertChat(who, text,time){
//         if (time === undefined){
//             time = 0;
//         }
//         var control = "";
//         var date = this.formatAMPM(new Date());
//     console.log("inside insert chat");
//     console.log(date);
//             if (who == "me"){
//               $scope.control = '<li style="width:100%">' 
//               // +
//               //                   '<div class="msj macro">' +
//               //                   '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
//               //                       '<div class="text text-l">' +
//               //                           '<p>'+ text +'</p>' +
//               //                           '<p><small>'+date+'</small></p>' +
//               //                       '</div>' +
//               //                   '</div>' +
//                             '</li>';     
                
//                 // $.get("/get", { msg: text }).done(function(data) {
//                 //     console.log(data);
//                 //     this.insertChat("bot",data,date);
//                 //     });
                    
//             }
//               else{
//                     control = '<li style="width:100%;">' +
//                                     '<div class="msj-rta macro">' +
//                                         '<div class="text text-r">' +
//                                             '<p>'+text+'</p>' +
//                                             '<p><small>'+date+'</small></p>' +
//                                         '</div>' +
//                                     '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
//                               '</li>';
//                 }
//         setTimeout(
//           function(){                        
//               $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
//           }, time);
  
  
  
// }

// resetChat(){
//   $("ul").empty();
// }

// $(".mytext").on("keypress", function(e:KeyboardEvent){
//   if (e.which == 13){
//       var text = $(this).val();
//       if (text !== ""){
//           this.insertChat("me", text);              
//           $(this).val('');
//       }
//   }
// });

// $('body > div > div > div:nth-child(2) > span').click(function(){
//   $(".mytext").trigger({type: 'keypress', which: 13, keyCode: 13});
// })


//-- Clear Chat
  
