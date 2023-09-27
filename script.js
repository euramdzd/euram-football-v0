let APIkey = "54005a89d767a637e08895f2008dd5764d00e3d6f4c36822f451ae2186e09f87"

// /*

// 1 - دخول في موقع https://allsportsapi.com/

// 2 - انشاء حساب و أخد key خاص بنتائج كرة قدم 

// 3 - شهر فقط من استخدام مجاني لهدا   API

// */
// // 


var today = new Date();

var Dat_e = ` ${today.getDate()} / ${today.getMonth()+1} / ${today.getFullYear()} `

document.querySelector('.date').innerHTML = Dat_e;
  
var socket  = new WebSocket('wss://wss.allsportsapi.com/live_events?widgetKey='+APIkey+'&timezone=+01:00');
socket.onmessage = function(e) {
  console.log('ok')
  if (e.data) {
    console.log('ok')
    var matchesData = JSON.parse(e.data);

    console.log(matchesData);
    let match = [];

    for(let i =0;i<matchesData.length;i++){
        /* مباريات   */
      match[match.length] = [ matchesData[i].league_name , // اسم بطولة
                              matchesData[i].league_logo, // شعارها
                              matchesData[i].country_logo, // علم دولة
                              matchesData[i].event_home_team, // فريق 1 
                              matchesData[i].event_away_team, // فريق2  
                              matchesData[i].event_status, // وقت
                              matchesData[i].event_final_result, // نتيجة
                            ]
      

    }

    let box = '';

    for(let i=0;i<match.length;i++){
      box  += `
      <div class="box">
      <img src="${match[i][2]}" class="country"/> 
      <div class="logo"><img src="${match[i][1]}"/> </div><p>${match[i][0]}</p>
      <div class="Time">${match[i][5]}</div>
      <div class="details">
        <p>${match[i][3]}</p>
        <p>${match[i][6]}</p>
        <p>${match[i][4]}</p>
      </div>
      </div>
      `
    }
    document.querySelector("#match").innerHTML = box;
  }else{
    console.log("err ...!")
  }
}
  
