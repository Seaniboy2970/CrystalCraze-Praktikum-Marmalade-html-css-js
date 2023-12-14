

let achat = document.getElementById("wkachat")
let amethyst = document.getElementById("wkamethyst")
let aquamarin = document.getElementById("wkaquamarin")
let bismuth = document.getElementById("wkbismuth")
let citrin = document.getElementById("wkcitrin")
let diamant = document.getElementById("wkdiamant")
let granat = document.getElementById("wkgranat")
let jade = document.getElementById("wkjade")
let lapis = document.getElementById("wklapis")
let opal = document.getElementById("wkopal")
let pyrit = document.getElementById("wkpyrit")
let quartz = document.getElementById("wkquartz")
let rhodonit = document.getElementById("wkrhodonit")
let rosenquartz = document.getElementById("wkrosenquartz")
let rubin = document.getElementById("wkrubin")
let smaragd = document.getElementById("wksmaragd")

let finalpreis = document.getElementById("wkpreis")

const elArray = [achat, amethyst, aquamarin, bismuth,citrin,diamant,granat,jade,lapis,opal,pyrit,quartz,rhodonit,rosenquartz,rubin,smaragd];

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

let items = ['achat','amethyst','aquamarin','bismuth','citrin','diamant','granat','jade','lapis','opal','pyrit','quartz','rhodonit','rosenquartz','rubin','smaragd',]
let preise = [30,6.99, 3119.99,9.99,1750,11599,999.99,49.99,6250,219.99,5.99,6.99,1215,170,19999,3119.99]




function item(){

var endpreis = 0
items.forEach((item,index,preis) =>{

    console.log(document.cookie)
    const cookie = getCookie(item)
    let preisgem = cookie * preise[index]
    if (cookie>=1){
    elArray[index].innerText = cookie +": " + item +" "+ preisgem +"€"
    endpreis = endpreis + preisgem
    console.log(endpreis)
}
    else{
        console.log(0)
}

})
finalpreis.innerText = "Preis: " + endpreis +"€"

}




/*const abc = function(parameter1,parameter2){
    return parameter1+parameter2
}

function abc2(parameter1,parameter2){
    return parameter1 + parameter2
}
const abc3 = (parameter1,parameter2) => {return parameter1 + parameter2} */

function cookiereset(){
    document.cookie = "achat=0"
    document.cookie = "amethyst=0"
    document.cookie = "aquamarin=0"
    document.cookie = "bismuth=0"
    document.cookie = "citrin=0"
    document.cookie = "diamant=0"
    document.cookie = "granat=0"
    document.cookie = "jade=0"
    document.cookie = "lapis=0"
    document.cookie = "opal=0"
    document.cookie = "pyrit=0"
    document.cookie = "quartz=0"
    document.cookie = "rhodonit=0"
    document.cookie = "rosenquartz=0"
    document.cookie = "rubin=0"
    document.cookie = "smaragd=0"
    window.location.reload(false); 
    console.log(document.cookie)

}   
let cntachat = 0
let cntamethyst = 0 
let cntaquamarin = 0
let cntbismuth = 0
let cntcitrin = 0
let cntdiamant = 0
let cntgranat = 0
let cntjade = 0
let cntlapis = 0
let cntopal = 0
let cntpyrit = 0
let cntquartz = 0
let cntrhodonit = 0
let cntrosenquartz = 0
let cntrubin = 0
let cntsmaragd = 0

function addachat(){
    cntachat += 1
    document.cookie ="achat="+cntachat;
}
function addamethyst(){
    cntamethyst += 1
    document.cookie ="amethyst="+cntamethyst
}
function addaquamarin(){
    cntaquamarin +=1
    document.cookie ="aquamarin="+cntaquamarin
}
function addbismuth(){
    cntbismuth +=1
    document.cookie ="bismuth="+cntbismuth
}
function addcitrin(){
    cntcitrin += 1
    document.cookie ="citrin="+cntcitrin
}
function adddiamant(){
    cntdiamant += 1
    document.cookie ="diamant="+cntdiamant
}
function addgranat(){
    cntgranat += 1
    document.cookie ="granat="+cntgranat
}
function addjade(){
    cntjade += 1
    document.cookie ="jade="+cntjade
}
function addlapis(){
    cntlapis += 1
    document.cookie ="lapis="+cntlapis
}
function addopal(){
    cntopal += 1
    document.cookie ="opal="+cntopal
}
function addpyrit(){
    cntpyrit += 1
    document.cookie ="pyrit="+cntpyrit
}
function addquartz(){
    cntquartz += 1
    document.cookie ="quartz="+cntquartz
}
function addrhodonit(){
    cntrhodonit += 1
    document.cookie ="rhodonit="+cntrhodonit
}
function addrosenquartz(){
    cntrosenquartz += 1
    document.cookie ="rosenquartz="+cntrosenquartz
}
function addrubin(){
    cntrubin += 1
    document.cookie ="rubin="+cntrubin
}
function addsmaragd(){
    cntsmaragd += 1
    document.cookie ="smaragd="+cntsmaragd
}

function test(){
    console.log(cntachat)
}




