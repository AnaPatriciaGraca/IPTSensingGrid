import { useState, useEffect } from 'react';
import TreeChart from '../components/TreeChart';

const FreeRoomChart = ({ data }) => {
  const [freeRooms, setFreeRooms] = useState({
    name: 'Salas',
    children: [],
  });
  const categories = {};
  let categoryName = '';

  useEffect(() => {
    const processData = () => {
      data.forEach((room) => {
        if (room.isOccupied === 0) {
          categoryName = room.function;
          const blockName = `Bloco ${room.name.charAt(0)}`;

          if (!categories[categoryName]) {
            categories[categoryName] = {
              name: categoryName,
              children: [],
            };
          }

          const existingEntry = categories[categoryName].children.find(
            (entry) => entry.name === blockName && entry.category === categoryName
          );

          if (existingEntry) {
            existingEntry.loc += 1;
          } else {
            const roomEntry = {
              name: blockName,
              category: categoryName,
              loc: 1,
            };

            categories[categoryName].children.push(roomEntry);
          }
        }
      });

      const updatedFreeRooms = {
        name: 'Salas',
        children: Object.values(categories),
      };

      setFreeRooms(updatedFreeRooms);
    };

    processData();
  }, [data]);

  // console.log(1)

  return <TreeChart data={freeRooms} />;
};

export default FreeRoomChart;
