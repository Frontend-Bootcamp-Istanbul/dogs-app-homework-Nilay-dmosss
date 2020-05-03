import React from "react";
import dogs from "../dogsdata";
import { Image} from "react-bootstrap";
const bilgiler = (props) => {
  const secilenId = props.match.id;
  const secilenKopek = dogs.filter((dog) => dog.id === secilenId);
  return (
    <h2>
      {secilenKopek.map((dog) => {
        return (
          <div key={dog.id}>
                  Secilen Köpeğin Id'si : {secilenId}
                  Adı: {dog.name}
                  Yaşı: {dog.age}{" "}
                  Türü: {dog.breed}{" "}
                  yayınlama tarihi: {dog.published_at}{" "}
                  breedSlug:{dog.breedSlug}{" "}
                  Tanıtımı: {dog.description}{" "}
                 <Image src={dog.image}  />
          </div>
        );
      })}
    </h2>
  );
};
export default bilgiler;