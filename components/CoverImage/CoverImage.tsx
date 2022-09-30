import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
    image: StaticImageData,
}

export const CoverImage = ({ image }: Props) => {
    return (
        <Image src={image}
            alt='project cover image'
            objectFit='cover'
        />
    )
}