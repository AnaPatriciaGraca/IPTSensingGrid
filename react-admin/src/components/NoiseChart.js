import { ResponsiveBar } from '@nivo/bar'
import { tokens } from '../theme'
import { useTheme } from '@mui/material'

const NoiseChart = ({ data }) => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <ResponsiveBar
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
            fill: colors.primary[100]
        }
      },
    }}
    keys={[
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
    ]}
    indexBy="id"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    groupMode="grouped"
    layout="vertical"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'green_blue' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                5.6
            ]
        ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'sensores',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'ruído dB',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0
    }}
    labelSkipWidth={14}
    labelSkipHeight={11}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                '2.5'
            ]
        ]
    }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 1,
            itemWidth: 100,
            itemHeight: 15,
            itemDirection: 'left-to-right',
            itemOpacity: 0.95,
            symbolSize: 20,
            itemTextColor: colors.grey[100],
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
/>
  
    )
}

export default NoiseChart
