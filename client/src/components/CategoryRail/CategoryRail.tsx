import * as React from 'react'
import CategoryCard from "./CategoryCard";
import { Rail } from "./styles"
import headphoneIcons from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersIcons from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesIcons from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'


const CategoryRail = (): JSX.Element => {

    return (
        <Rail>
            <CategoryCard
                title={'Headphones'}
                image={headphoneIcons}
                link={"/products/headphones"}
            />
            <CategoryCard
                title={'Speakers'}
                image={speakersIcons}
                link={"/products/speakers"}
            />
            <CategoryCard
                title={'Earphones'}
                image={earphonesIcons}
                link={"/products/earphones"}
            />
        </Rail>
    )

}

export default CategoryRail