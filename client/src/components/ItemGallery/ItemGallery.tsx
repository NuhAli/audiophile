import React from 'react'
import { Gallery, Grid, PrimaryImage, SecondaryImage } from './styles'

interface GalleryProps {
    gallery: string[] | undefined
}

const ItemGallery = ({ gallery }: GalleryProps): JSX.Element | null => {
    return (
        gallery ? (
            <Gallery>
                <Grid>
                    <SecondaryImage src={gallery[0]} />
                    <SecondaryImage src={gallery[1]} />
                </Grid>
                <PrimaryImage src={gallery[2]} />
            </Gallery>
        ) : null
    )
}

export default ItemGallery