import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';
import { tap, flatMap } from 'rxjs/operators';
import { Twchannel } from 'src/app/models/Twchannel';

@Component({
  selector: 'app-streamsHome',
  templateUrl: './streamsHome.component.html',
  styleUrls: ['./streamsHome.component.css']
})
export class StreamsHomeComponent implements OnInit {
  users: any[] = [{ x: "zaferkrk96", y: null }, { x: "unchainedesports", y: null }];
  
  channelIDs:number[]=[];
  constructor(
    private twitchService: TwitchService


  ) {
   

   }
  itemsStream = [];
  TwchannelArray: Twchannel[] = [];
  ngOnInit() {
    let ChannelID: any;
    let Videos: any;
    this.TwchannelArray = [];



    this.twitchService.getChannelsForClient().subscribe(data=>{
        for(let x of data){
          this.twitchService.getChannelStream(x.twitch_channel_id.toString()).subscribe(res2=>{
            //console.log(res2);
      
            const item: Twchannel = {
              username: x.twitch_channel_name,
              stream: res2.stream,
              _id: x.twitch_channel_id,
              embed:"",
               offlineImg: res2.stream == null ? x.twitch_channel_img_url : null,
              videos: null
  
            };
            //console.log(x);
            this.TwchannelArray.push(item);
            this.TwchannelArray.sort((val1, val2) => {
              return (
                <any>new Date(val2.stream != null ? val2.stream.created_at : '1970-01-01') - <any>new Date(val1.stream != null ? val1.stream.created_at : '1970-01-01')
              );
            });
            this.itemsStream = this.TwchannelArray;
            this.itemsStream.sort((x, y) => {
              if (x.stream!=null) {
                return -1;
              }
              if (y.stream!=null) {
                return 1;
              }
              return 0;
            });
            //console.log(this.itemsStream[0]);
          });
        }
      
    });



    
/*
    for (let username of this.users) {

      this.twitchService
        .getChannelInfo(username.x)

        .pipe(
          tap(x => username.y = x.users[0]._id),


          flatMap(resx =>
            this.twitchService.getChannelStream(username.y)
          )



        )
        .subscribe(res2 => {

          const item: Twchannel = {
            username: username.x,
            stream: res2.stream,
            _id: username.y,
            embed: '<iframe src="https://player.twitch.tv/?channel=' + username + '" frameborder="0" allowfullscreen="true" scrolling="no" height="380px" width="100%"> </iframe>',
            offlineImg: res2.stream == null ? "../../../assets/img/streams.jpg" : null,
            videos: null

          };

          this.TwchannelArray.push(item);
          this.TwchannelArray.sort((val1, val2) => {
            return (
              <any>new Date(val2.stream != null ? val2.stream.created_at : '1970-01-01') - <any>new Date(val1.stream != null ? val1.stream.created_at : '1970-01-01')
            );
          });
          this.itemsStream = this.TwchannelArray;

          console.log(this.itemsStream[0]);
        });
    }*/
    
  }

}
