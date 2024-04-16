import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PageTransition from "./../components/PageTransition";

const dropIn = {
  hidden: {
    y: 0,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    y: 0,
    scale: 1,

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
    scale: 0.98,
  },
  scale: {
    scale: 1,
    marginLeft: 10,
    color: "#009b4d",
  },
  scaleone: {
    scale: 1,

    color: "#009b4d",
  },
  exit: {
    y: 0,
    opacity: 0,
    scale: 0.9,
  },
};
const Home = () => {
  const navi = useNavigate();
  function navigate() {
    navi("/About");
  }
  return (
    <PageTransition>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: { xs: "100vh", lg: "100vh", xl: "100vh" },
          alignItems: { xs: "center", lg: "initial" },
          paddingLeft: { sx: 0, lg: 5 },

          backgroundImage:
            "radial-gradient(at 0% 20% , #009B4D50 0px , #01011800 80%)",
        }}
      >
        <Typography
          sx={{
            zIndex: 0,
            fontSize: { xs: 90, sm: 130, lg: 130, xl: 200 },
            fontFamily: "monoton",
            color: "#c7d9f7fd",
            marginTop: { xs: 20, md: 10 },
            marginBottom: { md: 5, lg: 0 },
          }}
          variant="h1"
          color="initial"
          component={motion.h1}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          Hello
        </Typography>
        <Typography
          sx={{
            zIndex: 0,
            fontFamily: "monoton",
            color: "#c7d9f7fd",
            margin: 0,
            fontSize: { xs: 90, sm: 100, lg: 130, xl: 200 },
            marginBottom: { md: 5, lg: 0 },
          }}
          variant="h1"
          color="initial"
          component={motion.h1}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          i am
        </Typography>
        <Typography
          sx={{
            zIndex: 0,
            fontFamily: "monoton",
            color: "#c7d9f7fd",
            fontSize: { xs: 80, sm: 120, lg: 130, xl: 200 },
            marginBottom: { md: 5, lg: 0 },
          }}
          variant="h1"
          color="initial"
          component={motion.h1}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="scale"
          exit="exit"
        >
          DREDD
        </Typography>
        <Button
          variant="text"
          component={motion.button}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          whileHover="scaleone"
          exit="exit"
          sx={{
            fontFamily: "short stack",
            color: "#c7d9f7fd",

            position: "absolute",
            top: { xs: "70%", lg: "50%", xl: "40%" },
            right: { xs: "32%", lg: "20%" },
          }}
          startIcon={<FaLongArrowAltRight />}
          onClick={navigate}
        >
          Learn More
        </Button>
      </Box>
    </PageTransition>
  );
};

export default Home;
