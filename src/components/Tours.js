import Title from "./Title";
import { tourCard } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
         <Title title= 'featured' subtitle= 'tours' /> 


    <div className="section-center featured-center">
      {tourCard.map((card)=>{
          const {id, image, title, para, date, location, duration, money}= card;
          return (
<article className="tour-card">
        <div className="tour-img-container" key={card.id}>
          <img src={image} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>
          {para}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span>{location}
            </p>
            <p>{duration}</p>
            <p>{money}</p>
          </div>
        </div>
      </article>
        )
      })
      }     
    </div>
  </section>  )
}
export default Tours;