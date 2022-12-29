import React,{useState,useEffect} from 'react';
import { Carousel } from 'primereact/carousel';



const Roomtypepage = (props) => {
    const {selectedCard} = props;
    const [imagesCount,setImagesCount] = useState();
    useEffect(()=>{
        let images =[];
        for(let i=0; i<selectedCard.count; i++){
            let index = i;
            images.push({
                image: index + 1
            })

        }
        setImagesCount(images)

    },[selectedCard.subImagesBaseUrl]);

    const productTemplate = (item) => {
        return (<img src ={require(`../../assets/images/${selectedCard.subImagesBaseUrl}/${item.image}.png`)}/>)

    }
    return (
        <div>
            <div className="card">
                <Carousel value={imagesCount} numVisible={3} numScroll={1} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
            </div>
        </div>
    )
};
export default Roomtypepage;