import React from 'react'
import Link from "next/link"


import { client, urlFor } from '../../lib/client'
import { isMultiple } from '../../lib/utils'

const Property = ({ properties }) => {

    console.log({ properties })

    return (
        <div>Property</div>
    )
}


// pages/property/[slug].js
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