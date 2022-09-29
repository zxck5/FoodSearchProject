import React from 'react';
import GroupCard from './GroupCard';
import { groupData } from './groupData';

export default function GroupCards() {
  const [groupDetails, setGroupDetails] = React.useState(groupData);

  const renderedCards = groupDetails.map((list) => {
    return (
      <main>
        <GroupCard key={list.id} {...list} />
      </main>
    );
  });

  return renderedCards;
}
