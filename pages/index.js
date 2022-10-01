import React from 'react'
import Link from "next/link"

import { isMultiple } from '../lib/utils'


import { client, urlFor } from '../lib/client'


const Home = ({ properties }) => {
  console.log(properties)

  return (
    <div>
      { properties && (
        <div className="main">

          <div className="feed-container">

            <h2>Places to Stay Near You ...!</h2>

            <div className="feed">

              { properties.map((property) => (
                <Link href={ `property/${property.slug.current}` } key={ property._id }>

                  <div className="card">

                    <img src={ urlFor(property.mainImage) } />

                    <p>
                      { property.reviews.length } review
                      { isMultiple(property.reviews.length) }
                    </p>

                    <h4>{ property.title }</h4>

                    <h5>
                      <b>£{ property.pricePerNight } / per Night</b>
                    </h5>

                  </div>

                </Link>
              )) }

            </div>

          </div>


          {/*<div className="map">
            <DashboardMap properties={ properties } />
              </div>*/}

        </div>)
      }
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const query = '*[_type == "property"]';

  // Fetch data from external API
  const properties = await client.fetch(query)


  // Pass data to the page via props '"const data = await res.json()" jsaickjfai'
  return { props: { properties } }
};

export default Home