import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import "./AdDesigner.css";
function AdDesigner(){
    const [ad, setAd] = useState("Strawberry");
    const [theme, setTheme] = useState("Dark");
    const [font, setFont] = useState(18);
    const styles = { fontSize: font }
    return (
        <div className="AdDesigner">

            <Card style={{ width: '18rem', textAlign: "center" }}>
                <Card.Body className={theme == "Light" ? "light" : "dark"}>
                    <Card.Title>Vote For</Card.Title>
                    <Card.Subtitle className="mb-2" style={styles}>{ad}</Card.Subtitle>
            
                </Card.Body>
            </Card>
            <h2>What to Support</h2>
            <Button disabled={ad === "Chocolate"} variant="primary" onClick={()=> {setAd("Chocolate")}}>Chocolate</Button>
            
            <Button disabled={ad === "Strawberry"} variant="secondary" onClick={()=> {setAd("Strawberry")}}>Strawberry</Button>
            
            <Button disabled={ad === "Vanilla"} variant="success" onClick={()=> {setAd("Vanilla")}}>Vanilla</Button>
            <h2>Color Theme</h2>
            <Button disabled={theme === "Light"} variant="primary" onClick={()=> {setTheme("Light")}}>Light</Button>
            <Button disabled={theme === "Dark"} variant="primary" onClick={()=> {setTheme("Dark")}}>Dark</Button>

            <h2>Font Size</h2>

            <Button  variant="primary" onClick={()=> {setFont((prv) => prv -1)}}>Down</Button>
            <span>{font}</span>
            <Button  variant="primary" onClick={()=> {setFont((prv) => prv +1)}}>Up</Button>

        </div>
    )
}

export default AdDesigner;