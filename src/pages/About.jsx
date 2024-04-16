import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const About = () => {
  const dropIn = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,
      borderRadius: "2%",
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      scale: 0.7,
    },
    scale: {
      scale: 1,

      color: "#0694c6",
    },
    scaleone: {
      scale: 1,
      color: "#009B4D",
    },
    scaletwo: {
      scale: 1,
      borderRadius: 12.5,
      border: "1px solid #009b4d",
      color: "#009B4D",
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };
  const subComponent = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,
      backgroundColor: "none",
      backgroundImage: "linear-gradient(to right bottom, #009B4D, #c7d9f730)",
      padding: 5,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      scale: 0.95,
      rotate: 0.8,
      padding: 2,
    },

    exit: {
      y: 20,
      opacity: 0,
    },
  };

  const navi = useNavigate();
  function navigate() {
    navi("/About2");
  }
  return (
    <PageTransition>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          overflow: "hidden",
          width: "100%",
          height: { xs: "100vh", lg: "90vh", xl: "100vh" },
          backgroundImage:
            "radial-gradient(at 0% 40% , #009B4D50 0px , #01011800 80%)",
        }}
      >
        <Grid
          item
          xs={11}
          md={11}
          lg={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <Box
            component={motion.div}
            variants={subComponent}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            sx={{
              width: { xs: 250, sm: 300, md: 450, lg: 400, xl: 600 },
              height: { xs: 250, sm: 300, md: 450, lg: 400, xl: 600 },
              borderRadius: "50%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Folayan Olamide Mayokun"
              src="./image.jpg"
              sx={{
                width: { xs: 250, sm: 300, md: 450, lg: 400, xl: 600 },
                height: { xs: 250, sm: 300, md: 450, lg: 400, xl: 600 },
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={11} md={11} lg={5} xl={6}>
          <Box
            sx={{
              width: "100%",

              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography
              variant="h4"
              color="whitesmoke"
              component={motion.div}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              sx={{
                fontFamily: "Lexend Giga",
                fontSize: { xs: 25, md: 60 },
                margin: "5px",
              }}
            >
              Folayan Olamide.M
            </Typography>
            <Typography
              variant="h5"
              color="whitesmoke"
              component={motion.div}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              sx={{
                fontFamily: "Lexend Giga",
                margin: "5px",
                fontSize: { xs: 20, md: 40 },
              }}
            >
              Software Developer
            </Typography>
            <Typography
              variant="body1"
              color="whitesmoke"
              component={motion.div}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              whileHover="scaleone"
              exit="exit"
              sx={{
                fontFamily: "Short Stack",
                fontSize: { md: 20 },
                textAlign: { xs: "justify", md: "start" },
                margin: "5px",
              }}
            >
              Olamide here, although I go by Dredd. As a software developer, my
              area of expertise is creating effective front- and back-ends for
              websites that function flawlessly on all platforms and browsers. I
              am passionate about creating interfaces that are enjoyable and
              usable for as many users as I can.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                marginBottom: 2,
              }}
            >
              <Button
                variant="text"
                color="inherit"
                component={motion.button}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="scaleone"
                exit="exit"
                sx={{
                  fontFamily: "Short Stack",
                  color: "white",
                  display: "flex",
                }}
                startIcon={<IoMdCloudDownload />}
                onClick={navigate}
              >
                download cv
              </Button>
              <Button
                variant="outlined"
                component={motion.button}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                whileHover="scaletwo"
                exit="exit"
                sx={{
                  fontFamily: "Short Stack",
                  color: "white",
                  display: "flex",
                }}
                startIcon={<FaLongArrowAltRight />}
                onClick={navigate}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageTransition>
  );
};

export default About;
