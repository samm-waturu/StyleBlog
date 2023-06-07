"use client";
import React from "react";
import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ id, title, slug }) => {
    const disqusShortname = "style-book"
    const disqusConfig = {
        url: `${slug}`,
        identifier: id, // Single post id
        title: title // Single post title
    }
    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}
export default DisqusComments;


