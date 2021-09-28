import React from "react"
import ContentLoader from "react-content-loader"

export const CardLoader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="139" cy="118" r="113" />
        <rect x="0" y="250" rx="6" ry="6" width="280" height="37" />
        <rect x="-2" y="297" rx="6" ry="6" width="280" height="64" />
        <rect x="0" y="380" rx="6" ry="6" width="98" height="45" />
        <rect x="119" y="379" rx="20" ry="20" width="159" height="45" />
    </ContentLoader>
)