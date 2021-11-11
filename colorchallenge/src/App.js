import React, {useState, useEffect} from 'react'

function App() {

  var [styles, setStyles] = useState([])

  useEffect(() => {
    var l = []
    var j = 0
    for (let r = 0; r < 256; r+= 8){
      var newRow = []
      for (let g = 0; g < 256; g += 8 ){
        for (let b = 0; b < 256; b+= 8 ){
          var grid ={
          style : {
          // height: "5px",
          // width: "5px",
          height: "20px",
          width: "40px",
          backgroundColor: `rgb(${r},${g},${b})`,
          display: "inline-flex",
          },
          index: j,
          red: r,
          green: g,
          blue: b
        }
        j+= 1;
        newRow.push(grid)
        
        }
      }
      l.push(newRow)

    }
    // l.concat(blue)
    // l.concat(green)
    // l.concat(red)
    reGroupColorRows(l)
    // setStyles(l)
  },[])

  function getRandom(max, min) {
    return Math.floor(Math.random() * (max- min) + min) 
  }

  // swapping array, keeps the number of rows the same
  function swapArr(array1, ind1, ind2) {
    let tmpVal = array1[ind1]
    array1[ind1] = array1[ind2]
    array1[ind2] = tmpVal
  }

  // To alter rows of colors
  function reGroupColorRows(arr){
    var tmpArr = []
    for (let i = 0; i< arr.length; i++){
      var newArr = []
      for (let j = 0; j < arr[i].length; j++){
          let styleProp = arr[i][j]
          var x1 = j
          var x2 = getRandom(arr[i].length, j)

          if (styleProp.blue === 24 || styleProp.red === 24){
            console.log("here")
            swapArr(arr[i], x1,x2)
          }
          
          newArr = arr[i]
      }
      tmpArr.push(newArr)
    }
    setStyles(tmpArr)
  }

  return (
    <div style={{height: "640px", width: "1280px", paddingLeft:"5%"}}>
      {styles.map((row) => 
        <div style={{marginTop: "0px"}}>
          {row.map((col) => 
            <div style={col.style} key={col.index}>{col.blue}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
