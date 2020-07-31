import { Component, OnInit,ElementRef,Renderer2,ViewChild,HostListener,Directive} from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})


export class ChatbotComponent implements OnInit {

  
  @ViewChild('cgi') div:ElementRef;
  @ViewChild('cgi1') div1:ElementRef;
  constructor(private botservice:ChatbotService,private render:Renderer2,private el:ElementRef) { }

  ngOnInit() {
    
  }
   z:string=0;
  reply:string;
  inputtext:string;
  useravatar:String="https://image.flaticon.com/icons/png/512/306/306473.png";
  botavatar:String="https://getdrawings.com/free-icon/bot-icon-52.png";
  flag1:boolean=true;
  flag2:boolean=true;
  
  insertUserChat():void
{
      console.log(this.inputtext);
      this.z=this.z+1;
      console.log(this.z);
      const p:HTMLParagraphElement=this.render.createElement('p');
      p.innerHTML=this.inputtext;
      p.style.wordWrap="break-word";
      this.render.appendChild(this.div.nativeElement,p);
      var img2 = document.createElement('img'); // Use DOM HTMLImageElement
      img2.src = "https://image.flaticon.com/icons/png/512/306/306473.png";
      img2.style.width = "50px";
      img2.style.height = "50px";
      img2.style.marginTop="-60px";
      img2.style.marginLeft="-10px";
      this.render.addClass(this.div.nativeElement, 'hp');
      this.render.appendChild(this.div.nativeElement,img2);
      //const i:HTMLPictureElement=this.render.createElement('img');
      // p.innerHTML=this.inputtext;
      // this.render.appendChild(this.div.nativeElement,i);
      
      this.botservice.getReply(this.inputtext).subscribe((res:any)=>{
        this.reply=res;
        
      })
      this.insertBotChat();
}

insertBotChat():void
{
      
      console.log(this.reply);
      const p:HTMLParagraphElement=this.render.createElement('p');
      p.innerHTML="bot reply";
      p.style.wordWrap="break-word";
      //p.style.position="absolute";
      this.render.appendChild(this.div.nativeElement,p);
      var img3 = document.createElement('img'); // Use DOM HTMLImageElement
      img3.src = "https://getdrawings.com/free-icon/bot-icon-52.png";
      img3.style.width = "50px";
      img3.style.height = "50px";
      img3.style.marginTop="-70px";
      img3.style.marginLeft="-10px";
      this.render.appendChild(this.div.nativeElement,img3);
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
  
