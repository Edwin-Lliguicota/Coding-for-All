var num = Math.floor(Math.random() * 11);
console.log(num);
let quote = document.getElementById("quote");
let theBtn = document.getElementById("theBtnOne");

function onUserClick(){
  var num = Math.floor(Math.random() * 11);
  return num;

}

console.log(num);
theBtn.addEventListener("click", onUserClick);

if (num == 1){
  document.getElementById("quote").innerHTML = "Of course bad code can be cleaned up. But it’s very expensive.” — Robert C. Martin";
}

switch(num){
  case 2:
    document.getElementById("quote").innerHTML = "Practice, Practice, Practice! Musicians don’t only play when they are on stage in front of an audience.”— Michael Toppa";
  break
  

  case 3:
    document.getElementById("quote").innerHTML = "It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive. - Steve McConnell";
  break

  case 4:
    document.getElementById("quote").innerHTML = "You are responsible for the quality of your code. Not your client. Not your boss. […] You don’t go to the doctor and say: You know what doc? I’m in a hurry, why won’t you skip washing your hands?”— Michael Toppa";
  break

  case 5:
    document.getElementById("quote").innerHTML = "The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and then start on the first one.” — Mark Twain";
  break

  case 6:
    document.getElementById("quote").innerHTML = "Any fool can use a computer. Many do.";
  break

  case 7:
    document.getElementById("quote").innerHTML = "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program";
  break

  case 8:
    document.getElementById("quote").innerHTML = "It’s hard enough to find an error in your code when you’re looking for it; it’s even harder when you’ve assumed your code is error-free. ”  – Steve McConnell";
  break

  case 9:
    document.getElementById("quote").innerHTML = "The only way to learn a new programming language is by writing programs in it.";
  break

  case 10:
    document.getElementById("quote").innerHTML = "The computer was born to solve problems that did not exist before. - Bill Gates";
  break
}