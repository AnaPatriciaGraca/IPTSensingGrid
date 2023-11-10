import { useTheme } from "@mui/material"
import { tokens } from "../theme"
import { ResponsiveFunnel } from '@nivo/funnel'
import { fetchPeopleData } from "../data/getData"
import { useState, useEffect } from 'react'
import ConfirmationDialog from '../components/ConfirmationDialog'

const TotalFreeProf = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isLoading, setIsLoading] = useState(true)
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const [peopleData, setPeopleData] = useState([])

    useEffect(() => {
        async function fetchData() {
        try {
            const data = await fetchPeopleData(); 
            setPeopleData(data)
            setIsLoading(false) //é necessário esperar que os dados carreguem sem lançar erros para o ecrã
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error;
        }
        }
        fetchData();
    }, []);

    const handleCloseDialog = () => {
        setIsConfirmationOpen(false);
            
    }

    //pop-up enquanto os dados carregam
    if (isLoading) {
        return <ConfirmationDialog
                isOpen={isConfirmationOpen}
                onClose={handleCloseDialog}
                phrase="Aguarde enquanto os dados são carregados"
                />;
    }

    function transformData(data) {
        const counts = {};
        data.forEach((item) => {
            const UD = item.UD;
            if (UD) {
                if (counts[UD]) {
                    counts[UD]++;
                } else {
                    counts[UD] = 1;
                }
            }
        });
        const transformedData = Object.entries(counts).map(([id, value]) => ({
            id,
            value,
            label: id,
        }));

        return transformedData;
    }

    const transformedData = transformData(peopleData)
    //transformedData.sort((a, b) => a.value - b.value) //order data so the graph is prettier?

    return (
        <ResponsiveFunnel
            data={transformedData} 
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
    );
}

export default TotalFreeProf;
