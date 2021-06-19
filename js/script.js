let recognizer = new webkitSpeechRecognition()
let synth = window.speechSynthesis
let num=100
let str='книг'
recognizer.interimResults = true
recognizer.lang = 'ru-Ru'
recognizer.onresult = function(event){
    let result = event.results[event.resultIndex]
    if(result.isFinal){
            let n= result[0].transcript+''
            if(n[n.length-1]=='1' && n[n.length-2] !='1'){
              talk(n +  str+ 'а')
            }else if (n[n.length-1]>1 && n[n.length-1]<5 && (n[n.length-1] < 5 && n[n.length-2] !='1')){
              talk(n+str+'и')
            }else {
              talk(n+str)
            }
        }
    }
    const talk = (n)=>{
            let answer = new SpeechSynthesisUtterance(n)
            synth.speak(answer)
            recognizer.start()
    }
    const speech = ()=>{
        recognizer.start();
}
const drawLog=(w)=>{
    let h2=document.createElement('h2')
    h2.innerHTML= w
    let output=document.getElementById('output')
    output.appendChild(h2)
    }
    