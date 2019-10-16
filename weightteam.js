//Instructions: Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, 
//the second goes into team 2, the third to team one, etc. You are given a list of poeple by their weight. Return an array of two integers, 
//where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the 
//division is complete. 

function weightTeam(array){
let teamOne = 0
let teamTwo =0
for(let i=0; i<array.length; i++){
 if((i+2)%2==0){
   teamOne+=array[i]
 } else{
   teamTwo+=array[i]
 }
}
if(teamOne > teamTwo){
 console.log('Team One Wins')
} else{
 console.log('Team Two Wins')
}
return [teamOne, teamTwo]
}
weightTeam([122, 234, 204, 189, 305, 260, 115, 155, 236, 289])
