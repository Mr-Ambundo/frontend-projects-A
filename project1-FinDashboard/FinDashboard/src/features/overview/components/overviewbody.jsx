import Card from "../../../components/Card/card";
//import Chart from "../../../components/Charts/charts";
import Modal from "../../../components/Modal/modals";
import { useState } from "react";

function overviewBody() {
    const [ modObject, setModObject ] = useState([
        {
            id: 1,
            title: "Recent Transactions",
            link: 'https://www.deguma.com',
            summary: [1, 2, 3],
            face: [1, 2, 3]
        },
        {
            id: 2,
            title: "Budget Overview",
            link: 'https://www.deguma.com',
            face: [1, 2, 3]

        },
        {
            id: 3,
            title: "Investement Portfolio",
            link: 'https://www.deguma.com',
            face: [1, 2, 3]
        }]);



    const [ cardObject, setCardObject ] = useState([
        {
            id: 1,
            title: "Total Balance",
            summary: "+22% from last month",
            figures: '$23300.50'

        },
        {
            id: 2,
            title: "Total Income",
            summary: "+8.2% from last month",
            figures: '$8490.00'

        },
        {
            id: 3,
            title: "Total Expenses",
            summary: "-3.4% from last month",
            figures: '$5430.20'
        },
        {
            id: 4,
            title: "Savings Rate",
            summary: "+5.7% from last month",
            figures: '36.1%'
        }
    ]);

    const [ chartObject, setChartObject ] = useState({});


    ///cardElements - capture as object and apply the rendering conditions to it

    const cardElements =
            cardObject.map((card) => {
                return <Card key={card.id} title={card.title} figures={card.figures} summary={card.summary} />
            })
        
    
    ///chartElements - capture as object and apply the rendering conditions to it



    ///modalElements - capture as object and apply the rendering conditions to it
    const modalElements = modObject.map((mod) => {
                if (mod.summary) {
                    return <Modal key={mod.id} title={mod.title} link={mod.link} summary={mod.summary} face={mod.face} />
                } 
                 return <Modal key={mod.id} title={mod.title} link={mod.link} face={mod.face} />
                
            })
        
    



    return (
        <>
            <div className="fin-summaries">
                {cardElements}
            </div>

            <div className="dtled-summaries">
                {modalElements}
            </div>
        </>
    )
}

export default overviewBody;
///imported by overview