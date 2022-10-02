import React from 'react'
import Link from "next/link"
import { Image, Review, Map } from '../../components';
import 'mapbox-gl/dist/mapbox-gl.css';

import { client } from '../../lib/client'
import { isMultiple } from '../../lib/utils'

const Property = ({ properties }) => {

    const {
        title, location, propertyType, mainImage, images, pricePerNight, beds, bedrooms, description, host, reviews,
    } = properties

    console.log({ properties })

    const reviewAmount = reviews.length


    return (
        <div className="container">

            <h2>{ title }</h2>

            <p>{ reviewAmount } review{ isMultiple(reviewAmount) }</p>

            <div className="images-section">

                <Image identifier="main-image" image={ mainImage } />

                <div className="sub-images-section">
                    { images.map(({ _key, asset }) => (
                        <Image key={ _key } identifier="image" image={ asset } />
                    )) }
                </div>

            </div>

            <div className="section">
                <div className="information">

                    <h2>{ propertyType } hosted by { host?.name }</h2>

                    <h4>
                        { bedrooms } bedroom{ isMultiple(bedrooms) } * { beds } bed{ isMultiple(beds) }
                    </h4>
                    <hr />

                    <h4>Enhanced Clean </h4>

                    <p>This host is committed to Airbnb's 5-step enhanced cleaning process.</p>

                    <h4>Amenities for everyday living</h4>

                    <p>
                        The host has equipped this place for long stays - kitchen, shampoo,
                        conditioner, hairdryer included.
                    </p>

                    <h4>
                        <b>House rules</b>
                    </h4>

                    <p>
                        This place isn't suitable for pets andthe host does not allow
                        parties or smoking.
                    </p>

                </div>

                <div className="price-box">

                    <h2>£{ pricePerNight }</h2>

                    <h4>
                        { reviewAmount } review{ isMultiple(reviewAmount) }
                    </h4>

                    <Link href="/">
                        <div className="button">Change Dates</div>
                    </Link>
                </div>
            </div>

            <h4>{ description }</h4>

            <h2>
                { reviewAmount } review{ isMultiple(reviewAmount) }
            </h2>

            { reviewAmount > 0 && reviews.map((review) =>
                <Review key={ review._key } review={ review } />
            )
            }

            <hr />

            <h2>Location</h2>
            <Map location={ location } />
        </div>
    )
}


export async function getStaticPaths() {
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: 'blocking',
        }
    }

    const query = `*[_type == "property"]{
        slug{
            current
        }
    }`;

    const properties = await client.fetch(query);

    const paths = properties.map((property) => ({
        params: { slug: property.slug.current },
    }));

    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
}

// This gets called on every request
export async function getStaticProps({ params: { slug } }) {

    const query = `*[_type == "property" && slug.current == '${slug}'][0]`;
    const properties = await client.fetch(query)


    // Pass data to the page via props '"const data = await res.json()" jsaickjfai'
    return { props: { properties } }
}

export default Property