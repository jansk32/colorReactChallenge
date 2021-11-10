import React, {useState, useEffect} from 'react'

function App() {

  var [styles, setStyles] = useState([])

  useEffect(() => {
    var l = []
    for (let r = 0; r < 256; r+= 8){
      for (let g = 0; g < 256; g += 8 ){
        for (let b = 0; b < 256; b+= 8 ){
          var style = {};
          // style.height = "1px";
          // style.width = "1px";
          style.backgroundColor = `rgb(${r},${g},${b})`;
          style.display = "inline-flex"
          l.push(style);
        }
      }

    }
    setStyles(l)
  },[])

  return (
    <div style={{height: "256px", width: "128px", paddingLeft:"10%"}}>
      {styles.map((s) => <div style={s} key={s.backgroundColor}></div>)}
    </div>
  );
}

export default App;
