import Button from 'react-bootstrap/Button'
import { useState } from "react";

import ProgressBar from 'react-bootstrap/ProgressBar'
function Votes (){
    const [chocoVotes, setChocoVotes] = useState(0); 
    const [strawVotes, setStrawVotes] = useState(0); 
    const [vanilVotes, setVanilVotes] = useState(0); 
    const [totesVotes, setTotesVotes] = useState(0); 
        
    return(
        <div>

            <h1>Vote for Loki</h1>
    
                <Button  variant="primary" onClick={()=> {
                    setChocoVotes(prv => prv +1);
                    setTotesVotes(prv => prv + 1);
                    }}>Chocolate</Button>
                
                <Button  variant="secondary" onClick={()=> {setStrawVotes(prv => prv +1); setTotesVotes(prv => prv + 1);}}>Strawberry</Button>
                
                <Button  variant="success" onClick={()=> {setVanilVotes(prv => prv +1); setTotesVotes(prv => prv + 1);}}>Vanilla</Button>
                <p>Chocolate: {chocoVotes} ({(chocoVotes / totesVotes).toFixed(1)}%)</p>
                <ProgressBar now={chocoVotes} />
                <p>Strawberry: {strawVotes} ({(strawVotes / totesVotes).toFixed(1)}%)</p>
                <ProgressBar now={strawVotes} />
                <p>Vanilla: {vanilVotes} ({(vanilVotes / totesVotes).toFixed(1)}%)</p>
                <ProgressBar now={vanilVotes} />
        </div>
    )
}

export default Votes;