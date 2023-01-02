import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import NYCillus from "../../assets/images/Illustrations/NYC.jpg"
import { Box, Typography, TextField, TextareaAutosize, Button } from "@mui/material"
import CustomButton from '../CustomButton'
import img from "../../assets/images/logo/NX black A.png"
import { Link } from "react-router-dom"

const Contact = () => {
    const [mouseEnter, setMouseEnter] = useState(false);
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

    return (
        <>
            <Box height={"10vh"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} position={"sticky"} zIndex={999} top={0} sx={{ backgroundColor: "white" }}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Box >
                        <img
                            style={{ height: "30px", marginTop: "15px" }}
                            src={img}
                            alt="Workflow"
                        />
                    </Box>
                </Link>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ visibility: { xs: "hidden", sm: "hidden", md: "visible", xl: "visible" } }}>
                    <Typography variant="h6" mx={2}>contactnexxtai@gmail.com</Typography>
                    <Typography variant="h6" mx={2}>(800) 362-9239</Typography>
                </Box>
            </Box>
            <Box height={"95vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} top={10}>
                <Box sx={{ visibility: { xs: "hidden", sm: "hidden", md: "visible", xl: "visible" }, width: { xs: "0", md: "50%", xl: "50%" } }}>
                    <img src={NYCillus} alt="" style={{ width: "100%", height: "95vh" }} />
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"} flexDirection={"column"} padding={1} sx={{ width: { xs: "100%", md: "50%", xl: "50%" } }}>
                    <Typography variant='h4'>
                        Let’s talk about your project
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
                                {errors.email && <Typography variant="subtitle2" sx={{ color: "red" }}>Email is required and should be in valid format</Typography>}

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
                                    paddingX: 4, marginX: 4,
                                    fontWeight: "bolder",
                                    "&:hover": { backgroundColor: "#FD841F", color: "white" },
                                }}
                            > Lets get in touch
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default Contact