import React, {useState, useEffect} from 'react'

function Carousel() {

    const [description, setDescription] = useState(0);
    const [pagination, setPagination] = useState(0);
    const [data, setData] = useState();

    const fetchAllCarousel = () => {
        fetch("http://localhost:3000/carousel")
        .then(resp => resp.json())
        .then(carousel => setData(carousel))
    }

    //json-server --watch db.json

    const carousel0 = () => {
        setDescription(0)
        setPagination(0)
    }
    const carousel1 = () => {
        setDescription(1)
        setPagination(0)
    }
    const carousel2 = () => {
        setDescription(2)
        setPagination(0)
    }

    const handlePagination = (e) => {
        e.preventDefault();
        setPagination(e.target.id)
    }

    useEffect(() => {
        fetchAllCarousel();
    }, []);

    if(!data) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <section id="fundations" className="who__we__help">
                <h1>Komu pomagamy?</h1>
                <span className="decoration"></span>
                <div className="who__we__help__carousel">
                    <button onClick={carousel0} id={0} className="carousel__slide">Fundacjom</button>
                    <button onClick={carousel1} id={1} className="carousel__slide">
                        <span>
                        Organizacjom 
                        </span>
                        pozarządowym
                    </button>
                    <button onClick={carousel2} id={2} className="carousel__slide">
                        <span>
                        Lokalnym
                        </span>
                        zbiórkom
                    </button>
                </div>
                <p>{data[description].description}</p>
            </section>
            <section className="who__we__help__details">
                    <div className="list wrapper">
                        <div className="list__details">
                            <div>
                                <h2 className="list__left">{data[description].collection[pagination].name}</h2>
                                <p>{data[description].collection[pagination].desc}</p>
                            </div>
                            <div className="list__right">
                                <p>{data[description].collection[pagination].p}</p>
                            </div>
                        </div>
                        <div className="list__details">
                            <div>
                                <h2 className="list__left">{data[description].collection[pagination].name2}</h2>
                                <p>{data[description].collection[pagination].desc2}</p>
                            </div>
                            <div className="list__right">
                                <p>{data[description].collection[pagination].p2}</p>
                            </div>
                        </div>
                        <div className="list__details">
                            <div>
                                <h2 className="list__left">{data[description].collection[pagination].name3}</h2>
                                <p>{data[description].collection[pagination].desc3}</p>
                            </div>
                            <div className="list__right">
                                <p>{data[description].collection[pagination].p3}</p>
                            </div>
                        </div>
                        <div className="list__pagination">
                            {data[description].collection.length > 1 ? 
                                data[description].collection.map( el => 
                                    <button onClick={(e) => handlePagination(e)} className="pagination__box" id={el.id - 1} key={el.id}>
                                        {el.id}
                                    </button>
                                ) : <div style={{height: "50px"}}></div>}
                        </div>
                    </div>                
            </section>
        </>
    )
}

export default Carousel

// {data[description].collection.map( el => 
//     <button onClick={(e) => handlePagination(e)} className="pagination__box" id={el.id - 1} key={el.id}>
//         {el.id}
//     </button>
// )}
