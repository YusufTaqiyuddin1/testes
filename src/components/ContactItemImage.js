import React from "react";

function ContactItemImage({imageUrl}){
    return(
        <div className="contact-item__image">
            <image src={imageUrl} alt="contact-profile"/>
        </div>
    )
}

export default ContactItemImage;