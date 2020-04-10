import React, { useState, useEffect } from 'react';

import { getTags, getRooms } from '../utils/request';
import RoomListTemplate from '../templates/roomListTemplate';

export default function RoomListPage() {
  const literals = {
    search: 'Search',
  };

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    getTags(setTags);
    getRooms(setItems);
  }, []);

  return (
    <RoomListTemplate
      literals={literals}
      search={search}
      itemList={items}
      tags={tags}
      handleChange={event => {
        setSearch(event.currentTarget.value);
      }}
      handleClick={() => {}}
    />
  );
}
