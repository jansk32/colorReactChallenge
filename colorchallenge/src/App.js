import React, {useState, useEffect} from 'react'

function App() {

  var [styles, setStyles] = useState([])

  useEffect(() => {
    var l = []
    var j = 0
    for (let r = 8; r <= 256; r+= 8){
      var newRow = []
      for (let g = 8; g <= 256; g += 8 ){
        for (let b = 8; b <= 256; b+= 8 ){
          var grid ={
          style : {
          height: "10px",
          width: "10px",
          // height: "20px",
          // width: "40px",
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

  // swap colors in 2 different arrays
  function swapColorsInArr(arr1, arr2, indArr1, indArr2){
      var tmpArr = arr1[indArr1]
      arr1[indArr1] = arr2[indArr2]
      arr2[indArr2] = tmpArr
  }

  // To alter rows of colors
  function reGroupColorRows(arr){
    var tmpArr = []
    for (let i = 0; i< arr.length; i++){
      var newArr = []
      for (let j = 0; j < arr[i].length; j++){
          let styleProp = arr[i][j]
          var x1 = j

          if (styleProp.blue % 6 === 4){
            swapColorsInArr(arr[i], arr[(arr.length - i  -1 )], i, j, j )
          }

          if (  styleProp.red / 8 === 4 ){
            var ind2 = arr[i].length - j - 1
            // console.log(x1, ind2)
            swapArr(arr[i],x1,ind2)
          }

          newArr = arr[i]
      }
      tmpArr.push(newArr)
    }
    setStyles(tmpArr)
  }

  return (
    <div style={{height: "640px !important", width: "1280px", paddingLeft:"5%"}}>
      {styles.map((row) => 
        <div style={{marginTop: "0px"}}>
          {row.map((col) => 
            <div style={col.style} key={col.index}></div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
