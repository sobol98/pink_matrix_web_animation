const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let cw = window.innerWidth;
let ch = window.innerHeight;


canvas.width = cw;
canvas.height = ch;

window.addEventListener('resize', function(event) {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = cw
    canvas.height = ch;
    maxColumns = cw / fontSize;
    console.log(cw, ch)
}, true);


/* let charArr = ["|", "~", "^", ":", ";", "'", "\"", "`", "_", "•", "°", "£", "€", "¥",
"¢", "₣", "₤", "₳", "₴", "₵", "₡", "₦", "₱", "₩", "₭", "₮", "₲", "₪", "₯", "฿", "₠", 
"₧","₸", "₺", "₼", "₽", "₹", "₺", "₽", "₾", "₿","Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η",
"Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο","Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7",
"8", "9", "ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ","サ", "シ", "ス",
"セ", "ソ", "タ", "チ", "ツ", "テ", "ト","ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ",
"ヘ", "ホ","マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ","ル", "レ", "ロ",
"ワ", "ヲ", "ン", "ガ", "ギ", "グ", "ゲ","ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ",
"ヅ", "デ","ド", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ","ポ", "ヴ"] */



let charArr= [ "日", "ﾐ", "ﾋ", "ｰ", "ｳ", "ｼ", "ﾅ", "ﾓ", "ﾆ", "ｻ", "ﾜ", "ﾂ", "ｵ", "ﾘ", "ｱ", "ﾎ", "ﾃ", "ﾏ", "ｹ",
"ﾒ", "ｴ", "ｶ", "ｷ", "ﾑ", "ﾕ", "ﾗ", "ｾ", "ﾈ", "ｽ", "ﾀ", "ﾇ", "ﾍ", "0", "1", "2", "3", "4", "5", "7",
"8", "9", "Ɛ", "Z", "T", "H", "E", "M", "A", "T", "R", "I", "X", ":", "・", ".", "\"", "=", "*", "+",
"-", "<", ">", "←", " ", "╌"]
      

let maxCharCount = 300;
let fallingCharArr = [];
let fontSize = 15;
let maxColumns = cw / fontSize;

let frames = 1;

class FallingChar {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    draw(ctx){
        this.value=charArr[Math.floor(Math.random()*(charArr.length))].toUpperCase()

//toUpperCase  - making capital letter

        this.speed=Math.random()*fontSize*0.6 +fontSize*0.6;

         //pink "rgba(255,103,129)"
        //green "rgba(0,255,0)"
        ctx.fillStyle="rgba(255,103,129)"; 
       
        ctx.font=fontSize+"px sans-serif";
        ctx.fillText(this.value,this.x,this.y);
        this.y+=this.speed;

        if(this.y>ch){
            this.y=Math.random()*ch/2-50;
            this.x=Math.floor(Math.random()*maxColumns)*fontSize;
            this.speed=-Math.random()*fontSize*0.6+fontSize*0.6;
        }
    }
}

let update=()=>{
    if(fallingCharArr.length<maxCharCount) {
        let fallingChar=new FallingChar(Math.floor(Math.random()*maxColumns)*fontSize, Math.random()*ch/2-50);
        fallingCharArr.push(fallingChar);
    };
    ctx.fillStyle="rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    for(let i=0; i<fallingCharArr.length && frames%2==0;i++) {
        fallingCharArr[i].draw(ctx);
    }

    requestAnimationFrame(update);
    frames++;
};

update();