import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./MyAccordion.css";


function MyAccordion(){

    const [yesterdayCases, setYesterdayCases] = useState({});
    const [cases, setCases] = useState({});


    useEffect(() => {
        async function getCases(){
            const result = await fetch("https://api.covid19api.com/country/italy").then(response => response.json());
            setCases(result[result.length - 1]);
            setYesterdayCases(result[result.length - 2]);
        }


        getCases();
    }, []);


    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Casi totali
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>{cases.Confirmed}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Morti
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>{cases.Deaths}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Guariti
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>{cases.Recovered}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Positivi
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>{cases.Active}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        Nuovi positivi
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>{cases.Active - yesterdayCases.Active}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}


export default MyAccordion;