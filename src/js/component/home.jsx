import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

const Home = ()=> {
    const [ color, setColor] = useState("");
    const [ YboxShadow, setYboxShadow] = useState('0px 0px 9px 4px #000000')
    const [ RboxShadow, setRboxShadow] = useState('0px 0px 9px 4px #000000')
    const [ GboxShadow, setGboxShadow] = useState('0px 0px 9px 4px #000000')


function changeColor(c) {
    setColor(c)
    if (color == 'yellow')
        {
            setYboxShadow('0px 0px 9px 4px #747DE8')
            setGboxShadow('0px 0px 9px 4px #000000')
            setRboxShadow('0px 0px 9px 4px #000000')

        }
         else if (color == 'red')
            {
                setYboxShadow('0px 0px 9px 4px #000000')
                setGboxShadow('0px 0px 9px 4px #000000')
                setRboxShadow('0px 0px 9px 4px #747DE8')
    
            }

         else if (color == 'green')
            {
                setYboxShadow('0px 0px 9px 4px #000000')
                setGboxShadow('0px 0px 9px 4px #747DE8')
                setRboxShadow('0px 0px 9px 4px #000000')
    
            }
}



    return (
<div>  
    <div className="container">
        <div className="holder"></div>
    </div>
    <div className="container">
        <div className="traffic-light">
            <div style={{ boxShadow: RboxShadow}} onClick={() => changeColor('red')} className="light red"></div>
            <div style={{ boxShadow: YboxShadow}}  onClick={() => changeColor('yellow')} className="light yellow"></div>
            <div style={{ boxShadow: GboxShadow}} onClick={() => changeColor('green')} className="light green"></div>	
        </div>
    </div>  
</div>

    );
};


//include images into your bundle



//create your first component


export default Home;
