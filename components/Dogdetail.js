import React from "react";
import dogs from "../dogsdata";
import { Image} from "react-bootstrap";

const Dogdetail = (props) => {
  const dogId = props.match.id;
  const founDog = dogs.find((dog) => dog.id === dogid);
  if(!foundDog){
    return <h2>{dogid} idli dog bulunamadı</h2>
  }

  return (
  
          <div> 
                  Adı: {Founddog.name}
                  </div>   
           <div>    
                  Yaşı: {Founddog.age}{" "}
              
                  </div>
           <div>
                  Türü: {Founddog.breed}{" "}
                  </div>
                  <div>
                  yayınlama tarihi: {Founddog.published_at}{" "}
                  </div>
                  <div>
                  breedSlug:{Founddog.breedSlug}{" "}
                  </div>
                   <div>
                  Tanıtımı: {Founddog.description}{" "}
                  </div>

                  <div>
               
                <Image src={Founddog.image} alt="/"  />
               
          </div>
        );
      };


export default Dogdetail;