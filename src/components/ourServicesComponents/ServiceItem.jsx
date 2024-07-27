import Image from 'next/image'
import React from 'react'
import { Col,  Row } from 'react-bootstrap'
import FadeAnimate from '../common/animation/FadeAnimate'

const ServiceItem = ({data, index}) => {
    const thumbnailCol = _=>(
        <Col md={6} lg={4}  className='d-flex justify-content-md-end justify-content-center order-1 order-md-0'>
        <Image src={data.thumbnail} alt={data.name} />
        </Col>
    )
    const descriptionCol = _=>(
        <Col md={6} lg={6} className='order-2 order-md-0'>
        <h2 className='mb-4'>{data.name}</h2>
        <p style={{fontSize: '14px'}}>{data.descriptionTwo}</p>
        </Col>
    )
    if(!data.descriptionTwo&& !data.thumbnail) return null
  return (
    <FadeAnimate dir={index % 2 == 0 ? 'rtl' : 'ltr'}>
    <Row className='justify-content-between align-items-center gy-3'>
        {index % 2 == 0 ? (
            <>
            {descriptionCol()}
            {thumbnailCol()}
            </>
        ) : (
            <>
            {thumbnailCol()}
            {descriptionCol()}
            </>
        ) }
    </Row>
        </FadeAnimate>
  )
}

export default ServiceItem