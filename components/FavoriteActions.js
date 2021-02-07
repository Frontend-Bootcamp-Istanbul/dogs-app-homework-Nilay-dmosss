import React from 'react';
import {Button} from "reactstrap";

const FavoriteActions = (props) => {
    console.log(props);
    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button disabled={props.IsToggling=props.id} color="primary" onClick={(e) => {e.stopPropagationprops();props.toggle(props.id)}}>Favoriye Ekle</Button>
                    <Button disabled={props.IsToggling=props.id} color="primary" onClick={(e) => {e.stopPropagationprops();props.toggle(props.id)}}>Favoriden çıkar</Button>
    }
        </div>
    );
};

export default FavoriteActions;