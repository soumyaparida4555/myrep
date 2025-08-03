import { card_url } from "../utills/constraint";

const ResCard=(props)=>{

        const{info}=props?.resList;
        const{cloudinaryImageId,name,avgRating,totalRatingsString,cuisines,areaName}=info;
        

return(
      
    <div className="res-card-container">
       <img src={card_url+cloudinaryImageId} className="card-img"></img>
       <h3 className="card-offer">{ info?.aggregatedDiscountInfoV3?.header} { info?.aggregatedDiscountInfoV3?.subHeader}</h3>
     <div className="res-card-text">
     <h3>{name}</h3>
     
     <h4>{avgRating} {totalRatingsString}</h4>
     <h5>{cuisines.join(",")}</h5>
     <h5>{areaName}</h5>



     </div>
    </div>



)

}




export default ResCard;