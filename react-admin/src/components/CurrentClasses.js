import { ResponsivePie } from "@nivo/pie"
import { classes as data } from "../data/testData"
import { tokens } from "../theme"
import { useTheme } from "@mui/material"

const CurrentClasses = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <ResponsivePie
    data={data}
    theme={{
        tooltip: {
            container: {
              color: colors.primary[500],
            },
            text: {
                fill: colors.primary[700]
            }
          },
      }}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    startAngle={-81}
    innerRadius={0.2}
    padAngle={6}
    cornerRadius={30}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'purple_blue' }}
    borderWidth={4}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.3
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={18}
    arcLinkLabelsTextColor={colors.grey[100]}
    arcLinkLabelsOffset={7}
    arcLinkLabelsDiagonalLength={0}
    arcLinkLabelsStraightLength={18}
    arcLinkLabelsThickness={1.5}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsRadiusOffset={0.35}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
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
    transitionMode="startAngle"
/>
  )
}

export default CurrentClasses
