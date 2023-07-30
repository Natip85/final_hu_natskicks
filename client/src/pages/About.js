import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - NatsKicks"}>
      <h1>About</h1>
    </Layout>
  )
}

Layout.defaultProps={
title: 'NatsKicks - shop now',
description: "Project",
keywords: "mern, react, node, mongodb",
author: "Nati Peretz"
}

export default About
