import { Button, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import { SiMongodb, SiNextdotjs } from 'react-icons/si'
import typescript from '../../assets/tech logos/typescript.png'
import javascript from '../../assets/tech logos/javascript.png'
import react from '../../assets/tech logos/react.png'
import nextjs from '../../assets/tech logos/nextjs.png'
import aws from '../../assets/tech logos/aws.png'
import python from '../../assets/tech logos/python.png'
import frappe from '../../assets/tech logos/frappe.jpeg'
import postman from '../../assets/tech logos/postman.png'
import opsgenie from '../../assets/tech logos/opsgenie.png'
import git from '../../assets/tech logos/git.png'
import jira from '../../assets/tech logos/jira.png'
import linear from '../../assets/tech logos/linear.png'
import html from '../../assets/tech logos/html5.png'
import css from '../../assets/tech logos/css.png'
import supabase from '../../assets/tech logos/supabase.png'
import mongodb from '../../assets/tech logos/mongodb.png'
import firebase from '../../assets/tech logos/firebase.png'
import Image, { StaticImageData } from 'next/image'

type TechStack = {
    logo: StaticImageData,
    label: string,
    color: string
}

const techStack: TechStack[] = []

const myassetbuddyTechStack: TechStack[] = [
    { logo: typescript, label: 'TypeScript', color: 'linkedin' },
    { logo: javascript, label: 'JavaScript', color: 'yellow' },
    { logo: react, label: 'React', color: 'cyan' },
    { logo: aws, label: 'AWS', color: 'orange' },
    { logo: frappe, label: 'Frappe', color: 'blue' },
    { logo: python, label: 'Python', color: 'blue' },
    { logo: postman, label: 'Postman', color: 'orange' },
    { logo: git, label: 'Git', color: 'orange' },
    { logo: linear, label: 'Linear', color: 'purple' },
    { logo: firebase, label: 'Firebase', color: 'yellow' },
    { logo: mongodb, label: 'MongoDB', color: 'green' }
]

const niceTechStack: TechStack[] = [
    { logo: aws, label: 'AWS', color: 'orange' },
    { logo: python, label: 'Python', color: 'blue' },
    { logo: postman, label: 'Postman', color: 'orange' },
    { logo: opsgenie, label: 'OpsGenie', color: 'linkedin' },
    { logo: jira, label: 'Jira', color: 'blue' },
]

export const TechStack = () => {
    return (
        <Stack spacing={8}>
            <SimpleGrid columns={5} spacing={3}>
                {techStack.map((s: TechStack) =>
                    <Button
                        key={s.label}
                        variant='outline'
                        rounded='2xl'
                        boxShadow='base'
                        colorScheme={s.color}
                        leftIcon={s.label === 'NextJS' ? <SiNextdotjs /> : <Image src={s.logo} alt={`${s.label} logo`} height='16px' width='16px' />}>
                        {s.label}
                    </Button>
                )}
            </SimpleGrid>
        </Stack>
    )
}

export const MyAssetBuddyTechStack = () => {
    return (
        <Stack spacing={8}>
            <SimpleGrid columns={5} spacing={3}>
                {myassetbuddyTechStack.map((s: TechStack) =>
                    <Button
                        key={s.label}
                        variant='outline'
                        rounded='2xl'
                        boxShadow='base'
                        colorScheme={s.color}
                        leftIcon={<Image src={s.logo} alt={`${s.label} logo`} height='16px' width='16px' />}>
                        {s.label}
                    </Button>
                )}
            </SimpleGrid>
        </Stack>
    )
}

export const NiceTechStack = () => {
    return (
        <Stack spacing={8}>
            <SimpleGrid columns={5} spacing={3}>
                {niceTechStack.map((s: TechStack) =>
                    <Button
                        key={s.label}
                        variant='outline'
                        rounded='2xl'
                        boxShadow='base'
                        colorScheme={s.color}
                        leftIcon={<Image src={s.logo} alt={`${s.label} logo`} height='16px' width='16px' />}>
                        {s.label}
                    </Button>
                )}
            </SimpleGrid>
        </Stack>
    )
}

