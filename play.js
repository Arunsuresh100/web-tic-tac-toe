// player details
let name_input1=document.getElementById('name1');
let name_input2=document.getElementById('name2');
let req_msg1=document.getElementById('req_msg1');
let req_msg2=document.getElementById('req_msg2');
let menu_msg=document.getElementById('msg_menu');
name_input1.addEventListener('blur',()=>{
    if(name_input1.value.trim()=='')
    {
        name_input1.style.border="1.5px solid red";
        req_msg1.style.opacity=1;
    }
    else{
        name_input1.style.border="1.5px solid green";
        req_msg1.style.opacity=0;
    }
});
name_input2.addEventListener('blur',()=>{
    if(name_input2.value.trim()=='')
    {
        name_input2.style.border="1.5px solid red";
        req_msg2.style.opacity=1;
    }
    else{
        name_input2.style.border="1.5px solid green";
        req_msg2.style.opacity=0;
    }
});
let game_start=document.getElementById('game_start_play');
game_start.addEventListener('click',()=>{
    let player1=document.getElementById('name1');
    let player2=document.getElementById('name2');
    let player1_color=document.querySelector('input[name="player1_color_option"]:checked')?.value;
    let player2_color=document.querySelector('input[name="player2_color_option"]:checked')?.value;
    if(player1.value.trim()=='')
    {
        req_msg1.style.opacity=1;
        name_input1.style.borderColor="red";
    }
    else{
        req_msg1.style.opacity=0;
        name_input1.style.borderColor="green";
    }
    if(player2.value.trim()=='')
    {
        name_input2.style.borderColor="red";
        req_msg2.style.opacity=1;
    }
    else{
        name_input2.style.borderColor="green";
        req_msg2.style.opacity=0;
    }
    if(player1_color==player2_color)
    {
        alert("The Color are the same, Change it");
        // menu_msg.style.opacity=1;
        // menu_msg.innerHTML='The colors are same change it';
        return;
    }
    if(player1.value.trim()=='' || player2.value.trim()=='')
    {
        menu_msg.style.opacity=1;
        return;
    }
    else{
        menu_msg.style.opacity=0;
        console.log("player1 :"+player1.value);
        console.log("player2 :"+player2.value);
        console.log("player1 color :"+player1_color);
        console.log("player2 color :"+player2_color);
        sessionStorage.setItem('player1_name',player1.value);
        sessionStorage.setItem('player2_name',player2.value);
        sessionStorage.setItem('player1_color',player1_color);
        sessionStorage.setItem('player2_color',player2_color);
        location.href="game.html";
    }
});