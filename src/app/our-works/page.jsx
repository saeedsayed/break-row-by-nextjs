import PageAnimate from '@/components/common/animation/PageAnimate'
import Banner from '@/components/ourWorksComponents/Banner'
import WorksList from '@/components/ourWorksComponents/WorksList'
import React from 'react'


const OurWorks = () => {
  return (
    <>
    <PageAnimate>
      <Banner />
      <WorksList />
    </PageAnimate>
    </>
  )
}

export default OurWorks