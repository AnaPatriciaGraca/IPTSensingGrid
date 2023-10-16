import { ResponsivePie } from '@nivo/pie'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const BatteryLevel = ( { data }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Transform the data to use "battery" as the value
    const transformedData = data.map(item => ({
        id: "Sensor - " + item.id,
        value: item.battery, // Use "battery" as the value
    }));

  return (
    <ResponsivePie
        data={transformedData}
        theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
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
        margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
        startAngle={-80}
        innerRadius={0.5}
        padAngle={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderWidth={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    4
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        
    />
  )
}

export default BatteryLevel
