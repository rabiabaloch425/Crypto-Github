import React from "react";
import "./cards.styles.css";
import CardItems from "./Cards-Items/cards-items.component"
class Cards extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: '🤔 Shine',
                    time: '02:50, 3rd of Mar 2022',
                    id: 1,
                    type: 'RFI',
                    totalSupply: '10,000,000,000',
                    transaction: '0xbB78...2273',
                    contract: '0xbB78...2273',
                    linkUrl: ''
                },
                {
                    title: '🤔 wealth',
                    time: '23:35, 3rd of Feb 2022',
                    type: 'RFI',
                    totalSupply: '10,000,000,000',
                    transaction: '0xbB78...2273',
                    contract: '0xbB78...2273',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: '🤔 spectre',
                    time: '07:43, 23rd of Jan 2022',
                    type: 'RFI',
                    totalSupply: '10,000,000,000',
                    transaction: '0xbB78...2273',
                    contract: '0xbB78...2273',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: '🤔 Crptd',
                    time: '05:04, 3rd of Jan 2022',
                    type: 'RFI',
                    totalSupply: '10,000,000,000',
                    transaction: '0xbB78...2273',
                    contract: '0xbB78...2273',
                    id: 1,
                    linkUrl: ''
                },
                {
                    title: '🤔 Cff',
                    time: '22:46, 30th of Nov 2021',
                    type: 'RFI',
                    totalSupply: '10,000,000,000',
                    transaction: '0xbB78...2273',
                    contract: '0xbB78...2273',
                    id: 2,
                    linkUrl: ''
                },


            ]
        }

    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, time, type, totalSupply, transaction, contract, id, size, linkUrl }) => (
                    <CardItems key={id} title={title} type={type} totalSupply={totalSupply} transaction={transaction} contract={contract} time={time} size={size} linkUrl={linkUrl} />
                ))}

            </div>
        )
    }

}

export default Cards;
