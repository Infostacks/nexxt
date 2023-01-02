import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CustomButton from './CustomButton';
import { Box, Grid, Typography, useTheme } from "@mui/material"
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

interface contactDialogButtonBg {
    bgColor: string
}
const ContactDialog = ({bgColor} : contactDialogButtonBg) => {

    const theme = useTheme()
    const [open, setOpen] = React.useState(false);
    const [userInfo, setUserInfo] = useState({})
    const { register, handleSubmit, formState: { errors }, resetField } = useForm();
    const onSubmit = handleSubmit((data, e) => {
        e?.preventDefault();
        console.log(data)
        setUserInfo(data)
        emailjs.sendForm("service_x6xl44m", "template_rhjoo26", e?.target, "eg8kBL9Q197eoKym5").then((res) => { console.log(res); }).catch((error) => { console.log(error); });
        resetField('fullname')
        resetField('email')
        resetField('phone')
        resetField('description')
        // resetField('agreement')
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>

            <CustomButton text="Let's Chat" buttonSize='6px 15px' handleClick={handleClickOpen} background={bgColor} />
            <Dialog
                maxWidth={"xl"}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                sx={{ boxSizing: "unset" }}
            >
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ background: "#FF4C29" }}>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} color={"white"} px={2} height={"100%"}>
                        <Box width={"350px"}>
                            <Typography variant='h4'>
                                Ready To Become A Digital Titan In Your Niche?
                            </Typography>
                        </Box>

                        <Box mt={5} width={"400px"}>
                            <Typography variant='subtitle1'>
                                With modern technology, unparalleled experience & a desire for innovation, our team is ready to bring your digital business idea to life.
                            </Typography>
                        </Box>

                        <Box mt={5}>
                            <Typography variant='h6'>
                                Fill in this form to start the process
                            </Typography>
                        </Box>
                    </Box>

                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"} flexDirection={"column"} padding={1} sx={{ width: { xs: "100%", md: "50%", xl: "50%" }, background: "white" }} >
                        <Typography variant='h4'>
                            Let’s Get In Touch
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"}>

                                <Box>
                                    <TextField
                                        id="standard-helperText"
                                        label="Full Name"
                                        defaultValue=""
                                        // helperText="Some important text"
                                        variant="standard"
                                        sx={{ width: "100%", marginY: 1 }}
                                        color="warning"
                                        type="text"

                                        {...register('fullname', { required: true, minLength: 8 })}
                                    />
                                    {errors.fullname && <Typography variant="subtitle2" sx={{ color: "red" }}>Full Name is required</Typography>}

                                </Box>
                                <Box>

                                    <TextField
                                        id="standard-helperText"
                                        label="Email"
                                        defaultValue=""
                                        // helperText="Some important text"
                                        variant="standard"
                                        sx={{ width: "100%", margin: 1, outlineColor: "orange" }}
                                        color="warning"
                                        type="email"
                                        {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}

                                    />
                                    {errors.email && <Typography variant="subtitle2" sx={{ color: "red" }}>Email is required in valid format</Typography>}

                                </Box>

                            </Box>
                            <Box width={"100%"}>
                                <TextField
                                    id="standard-helperText"
                                    label="Phone Number"
                                    defaultValue=""
                                    // helperText="Some important text"
                                    variant="standard"
                                    sx={{ width: "100%", marginY: 1, boxShadow: "2px #F1F6F5" }}
                                    color="warning"
                                    type="phone"
                                    fullWidth
                                    {...register('phone', { required: true, pattern: /\d+/, minLength: 9 })}

                                />
                                {errors.phone && <Typography variant="subtitle2" sx={{ color: "red" }}>Valid phone number is required</Typography>}

                            </Box>
                            <Box width={"100%"}>
                                <TextareaAutosize
                                    id="standard-helperText"
                                    placeholder="Tell us more about your idea ..."
                                    defaultValue=""
                                    // helperText="Some important text"
                                    minRows={5}
                                    style={{ width: "100%", margin: "20px 2px", padding: "5px", border: "1px solid black" }}
                                    color="warning"
                                    {...register('description', { required: true, minLength: 20, maxLength: 255 })}

                                />
                                {errors.description && <Typography variant="subtitle2" sx={{ color: "red" }}>Description of minimum 20 words is required</Typography>}

                            </Box>
                            <Box sx={{ my: 2 }} display={"flex"} justifyContent={"center"} alignItems={"center"}>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="warning"
                                    sx={{
                                        // border: "2px solid",
                                        background: `${theme.palette.background.default}`,
                                        paddingX: 4, marginX: 4,
                                        fontWeight: "bolder",
                                        "&:hover": { color: "white" },
                                    }}
                                > Lets get in touch
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>




                {/* </Box> */}
            </Dialog>
        </Box>
    )
}

export default ContactDialog