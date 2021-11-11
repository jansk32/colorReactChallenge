import React, {useState, useEffect} from 'react'

function App() {

  var [styles, setStyles] = useState([])

  useEffect(() => {
    var l = []
    var blue = []
    var green = []
    var red = []
    var j = 0
    for (let r = 0; r < 256; r+= 8){
      var newRow = []
      for (let g = 0; g < 256; g += 8 ){
        for (let b = 0; b < 256; b+= 8 ){
          var grid ={
          style : {
          height: "10px",
          width: "10px",
          backgroundColor: `rgb(${r},${g},${b})`,
          display: "inline-flex",
          margin: "0"
          },
          index: j
        }
        j+= 1;
        newRow.push(grid)
          // if (r === 8 && g % 3 === 2){
          //   blue.push(grid)
          // }else if(r % 7 === 5 || g === 128){
          //   green.push(grid)
          // }else if(r % 4 === 3 || b % 5 === 3 ){
          //   red.push(grid)
          // }else{
          //   l.push(grid);
          // }
        }
      }
      l.push(newRow)

    }
    // l.concat(blue)
    // l.concat(green)
    // l.concat(red)
    
    setStyles(l)
  },[])

  // function tablize(arr){
  //   var grids = "<div>"
  //   for (let i = 0;i< arr.length;i++){
  //     let elem = JSON.stringify(arr[i].style);
  //     // let elemInd = arr[i].index
  //     if (arr[i].index % 10 === 0){
  //       grids = grids + "<div style={"+ elem +"}></div><br />"
  //     }else{
  //       grids = grids +  `"<div style={"+ elem +"}></div>`
  //     }
  //     console.log(grids)
  //   }
  //   grids += "</div>"
  //   return grids
    
  // }

  return (
    <div style={{height: "2560px", width: "1280px", paddingLeft:"5%"}}>
      {styles.map((row) => 
        <div>
          {row.map((col) => 
          
            <div style={col.style} key={col.index}></div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
