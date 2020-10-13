let content = document.querySelector(".content");
let image = document.querySelector("#image");
let style = document.getElementsByTagName("style");
let string = `大家好，我是Aaron，
现在我在这里画出一只皮卡丘。
首先是确定皮卡丘的绘画范围，
.skin{
    width: 100vw;  
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffe600;
}area
然后画出皮卡丘的眼眶
.eyePos{
    display: flex;
    justify-content: center;
    position: relative;
}eyePos1
.eye{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.842);
    border-radius: 50%;
    margin:10px 100px -25px ;
    animation: wave2 300ms infinite linear
}line1，
接下来就是内部的瞳孔
.mid{
    position: absolute;
    top: 25%;
    margin-left: 10px;
    border: 20px solid white;
    border-radius: 50%;
}line2，
随后，画出皮卡丘的小鼻子
.nose{
    width: 30px;   
    height: 30px;
    border-top:15px solid black;
    border-right:15px solid transparent;
    border-right:15px solid transparent;
    border-bottom:15px solid transparent;
    border-left:15px solid transparent;
    border-radius:15px ;
}line3，
然后就是嘴巴部分，这也是最复杂的部分
先是嘴巴的上嘴唇的左右两边
.mouth{
    width: 250px;
    height: 300px;
    overflow: hidden;
    margin-top: 20px;
}mouth1,
.mouth .lipLeft, .lipRight{
    width: 125px;
    height: 25px;
    border-bottom:2px solid black;
    position: relative;
    background-color: #ffe600;
    z-index: 6;
}mll1
.mouth .lipTop{
    display: flex;
    justify-content: center;
}lipTop1,
.mouth .lipLeft{
    border-left: 2px solid black;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg);
}lipLeft1,
.mouth .lipRight{   
    border-right: 2px solid black;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
}lipRight1,
然后是下嘴唇
.mouth .lipBottom{
    border: 3px black solid;
    border-top: none;
    margin-top: -750px;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height:1000px;
    border-radius: 100px/300px;
    background-color: #9b000a;
    position: relative;
    z-index: 5;
    overflow: hidden;
}lipBottom1,
.block{
    width: 100px;
    height: 20px;
    position: relative;
    z-index: 6; 
    background-color:#ffe600 ;
    margin-top: -20px;
}block1
以及中间的舌头
.mouth .lipBottom .down{
    width: 200px;
    height:250px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    background-color: #ff485f;
    border: 1px red solid;
    transform: translateX(-50%);
    border-radius: 100px/125px;
    
}down1,
最后是两边的腮红
.face1{
    position: absolute;
    bottom: 10%;
    left: 25%;
    transform: translateY(-50%);
    width: 150px;
    height: 150px;
    border: solid 3px black;
    border-radius: 50%;
    background-color: red;
}face11,
.face2{
    position: absolute;
    bottom: 10%;
    right: 25%;
    transform: translateY(-50%);
    width: 150px;
    height: 150px;
    border: solid 3px black;
    border-radius: 50%;
    background-color: red;
}face21,
我分别给比卡丘的眼睛和鼻子加上动作效果，
在平时，皮卡丘的瞳孔可以来回移动
@keyframes wave2{
    0%{
      transform: rotate(45deg);    
    }
    33%{
      transform: rotate(40deg);    
    }
    66%{
      transform: rotate(50deg);    
    }
    100%{
      transform: rotate(45deg);    
    }
}wave22
鼻子是当鼠标移到上面时可以左右晃动
@keyframes wave{
    0%{
      transform: rotate(0deg);    
    }
    33%{
      transform: rotate(5deg);    
    }
    66%{
      transform: rotate(-5deg);    
    }
    100%{
      transform: rotate(0deg);    
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }hover1
`;
let n = 0;
let string2 = ``;
let string3 = " ";
let time;
var a=100
let show=() => {
    if (string[n] + string[n + 1] + string[n + 2] + string[n + 3] === "area") {
      string2 += `.skin{
        width: 100vw;  
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffe600;
    } 
`;
      style[0].innerHTML = string2;
      n += 3;
    } else if (string[n] === "\n") {
      string3 += "<br>";
    } else if (string[n] === " ") {
      string3 += "&nbsp";
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] ===
      "line1"
    ) {
      string2 += `
    
      .eye{
        width: 100px;
        height: 100px;
        border: 1px solid black;
        background-color: rgba(0, 0, 0, 0.842);
        border-radius: 50%;
        margin:10px 100px -25px ;
        animation: wave2 300ms infinite linear
    }`;
      style[0].innerHTML = string2;
      n += 4;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] +
        string[n + 5] +
        string[n + 6] ===
      "eyePos1"
    ) {
      string2 += `
        .eyePos{
          display: flex;
          justify-content: center;
          position: relative;
      }`;
      style[0].innerHTML = string2;
      n += 6;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] ===
      "line2"
    ) {
      string2 += `.mid{
        position: absolute;
        top: 25%;
        margin-left: 10px;
        border: 20px solid white;
        border-radius: 50%;
    } `;
      style[0].innerHTML = string2;
      n += 4;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] ===
      "line3"
    ) {
      string2 += ` 
      .nose{
        width: 30px;   
        height: 30px;
        border-top:15px solid black;
        border-right:15px solid transparent;
        border-right:15px solid transparent;
        border-bottom:15px solid transparent;
        border-left:15px solid transparent;
        border-radius:15px ;
    } `;
      style[0].innerHTML = string2;
      n += 4;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] +
        string[n + 5] ===
      "mouth1"
    ) {
      string2 += `
      .mouth{
        width: 250px;
        height: 300px;
        overflow: hidden;
        margin-top: 20px;
    }`;
      style[0].innerHTML = string2;
      n += 5;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] +
        string[n + 5] +
        string[n + 6] ===
      "lipTop1"
    ) {
      string2 += `
      .mouth .lipTop{
        display: flex;
        justify-content: center;
    
    } `;
      style[0].innerHTML = string2;
      n += 6;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] +
        string[n + 5] +
        string[n + 6] +
        string[n + 7] ===
      "lipLeft1"
    ) {
        console.log('1111')
      string2 += `
        .mouth .lipLeft{
            border-left: 2px solid black;
            border-bottom-left-radius: 40px 25px;
            transform: rotate(-20deg);
        }`;
      style[0].innerHTML = string2;
      n += 7;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] +
        string[n + 5] +
        string[n + 6] +
        string[n + 7] +
        string[n + 8] ===
      "lipRight1"
    ) {
      string2 += `
        .mouth .lipRight{   
            border-right: 2px solid black;
            border-bottom-right-radius: 40px 25px;
            transform: rotate(20deg);
        }`;
      style[0].innerHTML = string2;
      n += 8;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] +
        string[n + 5] +
        string[n + 6] +
        string[n + 7] +
        string[n + 8] +
        string[n + 9] ===
      "lipBottom1"
    ) {
      string2 += `
        .mouth .lipBottom{
            border: 3px black solid;
            border-top: none;
            margin-top: -750px;
            margin-left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height:1000px;
            border-radius: 100px/300px;
            background-color: #9b000a;
            position: relative;
            z-index: 5;
            overflow: hidden;
        }`;
      style[0].innerHTML = string2;
      n += 9;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] ===
      "down1"
    ) {
      string2 += `
        .mouth .lipBottom .down{
            width: 200px;
            height:250px;
            position: absolute;
            bottom: -30px;
            left: 50%;
            background-color: #ff485f;
            border: 1px red solid;
            transform: translateX(-50%);
            border-radius: 100px/125px;
            
        }`;
      style[0].innerHTML = string2;
      n += 4;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] +
        string[n + 5] ===
      "face11"
    ) {
      string2 += `
        .face1{
            position: absolute;
            bottom: 10%;
            left: 25%;
            transform: translateY(-50%);
            width: 150px;
            height: 150px;
            border: solid 3px black;
            border-radius: 50%;
            background-color: red;
        }`;
      style[0].innerHTML = string2;
      n += 5;
    } else if (
      string[n] +
        string[n + 1] +
        string[n + 2] +
        string[n + 3] +
        string[n + 4] +
        string[n + 5] ===
      "face21"
    ) {
      string2 += `
        .face2{
            position: absolute;
            bottom: 10%;
            right: 25%;
            transform: translateY(-50%);
            width: 150px;
            height: 150px;
            border: solid 3px black;
            border-radius: 50%;
            background-color: red;
        }`;
      style[0].innerHTML = string2;
      n += 5;
    }else if (
        string[n] +
          string[n + 1] +
          string[n + 2] +
          string[n + 3]===
        "mll1"
      ) {
        string2 += `
        .mouth .lipLeft, .lipRight{
            width: 125px;
            height: 25px;
            border-bottom:2px solid black;
            position: relative;
            background-color: #ffe600;
            z-index: 6;
        }`;
        style[0].innerHTML = string2;
        n += 3;
      }  else if (
        string[n] +
          string[n + 1] +
          string[n + 2] +
          string[n + 3] +
          string[n + 4] +
          string[n + 5]===
        "block1"
      ) {
        string2 += `
        .block{
            width: 100px;
            height: 20px;
            position: relative;
            z-index: 6; 
            background-color:#ffe600 ;
            margin-top: -20px;
        }`;
        style[0].innerHTML = string2;
        n += 5;
      }   else if (
        string[n] +
          string[n + 1] +
          string[n + 2] +
          string[n + 3] +
          string[n + 4] +
          string[n + 5]===
        "wave22"
      ) {
        string2 += `
        @keyframes wave2{
            0%{
              transform: rotate(45deg);    
            }
            33%{
              transform: rotate(40deg);    
            }
            66%{
              transform: rotate(50deg);    
            }
            100%{
              transform: rotate(45deg);    
            }
        }`;
        style[0].innerHTML = string2;
        n += 5;
      }   else if (
        string[n] +
          string[n + 1] +
          string[n + 2] +
          string[n + 3] +
          string[n + 4] +
          string[n + 5]===
        "hover1"
      ) {
        string2 += `
        @keyframes wave2{
            0%{
              transform: rotate(45deg);    
            }
            33%{
              transform: rotate(40deg);    
            }
            66%{
              transform: rotate(50deg);    
            }
            100%{
              transform: rotate(45deg);    
            }
        }
        .nose:hover{
            transform-origin: center bottom;
            animation: wave 300ms infinite linear;
          }`;
        style[0].innerHTML = string2;
        n += 5;
      }
    
    
    
    else {
      string3 += string[n];
    }
    content.innerHTML = string3;
    content.scrollTo(0, 99999);
    if (n + 1 < string.length) {
      step();
      n++;
    }
  }
  let c=50;
let step = () => {
    time=setTimeout(show,c)
  };
step();
let slow=document.querySelector('.slow')
let stop=document.querySelector('.stop')
let run=document.querySelector('.run')
let fast=document.querySelector('.fast')
let clear=document.querySelector('.clear')
slow.onclick=()=>{
    clearTimeout(time)
    a=10;
    c=c+a
    time=setTimeout(show(),c)
}
let i=2,j=1;
stop.onclick=()=>{
  i--
    clearTimeout(time)
}
run.onclick=()=>{
  if(i!==j){return}
    time=setTimeout(show(),c)
}
let b;

fast.onclick=()=>{
    clearTimeout(time)
    b=10;
    c=c-b
    time=setTimeout(show,c)
}
clear.onclick=()=>{
  clearTimeout(time)
  string2='';
  string3='';
  n=0;
  content.innerHTML = '';
  style[0].innerHTML=string2
}