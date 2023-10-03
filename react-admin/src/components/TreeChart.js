// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { ResponsiveTreeMap } from '@nivo/treemap'
import { tokens } from '../theme'
import { useTheme } from '@mui/material'

const TreeChart = ({data}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorsChart = {
        "sala de aula": colors.greenAccent[300],
        "laboratório": colors.greenAccent[600],
        "outro": colors.greenAccent[800]
      };

    //changing the colors for the squares in the chart
    const getColor = (node) => {
    if (node.data.category) {
        return colorsChart[node.data.category] || colors.greenAccent[200];
    }
    return colors.greenAccent[500];
    };

    return (
        <ResponsiveTreeMap
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
            legends: {
            text: {
                fill: colors.grey[100],
            },
            },
            tooltip: {
            container: {
                color: colors.primary[500],
            },
            },
        }}
        identity="name"
        value="loc"
        tile="binary"
        leavesOnly={true}
        innerPadding={9}
        outerPadding={8}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.05'
                ]
            ]
        }}
        orientLabel={false}
        parentLabelPosition="left"
        parentLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        nodeOpacity={0.3}
        borderWidth={2}
        borderColor={{ theme: 'background' }}
        colors={getColor}
        legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
      
    />
    )
}

export default TreeChart