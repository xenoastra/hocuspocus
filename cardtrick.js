function button(){
    document.getElementById('carda')
    .src="picturevanessa/cards-face-a.png";
    document.getElementById('message1')
    .innerHTML="pick a card";
}
  
function button2(){
    document.getElementById('cardb')
    .src="picturevanessa/cards-face-b.png";
    document.getElementById('message2')
    .innerHTML="The card you were thinking of is now removed";
}





function changeImage(){
    var Image_Id = document.getElementById('cardsa');
            if (Image_Id.src.match("picturevanessa/cards-face-a.png")) {
                Image_Id.src = "picturevanessa/cards-face-b.png";
                document.getElementById("cardo").innerHTML = "Your card has been removed"
               
            }
            else {
                Image_Id.src = "picturevanessa/cards-face-a.png";
            }
    
}
// function changeImage(){
//     var Cardo_Id = document.getElementById('cardo');
//             if Cardo_Id.src = "Pick a card" {
                
//             }
//             else {
//                 Image_Id.src = "picturevanessa/cards-face-a.png";
//             }
    
// }
// function changetext(){
//     var
// }