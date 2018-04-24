const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "!";
var newUrl ;


client.on("ready", () => {
  console.log("I am ready!");
});

//reads the message channel and posts a random image

client.on("message", (message) => {

  //if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "dance"){
      message.channel.send("",{file:"C:\\Users\\User\\Documents\\Computer Science\\Projects\\rembot\\dance.gif"});
      console.log("dance!");
  }

  if(command === "nsfw"){

    let tag = args[0];

    //setting up the crawler
    var Crawler = require("js-crawler");

    var crawler = new Crawler().configure({
      shouldCrawlLinksFrom: function(url) {
        return url.indexOf("danbooru.donmai.us") < 0;
      }
    });

    if(args[0] === "rem"){
      message.channel.send("https://giphy.com/gifs/555IwDbfVHsl3zLkT2");
      console.log("tag was rem");
    }

    
//wecrawler to use from danbooru as it has its own random function
//crawling to the website
    if(args[0] === undefined){
      crawler.crawl("http://danbooru.donmai.us/posts/random", function(page) {
        //console.log(args[0]);
        message.channel.send(page.url);
        console.log(page.url);

      });
    }else{
    crawler.crawl("http://danbooru.donmai.us/posts/random?tags="+args[0], function(page) {
      //console.log(args[0]);
      message.channel.send(page.url);
      console.log(page.url);

    });
    }
  }


});

//function crawling(){
  //var Crawler = require("js-crawler");

  //var crawler = new Crawler().configure({
  //  shouldCrawlLinksFrom: function(url) {
  //    return url.indexOf("danbooru.donmai.us") < 0;
  //  }
  //});
  //crawler.catch(){
  //  console.log("promise rejected");
  //});

  //crawler.crawl("http://danbooru.donmai.us/posts/random?tags=boobs", function(page) {
  //  console.log(page.url);
  //  newUrl = page.url;

//  });

  //return page.url
//}

client.login(process.env.BOT_TOKEN);
