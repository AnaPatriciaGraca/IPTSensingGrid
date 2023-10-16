import { ResponsiveMarimekko } from '@nivo/marimekko'
//import { noise as data } from '../data/testData'
import { tokens } from '../theme'
import { useTheme } from '@mui/material'

const NoiseChart = ({ isDasboard, data }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <ResponsiveMarimekko
    data={data}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: colors.grey[100],
          },
        },
        legend: {
          text: {
            fill: colors.grey[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.grey[100],
          },
        },
      },
      tooltip: {
        container: {
          color: colors.primary[500],
        },
        text: {
            fill: colors.primary[700]
        }
      },
    }}
    id="id"
    // groupMode="grouped"
    value="decibel"
    dimensions={[
        {
            id: '09:00',
            value: '09:00'
        },
        {
            id: '12:00',
            value: '12:00'
        },
        {
            id: '15:00',
            value: '15:00'
        },
        {
            id: '18:00',
            value: '18:00'
        }
    ]}
    layout="horizontal"
    outerPadding={5}
    innerPadding={12}
    axisTop={null}
    axisRight={null}
    axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Nível de som',
        legendOffset: 36,
        legendPosition: 'middle',
    }}
    axisLeft={null}
    enableGridX={true}
    enableGridY={false}
    margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
    colors={{ scheme: 'blue_purple' }}
    borderWidth={2}
    borderColor={{ theme: 'background' }}
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 80,
            itemsSpacing: 0,
            itemWidth: 140,
            itemHeight: 18,
            itemTextColor: colors.grey[100],
            itemDirection: 'right-to-left',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'square',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#999'
                    }
                }
            ]
        }
    ]}
/>  
  
    )
}

export default NoiseChart
