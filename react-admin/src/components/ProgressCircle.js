import { Box, useTheme } from "@mui/material"
import { tokens } from "../theme"
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const ProgressCircle = ({ progress = "0.75", size = "40", toolTip }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const angle = progress * 360

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: colors.grey[100],
      color: colors.grey[900],
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
  }));


  return (
    <LightTooltip title={toolTip}>
      <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
        ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
      />
    </LightTooltip>
  )
}

export default ProgressCircle