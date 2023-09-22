import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveFunnel } from '@nivo/funnel'
import { freeProfs as data } from "../data/testData";

const TotalFreeProf = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveFunnel
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
        margin={{ top: 20, right: 20, bottom: 160, left: 20 }}
        shapeBlending={0.62}
        colors={{ scheme: 'yellow_green_blue' }}
        borderWidth={16}
        borderColor={{ from: 'color', modifiers: [] }}
        borderOpacity={0.5}
        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        beforeSeparatorOffset={81}
        afterSeparatorLength={80}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
    />
    )
}

export default TotalFreeProf
