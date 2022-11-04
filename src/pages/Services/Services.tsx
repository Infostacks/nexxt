import { Box } from '@mui/material'
import React from 'react'
import CustomSoftware from '../../components/Custom Software/CustomSoftware'
import BuildAndVisualize from '../../components/Global Components/BuildAndVisualize'
import Business from '../../components/Global Components/Business'
import BusinessCustomCard from '../../components/Global Components/BusinessCustomCard'
import CustomButton from '../../components/Global Components/CustomButton'
import EmergingTechnologies from '../../components/Global Components/EmergingTechnologies'
import WorkNumbers from '../../components/Global Components/WorkNumbers'

const Services = () => {
    return (
        <>
            <CustomSoftware />
            <Business />
            <BusinessCustomCard />
           
            <BuildAndVisualize />
            <EmergingTechnologies />
            <WorkNumbers />
        </>
    )
}

export default Services