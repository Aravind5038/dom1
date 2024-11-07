// click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50%

var b=document.getElementById("btn")
function a(){
    b.textContent="On click whit 60px size and border radius"
    b.style.backgroundColor="red"
    b.style.fontSize="60px"
    b.style.borderRadius="50%"
}

// click the button and display three images on clicking the button ft img should be of border radius 30px , second img should be border radius 100px , third img should be of borderradius 50%

var c=document.getElementById("btntwo")
function d(){
    c.innerHTML=`<img src="https://images.unsplash.com/photo-1620435363451-b84b06e6de72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" width="500" Style="border-radius:30px;">
    <img src="https://images.unsplash.com/photo-1620435363451-b84b06e6de72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" width="400" Style="border-radius:100px;">
    <img src="https://images.unsplash.com/photo-1620435363451-b84b06e6de72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" width="300" Style="border-radius:50%;">`
}
