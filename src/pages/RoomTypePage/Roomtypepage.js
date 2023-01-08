import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import "./Roomtypepage.scss"


const Roomtypepage = (props) => {
    const { selectedCard } = props;
    const [imagesCount, setImagesCount] = useState();
    useEffect(() => {
        let images = [];
        for (let i = 0; i < selectedCard.count; i++) {
            let index = i;
            images.push({
                image: index + 1
            })

        }
        setImagesCount(images)

    }, [selectedCard.subImagesBaseUrl]);

    const productTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={require(`../../assets/images/${selectedCard.subImagesBaseUrl}/${item.image}.png`)} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="card">
                <Carousel value={imagesCount} numVisible={2} numScroll={2} className="custom-carousel" circular
                    // autoplayInterval={1500}
                    itemTemplate={productTemplate} header={<h2>{selectedCard.subImagesBaseUrl.toUpperCase()}</h2>} />
            </div>
            <div className='image-cards'>
                {imagesCount && imagesCount.map((item) => {
                    return productTemplate(item)
                })}

            </div>
        </div>
    )
};
export default Roomtypepage;