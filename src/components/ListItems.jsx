import React from 'react';

import Container from './Container';

export default function ListItems({ container, white, beige}) {
    const events = {
        white,
        beige,
      };
      const containerInOrder = [
        ...container.filter((t) => t.state === "beige"),
        ...container.filter((t) => t.state !== "beige"),
      ];
  return (
    <div className="list-items">
      {containerInOrder.map(container => (
        <Container key={container.id} container={container} {...events} />
      ))}
    </div>
  );
}