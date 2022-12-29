import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import content from "../../content.json";
import "./Dashboard.scss";
import Roomtypepage from "../RoomTypePage/Roomtypepage";
// import icon from "../../assets/images/"
const Dashboard = () => {
    console.log(content)
    const { Cards = [] } = content;
    const [selectedCard, setSelectedCard] = useState("");
    const onCardClick = (subImagesBaseUrl,count=0) => {

        setSelectedCard({subImagesBaseUrl:subImagesBaseUrl,count:count});
    }
    return (<div>
        {selectedCard ? <Roomtypepage selectedCard={selectedCard} /> :
            <React.Fragment>
                <h2 style={{
                    fontFamily: "open-sans"
                }}>Explore inspirational designs for every room to transform your home to a dream home.</h2>
                <div className='dashboard-cards'>
                    {Cards && Cards.map((card) => {
                        return (
                            <div className='cards' onClick={() => onCardClick(card.subImagesBaseUrl,card?.count)}>
                                <h3>{card.name}</h3>
                                <img src={require(`../../assets/images/${card.image}`)} />
                            </div>
                        )

                    })}
                </div>
            </React.Fragment>
        }
    </div>

    )

};
export default Dashboard;