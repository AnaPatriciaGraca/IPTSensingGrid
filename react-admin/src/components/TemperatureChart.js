//import {temperature as data} from "../data/testData"
import { ResponsiveLine } from '@nivo/line'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const TemperatureChart = ({isDashboard = false, data }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveLine
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
                text: {
                    fill: colors.primary[700]
                }
              },
        }}
        margin={{ top: 50, right: 110, bottom: 60, left: 60 }}
        xScale={{ type: 'point'}}
        yScale={{
            type: 'linear',
            min: 10,
            max: 70,
            stacked: false,
            reverse: false
        }}
        
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "transportation",
            legend: 'Horas do dia',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "count",
            legend: 'Temperatura',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        colors={{ scheme: 'yellow_green' }}
        pointSize={5}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabel="y"
        pointLabelYOffset={0}
        areaOpacity={0.7}
        useMesh={true}
        groupMode="grouped"
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

export default TemperatureChart
