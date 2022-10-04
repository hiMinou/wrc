// jshint browser:true, eqeqeq:true, undef:true, devel:true, esversion: 6

(function () {

    //Ici je gère les alarms
    let alarms = document.getElementsByClassName("alarm");
    //on va travailler sur l'alarme maintenant 

    let btn= document.getElementById("addAlarm");
    btn.addEventListener("click", ()=>{
        let alarm = document.getElementById("exampleAlarm");
        let cloneAlarm = alarm.cloneNode(true);
        cloneAlarm.removeAttribute("id");

        //le btn pour supprimer 
        let delBtn = cloneAlarm.getElementsByTagName("button")[0];
        delBtn.addEventListener("click",(e)=>{
            e.target.parentElement.remove();
        });
            
        //on rajoute l'alarm dan s le dom
        document.getElementById("alarms").insertBefore(cloneAlarm, btn);
    });

    //fonction asynchrone pour acceder afficher l'horloge
    setInterval(()=>{

        //on va rendre l'alarm fonctionnelle 
        // alarm.classList.remove("alarm");
        
        //Je vais mettre la definition de mon horloge ici

        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds()
        //on formate notre horloge
        if(h<10){ h= "0"+h};
        if(m<10){ m= "0"+m};
        if(s<10){ s= "0"+s};
        let format = h +" : "+m+" : "+s;
        let horloge = document.getElementsByTagName("h1")[0]; 
        horloge.textContent = format;
            
        let fmt = h+":"+m;

        //Je parcours les alarms 
        for(el of alarms){
            let time = el.getElementsByTagName("input")[0]
            //on compare les heure et les minutes
            if(time.value == fmt){

                //on va faire sonner l'alarme
                let sound = el.getElementsByClassName('chooseSound')[0];
                console.log(time.value+": Youpi youpi youpi|| avec le son "+ sound.value);

                }
            }
    }, 500);


    // on se save dans un objet json
    let saveBtn = document.getElementById('saveAlarms');
    saveBtn.addEventListener('click', ()=>{

        //au click on sauvegarde les alarmes
        for(el of alarms){
            let heure = el.getElementsByTagName('input')[0];
            let nom = el.getElementsByTagName("input")[1];
            let sound = el.getElementsByClassName('chooseSound')[0];

            let saveAlarm = {"heure": heure, "nom":nom, "son": sound};
            localStorage.setItem('saveAlarm', JSON.stringify(saveAlarm));
        }

    });


        
    
})();


