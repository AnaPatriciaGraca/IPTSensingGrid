import { ResponsivePie } from "@nivo/pie"
import { classes as data } from "../data/testData"
import { tokens } from "../theme"
import { useTheme } from "@mui/material"
import { fetchClassesDataByDay } from "../data/getData"
import { useState, useEffect } from 'react'

const CurrentClasses = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const weekDay = new Date().getDay()+1
    const [classData, setClassData] = useState([]);

    useEffect(() => {
        fetchClassesDataByDay(weekDay)
            .then((data) => {
                const coursesObject = {};
    
                data.forEach((item) => {
                    if (item.courses) {
                        item.courses.forEach((course) => {
                            const courseId = course.course;
                            if (courseId) {
                                if (!coursesObject[courseId]) {
                                    coursesObject[courseId] = {
                                        id: courseId,
                                        label: courseId,
                                        value: 1,
                                    };
                                } else {
                                    coursesObject[courseId].value += 1;
                                }
                            }
                        });
                    }
                });
    
                const courseData = Object.values(coursesObject);
                setClassData(courseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [weekDay]);


  return (
    <ResponsivePie
    data={classData}
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
    margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
    startAngle={-81}
    innerRadius={0.2}
    padAngle={2}
    cornerRadius={80}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'purple_blue' }}
    borderWidth={4}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.1
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
            size: 5,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 3,
            spacing: 10
        }
    ]}
    transitionMode="startAngle"
/>
  )
}

export default CurrentClasses
