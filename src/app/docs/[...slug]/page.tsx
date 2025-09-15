import React from "react";

// if need to give same ui even to docs main page file then do [[...slug]]

export default function Doc({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  if (slug.length === 1) {
    return <h1>One Params after docs</h1>;
  }
  if (slug.length === 2) {
    return <h1>two Params after docs</h1>;
  } else return <h1>default params after /docs</h1>;
}
