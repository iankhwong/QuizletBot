if(location.hostname!="quizlet.com"){
    alert("This extension only works on quizlet")
}else{
    if(location.pathname.indexOf("scatter")>0){
        scatter();
    }else if(location.pathname.indexOf("gravity")>0){
        gravity();
    }else{
        alert("please be on scatter or gravity games")
    }
}
function scatter(){
    alert('When the game starts, two cards will come up labeled "Match this one", match these two cards together and you will win.');
    var actualCode = 'var id= window.location.href.substring(0,window.location.href.length);\nid="\/"+id.split("\/")[3]+"\/";console.log(id);\nQWait("dom", "Quizlet.Scatter", function() {new ScatterGame({"terms": [{"id": 326458583,"photo": "","word": "MATCH THIS ONE","definition": "MATCH THIS ONE","quiz_id": 10271801,"term_lang": "en","def_lang": "en"}],"recordTime": 381,"loggedIn": "true","selectedOnly": null ,"baseUrl": id+"scatter","microScatterUrl": id+"microscatter"});});'


    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}
function gravity(){
    alert("In order for this to work make sure you have selected 'start with term'. The program will automatically insert the correct answer into the box. Just hit space and then enter to submit the term.");

    var actualCode = 'var werty = JSON.parse(JSON.stringify(window.Quizlet.gravityData.terms))\nfunction getDef(word){var i=0;while(i<werty.length){if(werty[i].word==word){return werty[i].definition;}i++}}function getActiveWord(){return document.getElementsByClassName("GravityTerm is-showing is-unmissed")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML.split(">")[1].split("<")[0]}function insert(){document.getElementsByClassName("GravityTypingPrompt-input js-keymaster-allow")[0].value=getDef(getActiveWord())}setInterval(insert,100);'


    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}
