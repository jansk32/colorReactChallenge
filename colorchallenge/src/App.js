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
          if (r === 8 && g % 3 === 2){
            blue.push(grid)
          }else if(r % 7 === 5 || g === 128){
            green.push(grid)
          }else if(r % 4 === 3 || b % 5 === 3 ){
            red.push(grid)
          }else{
            l.push(grid);
          }
        }
      }

    }
    l.concat(blue)
    l.concat(green)
    l.concat(red)
    
    setStyles(l)
  },[])

  function tablize(obj){
    if (obj.index % 10 === 0){
    return (
      <tr>
        <td style={obj.style}></td>
      </tr>
    )
    }else{
      <td style= {obj.style}></td>
    }
  }

  return (
    <div style={{height: "2560px", width: "1280px", paddingLeft:"5%"}}>
      {styles.map((s) => <div style={s.style} key={s.index}></div>)}
    </div>
  );
}

export default App;
