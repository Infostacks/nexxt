import React from 'react'
import { Box, Typography, Grid, List, ListItem, ListItemText } from "@mui/material"
import CustomButton from './CustomButton'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { BuildAndVisualizeProps } from '../../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment';

const BuildAndVisualize = ({rightTitle, rightDescs, rightListTitle, rightListItems, rightListItemIcons, rightWhatElse, leftTitle, leftDescs}: BuildAndVisualizeProps) => {
                            
    const temp = <RadioButtonCheckedIcon  color='warning' sx={{ marginRight: 2 }} />;
    return (
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item md={5} sx={{ margin: 1, marginTop: 10, backgroundColor: "#EDEDED", borderRadius: 2 }}>
                <Grid item sx={{ margin: 2, marginTop: 10, marginLeft: 5 }}>
                    <Typography sx={{ fontWeight: "bolder", fontSize: 25 }}>{leftTitle[0]}</Typography>
                    <Typography sx={{ fontWeight: "bolder", fontSize: 25 }}>{leftTitle[1]}</Typography>
                    {leftDescs.map((leftDesc, index:any)=> 
                    <Typography key={index} variant='subtitle1' sx={{ my: 3 }}>{leftDesc}</Typography>
                    )}
                    <CustomButton text='SCHEDULE A MEETING' buttonSize='10px 30px' />
                </Grid>
            </Grid>
            <Grid item md={5} sx={{ margin: 1, marginTop: 10, marginLeft: 5, backgroundColor: "#EDEDED", borderRadius: 2 }}>
                <Grid item sx={{ margin: 2, marginTop: 10, marginLeft: 5 }}>
                    <Typography sx={{ fontWeight: "bolder", fontSize: 25 }}>{rightTitle}</Typography>
                    <Typography variant='subtitle1' sx={{ marginY: 2 }}>{rightDescs[0]}</Typography>
                    <Typography variant='subtitle1'>{rightDescs[1]}</Typography>
                    <Typography variant='subtitle1' sx={{ marginY: 2 }}>{rightListTitle}</Typography>
                    {rightListItems.map((rightListItem, index:number)=>
                    <List key={index}>
                        <ListItem sx={{ "&.MuiListItem-root": {
                            padding:0
    }}}>
                            {rightListItemIcons[index]}
                            <ListItemText primary={rightListItems[index]} />
                        </ListItem>
                    </List>
                    )}
                    
                    {rightWhatElse? (<Typography variant='subtitle1' sx={{ marginY: 2 }}>{rightWhatElse}</Typography>): ("")}
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BuildAndVisualize