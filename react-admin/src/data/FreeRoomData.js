// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { ResponsiveTreeMap } from '@nivo/treemap'
import { tokens } from '../theme'
import { useTheme } from '@mui/material'
import TreeChart from '../components/TreeChart'

const FreeRoomChart = ({data}) => {
    const freeRooms = {
        name: "Salas",
        children: [],
    };
    let loc = 0
    const categories = {};
    let categoryName =''
    
    //building the data for the chart
    for (const room of data) {
        if (room.isOccupied === 0) {
            loc = 1
    
            categoryName = room.function
            // Initialize the category if it doesn't exist
            if (!categories[categoryName]) {
                categories[categoryName] = {
                    name: categoryName,
                    children: [],
                };
            }
    
            const blockName = "Bloco " + room.name.charAt(0);
    
            // Check if an entry with the same name and category already exists
            const existingEntry = categories[categoryName].children.find(
                (entry) => entry.name === blockName && entry.category === categoryName
            );
    
            if (existingEntry) {
                existingEntry.loc += loc;
            } else {
                const roomEntry = {
                    name: blockName,
                    category: categoryName,
                    loc: loc,
                };
    
                categories[categoryName].children.push(roomEntry);
            }
    
        }
    }

    for (const categoryName in categories) {
        if (categories.hasOwnProperty(categoryName)) {
            freeRooms.children.push(categories[categoryName]);
        }
    }
    
    // console.log(freeRooms);

    return (
        <TreeChart data={freeRooms}/>
    )
}

export default FreeRoomChart