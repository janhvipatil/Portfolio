import { Center, Stack } from '@chakra-ui/react'
import React from 'react'
import nicelogo from '../assets/company logos/nice-logo.jpg'
import myassetbuddylogo from '../assets/company logos/myassetbuddy-logo.jpg'
import medbuyerlogo from '../assets/company logos/medbuyer-logo.jpg'
import { JobInfoBox } from '../components/JobInfoBox/JobInfoBox'


type Props = {}

const Work = (props: Props) => {

    return (
        <>

            <Center pl={56} pt={44} pr={52} pb={12}>
                <Stack spacing={28}>

                    <JobInfoBox
                        logo={myassetbuddylogo}
                        logoWidth='150px'
                        logoHeight='55px'
                        mt='0'
                        dates='Feb 2022 - Current'
                        position='Product Manager and Software Engineer'
                        companyName='My Asset Buddy'
                        companylink='https://www.myassetbuddy.in/about'
                        location='Hyderabad, India'
                        jobdetails='Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantiumdoloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventoreveritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemoenim ipsam 
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit,sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        doloremagnam aliquam quaerat voluptatem.'
                        jobdetails2='qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        doloremagnam aliquam quaerat voluptatem.'
                    />

                    <JobInfoBox
                        logo={medbuyerlogo}
                        logoWidth='160px'
                        logoHeight='35px'
                        mt='1'
                        dates='Nov 2021 - Feb 2022'
                        position='Software Developer'
                        companyName='MedBuyer'
                        companylink='https://medbuyer.in/About'
                        location='Pune, India'
                        jobdetails='Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantiumdoloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventoreveritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemoenim ipsam 
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit,sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        doloremagnam aliquam quaerat voluptatem.'
                    />

                    <JobInfoBox
                        logo={nicelogo}
                        logoWidth='110px'
                        logoHeight='35px'
                        mt='2'
                        dates='Aug 2020 - Dec 2021'
                        position='Associate Application Operations Engineer'
                        companyName='NICE Interactive Solutions India'
                        companylink='https://www.nice.com/company/about-us'
                        location='Pune, India'
                        jobdetails='Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantiumdoloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventoreveritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemoenim ipsam 
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit,sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        doloremagnam aliquam quaerat voluptatem.'
                    />
                </Stack>
            </Center>
        </>
    )
}

export default Work