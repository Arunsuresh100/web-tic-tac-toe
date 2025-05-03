// player details
let playername1=sessionStorage.getItem('player1_name');
let name_of_firstplayer=document.getElementById('player_name1');
let playercolor1=sessionStorage.getItem('player1_color');
let color_of_player1=document.getElementById('color_choosen1');
let playername2=sessionStorage.getItem('player2_name');
let name_of_secondplayer=document.getElementById('player_name2');
let playercolor2=sessionStorage.getItem('player2_color');
let color_of_player2=document.getElementById('color_choosen2');
name_of_firstplayer.innerHTML=playername1;
name_of_secondplayer.innerHTML=playername2;
color_of_player1.innerHTML=playercolor1;
color_of_player2.innerHTML=playercolor2;
let setcolor_player1="";
let setcolor_player2="";
switch(color_of_player1.innerHTML.trim())
{
case "Red":setcolor_player1="red";
break;
case "Green":setcolor_player1="green";
break;
case "Blue":setcolor_player1="blue";
break;
default:break;
}

switch(color_of_player2.innerHTML.trim())
{
case "Red":setcolor_player2="red";
break;
case "Green":setcolor_player2="green";
break;
case "Blue":setcolor_player2="blue";
break;
default:break;
}
console.log(setcolor_player1);  // Should log 'red', 'green', or 'blue' for player 1
console.log(setcolor_player2);  // Should log 'red', 'green', or 'blue' for player 2

// 
const button_click=document.querySelectorAll('button');
let player1_hint=document.getElementById('player_name1');
let player2_hint=document.getElementById('player_name2');
let player1_win_msg=document.getElementById('game_progress1');
let player2_win_msg=document.getElementById('game_progress2');
let winbox1=document.getElementById('player1_display');
let winbox2=document.getElementById('player2_display');
let winflg=0;
let count=0;
let temp_player1=[];
let temp_player2=[];
let win_combos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // main diagonal
    [2, 4, 6]  // anti-diagonal
  ];  
winbox1.style.boxShadow=`2px 2px 5px ${setcolor_player1}`;

function disabledAllButtons()
{
    button_click.forEach(button => {
        if(!button.classList.contains('buttons_options'))
        {
        button.disabled = true;
        }
    });
}

button_click.forEach((button,i)=>{
    button.addEventListener('click',()=>{
        // if(button.classList.contains('buttons')){
        if(!button.classList.contains('buttons_options')){
        winbox1.style.boxShadow="none";
        count++;
        if(count%2==0)
        {
            winbox1.style.boxShadow=`2px 2px 10px ${setcolor_player1}`;
            winbox2.style.boxShadow="none";
            button.style.backgroundColor=setcolor_player2;
            button.disabled=true;
            temp_player2.push(i);
            
        }
        else{
            winbox1.style.boxShadow="none";
            winbox2.style.boxShadow=`2px 2px 10px ${setcolor_player2}`;
            button.style.backgroundColor=setcolor_player1;
            button.disabled=true;
            temp_player1.push(i);
            
        }
    }
        win_combos.forEach((i)=>{
            if(i.every(val=>temp_player1.includes(val)))
            {
                winflg++;
                winbox1.style.boxShadow="2px 2px 8px rgb(1, 202, 224),-2px -2px 8px rgb(1, 202, 224)";
                player1_win_msg.innerHTML="Win 🏆";
                alert(name_of_firstplayer.innerHTML+" Win 🏆");
                disabledAllButtons();
                return;
            }
        });
        win_combos.forEach((i)=>{
            if(i.every(val=>temp_player2.includes(val)))
            {
                winflg++;
                winbox2.style.boxShadow="2px 2px 8px rgb(1, 202, 224),-2px -2px 8px rgb(1, 202, 224)";
                player2_win_msg.innerHTML="Win 🏆";
                alert(name_of_secondplayer.innerHTML+" Win 🏆");
                disabledAllButtons();
                return;
            }
        });
        if(count==9 && winflg==0)
        {
            winbox1.style.boxShadow="none";
            winbox2.style.boxShadow="none";
            player1_win_msg.innerHTML="Draw";
            player2_win_msg.innerHTML="Draw";
            winbox1.style.boxShadow="2px 2px 5px red";
            winbox2.style.boxShadow="2px 2px 5px green";
        }
    });
});
// game logic end
let reset_game=document.getElementById('restart_button');
reset_game.addEventListener('click',()=>{
    location.reload();
});
let main_menu_button=document.getElementById('main_menu_button');
main_menu_button.addEventListener('click',()=>{
    // alert('Quit the game ? Are you sure');
    let confirm_sure=confirm("Are you Sure? if you want to Quit the game.");
    if(confirm_sure)
    {
    location.href='menu.html';
    }
    else{

    }
});
