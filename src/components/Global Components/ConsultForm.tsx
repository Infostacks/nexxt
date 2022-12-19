import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
// import { userInfo } from "os";
const ConsultForm = () => {

  const [userInfo, setUserInfo] = useState({})
  const { register, handleSubmit, formState: { errors }, resetField } = useForm();
  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    console.log(data)
    setUserInfo(data)
    emailjs.sendForm("service_3zudr78", "template_1wl3iol", e?.target, "ZHHZe0koweQ_1BoqQ").then((res) => { console.log(res); }).catch((error) => { console.log(error); });
    resetField('fullname')
    resetField('email')
    resetField('phone')
    resetField('description')
    // resetField('agreement')
  })

  return (

    <Box

      sx={{
        height: "max",
        borderRadius: 2,
        paddingX: 5,
        boxShadow: 5,
        width: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        bgcolor: "white",
        flexDirection: "column"
      }}
    >
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" >
          Book a Free{" "}

        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#F47A1F" }}
        >
          Consultation
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <TextField
          id="standard-helperText"
          label="Full Name"
          defaultValue=""
          // helperText="Some important text"
          variant="standard"
          sx={{ width: "100%", marginY: 1 }}
          color="warning"
          type="text"
          // name="fullname"
          {...register('fullname', { required: true, minLength: 8 })}
        />
        {errors.fullname && <Typography variant="subtitle2" sx={{ color: "red" }}>Full Name is required</Typography>}
        <TextField
          id="standard-helperText"
          label="Email"
          defaultValue=""
          // helperText="Some important text"
          variant="standard"
          sx={{ width: "100%", marginY: 1 }}
          color="warning"
          type="email"
          {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
        />
        {errors.email && <Typography variant="subtitle2" sx={{ color: "red" }}>Email is required and should be in valid format</Typography>}

        <TextField
          id="standard-helperText"
          label="Phone Number"
          defaultValue=""
          // helperText="Some important text"
          variant="standard"
          sx={{ width: "100%", marginY: 1 }}
          color="warning"
          type="phone"
          {...register('phone', { required: true, pattern: /\d+/, minLength: 9 })}
        />
        {errors.phone && <Typography variant="subtitle2" sx={{ color: "red" }}>Valid phone number is required</Typography>}

        <TextField
          id="standard-helperText"
          label="Description"
          defaultValue=""
          // helperText="Some important text"
          variant="standard"
          sx={{ width: "100%", marginY: 1 }}
          color="warning"
          type="text"
          {...register('description', { required: true, minLength: 20, maxLength: 255 })}
        />
        {errors.description && <Typography variant="subtitle2" sx={{ color: "red" }}>Description of minimum 20 words is required</Typography>}

        <FormControlLabel
          control={<Checkbox sx={{ color: "", marginY: 1 }}  {...register('agreement')} />}
          label="Share Non Disclosure Agreement"
          defaultChecked
        />

        <Box sx={{ my: 2 }}>

          <Button
            type="submit"
            variant="outlined"
            color="warning"
            sx={{
              border: "2px solid",
              paddingX: 4, marginX: 4,
              fontWeight: "bolder",
              "&:hover": { backgroundColor: "#FD841F", color: "white" },
            }}
          > Lets Connect!
          </Button>
        </Box>
      </form>
    </Box>

  );
};

export default ConsultForm;
