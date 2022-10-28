import { Button, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import { SiNextdotjs } from 'react-icons/si'
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
import chakra from '../../assets/tech logos/chakra.png'
import bitbucket from '../../assets/tech logos/bitbucket.png'
import bash from '../../assets/tech logos/bash.png'
import redis from '../../assets/tech logos/redis.png'
import Image, { StaticImageData } from 'next/image'

type TechStack = {
    logo: StaticImageData,
    label: string,
}

const techStack: TechStack[] = [
    { logo: typescript, label: 'TypeScript' },
    { logo: javascript, label: 'JavaScript' },
    { logo: react, label: 'React' },
    { logo: nextjs, label: 'NextJS' },
    { logo: html, label: 'HTML' },
    { logo: css, label: 'CSS' },
    { logo: aws, label: 'AWS' },
    { logo: frappe, label: 'Frappe' },
    { logo: python, label: 'Python' },
    { logo: postman, label: 'Postman' },
    { logo: git, label: 'Git' },
    { logo: linear, label: 'Linear' },
    { logo: supabase, label: 'Supabase' },
    { logo: firebase, label: 'Firebase' }
]

export const TechStack = () => {
    return (
        <Stack spacing={8}>
            <SimpleGrid columns={{ base: 3, md: 5 }} spacing={3}>
                {techStack.map((s: TechStack) =>
                    <Button
                        textAlign='left'
                        size={{ base: 'xs', md: 'md' }}
                        key={s.label}
                        variant='outline'
                        leftIcon={s.label === 'NextJS' ? <SiNextdotjs /> : <Image src={s.logo} alt={`${s.label} logo`} height='16px' width='16px' />}>
                        {s.label}
                    </Button>
                )}
            </SimpleGrid>
        </Stack>
    )
}

const myassetbuddyTechStack: TechStack[] = [
    { logo: typescript, label: 'TypeScript' },
    { logo: javascript, label: 'JavaScript' },
    { logo: react, label: 'React' },
    { logo: aws, label: 'AWS' },
    { logo: frappe, label: 'Frappe' },
    { logo: python, label: 'Python' },
    { logo: postman, label: 'Postman' },
    { logo: git, label: 'Git' },
    { logo: linear, label: 'Linear' },
    { logo: firebase, label: 'Firebase' },
    { logo: redis, label: 'Redis' },
    { logo: mongodb, label: 'MongoDB' }
]

export const MyAssetBuddyTechStack = () => {
    return (
        <Stack spacing={8}>
            <SimpleGrid columns={{ base: 3, md: 5 }} spacing={3}>
                {myassetbuddyTechStack.map((s: TechStack) =>
                    <Button
                        textAlign='left'
                        size={{ base: 'xs', md: 'md' }}
                        key={s.label}
                        variant='outline'
                        leftIcon={<Image src={s.logo} alt={`${s.label} logo`} height='18px' width='18px' />}>
                        {s.label}
                    </Button>
                )}
            </SimpleGrid>
        </Stack>
    )
}

const niceTechStack: TechStack[] = [
    { logo: aws, label: 'AWS' },
    { logo: opsgenie, label: 'OpsGenie' },
    { logo: bash, label: 'Bash' },
    { logo: python, label: 'Python' }
]

export const NiceTechStack = () => {
    return (
        <Stack spacing={8}>
            <SimpleGrid columns={{ base: 3, md: 5 }} spacing={3}>
                {niceTechStack.map((s: TechStack) =>
                    <Button
                        textAlign='left'
                        size={{ base: 'xs', md: 'md' }}
                        key={s.label}
                        variant='outline'
                        leftIcon={
                            s.label === 'Bash' ? <Image src={s.logo} alt={`${s.label} logo`} height='25px' width='25px' /> :
                                <Image src={s.logo} alt={`${s.label} logo`} height='16px' width='16px' />
                        }>
                        {s.label}
                    </Button>
                )}
            </SimpleGrid>
        </Stack>
    )
}

const medBuyerTechStack: TechStack[] = [
    { logo: typescript, label: 'TypeScript' },
    { logo: react, label: 'React' },
    { logo: firebase, label: 'Firebase' },
    { logo: chakra, label: 'Chakra UI' },
    { logo: jira, label: 'Jira' },
    { logo: bitbucket, label: 'Bitbucket' }
]

export const MedBuyerTechStack = () => {
    return (
        <Stack spacing={8}>
            <SimpleGrid columns={{ base: 3, md: 5 }} spacing={3}>
                {medBuyerTechStack.map((s: TechStack) =>
                    <Button
                        textAlign='left'
                        size={{ base: 'xs', md: 'md' }}
                        key={s.label}
                        variant='outline'
                        leftIcon={<Image src={s.logo} alt={`${s.label} logo`} height='16px' width='16px' />}>
                        {s.label}
                    </Button>
                )}
            </SimpleGrid>
        </Stack>
    )
}