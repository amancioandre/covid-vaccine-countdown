/** @jsx jsx */
import React from "react"
import useClock from 'use-clock'
import { Container, Text, Divider, Grid, Heading, jsx, css } from "theme-ui"

import Layout from "../components/layout"
import CountdownContainer from "../components/countdown-container"
import { remainingTime } from "../utils"
import SEO from "../components/seo"

const IndexPage = () => {
  const { raw: currentDate } = useClock()
  const { remainingDays, remainingHours, remainingMinutes, remainingSeconds } = remainingTime()
  return (
    <Layout>
      <SEO title="Home" />
      <Container
        p={4}
        my={'auto'}
        sx={{
          maxWidth: "1080px",
          height: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Grid
          columns={[2, '1.25fr 2fr']}
        >
          <div>
            <Heading
            >Estimated delivery data for a Vaccine</Heading>
            <Text
              sx={{
                textAlign: 'justify'
              }}
            >Covid 19 has already made more than 600 thousand victims since its outbreak in 2019.
              By this time there are several campaigns activy for a Vaccine development, and we want
              to share with you when we estimate the first endeavor will come to the public.
            </Text>
            <Divider />
          </div>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CountdownContainer
              targetDate={'2020-12-31'}
              daysLabel={'Days'}
              hoursLabel={'Hours'}
              minutesLabel={'Minutes'}
              secondsLabel={'Seconds'}
            />
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
