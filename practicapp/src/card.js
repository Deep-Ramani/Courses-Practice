import CardDetail from "./components/cardDetails";  

function Card(props){
    const cardDetail = [
        {
            imgSrc :'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
            name : 'Deep Ramani',
            title : 'Ceo & founder',
            university : 'Howard University'
        },

        {
            imgSrc :'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
            name : 'Jay Ramani',
            title : 'Ceo & founder',
            university : 'Howard University'
        },

        {
            imgSrc :'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
            name : 'Ajay MArkana',
            title : 'Ceo & founder',
            university : 'Howard University'
        },

        {
            imgSrc :'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
            name : 'Sandeep Parmar',
            title : 'Ceo & founder',
            university : 'Howard University'
        }
    ]


    return(
        <>
        <CardDetail imgSrc={cardDetail[0].imgSrc} name={cardDetail[0].name} title={cardDetail[0].title} university={cardDetail[0].university}/>

        <CardDetail imgSrc={cardDetail[1].imgSrc} name={cardDetail[1].name} title={cardDetail[1].title} university={cardDetail[1].university}/>
        <CardDetail imgSrc={cardDetail[2].imgSrc} name={cardDetail[2].name} title={cardDetail[2].title} university={cardDetail[2].university}/>
        <CardDetail imgSrc={cardDetail[3].imgSrc} name={cardDetail[3].name} title={cardDetail[3].title} university={cardDetail[3].university}/>
        </>
    );
}

export default Card;