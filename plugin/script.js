if(location.hostname!="quizlet.com"){
    alert("This extension only works on Quizlet.")
}else{
    if(location.pathname.indexOf("scatter")>0){
        scatter();
    }else if(location.pathname.indexOf("gravity")>0){
        gravity();
    }else{
        alert("This plugin only supports Gravity and Scatter. Sorry :-(")
    }
}
function scatter(){
    alert('You Selected: Scatter  To use this, match up the cards that say MATCH ME, the rest will solve itself.');
    var actualCode = 'var id= window.location.href.substring(0,window.location.href.length);\nid="\/"+id.split("\/")[3]+"\/";console.log(id);\nQWait("dom", "Quizlet.Scatter", function() {new ScatterGame({"terms": [{"id": 326458583,"photo": "","word": "MATCH ME","definition": "MATCH ME","quiz_id": 10271801,"term_lang": "en","def_lang": "en"}],"recordTime": 381,"loggedIn": "true","selectedOnly": null ,"baseUrl": id+"scatter","microScatterUrl": id+"microscatter"});});'


    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}
function gravity(){
    alert("You Selected: Gravity  To use this, press the Space then Enter key after you see the word bank filled.");

    var actualCode = 'var werty = JSON.parse(JSON.stringify(window.Quizlet.gravityData.terms))\nfunction getDef(word){var i=0;while(i<werty.length){if(werty[i].word==word){return werty[i].definition;}i++}}function getActiveWord(){return document.getElementsByClassName("GravityTerm is-showing is-unmissed")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML.split(">")[1].split("<")[0]}function insert(){document.getElementsByClassName("GravityTypingPrompt-input js-keymaster-allow")[0].value=getDef(getActiveWord())}setInterval(insert,100);'


    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}
