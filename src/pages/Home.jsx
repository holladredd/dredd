import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PageTransition from "./../components/PageTransition";

const dropIn = {
  hidden: {
    y: -50,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    y: 0,
    scale: 0.9,
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
    scale: 0.6,
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
          heigth: { sm: "100vh", Md: "100%" },
          alignItems: { xs: "center", md: "center", lg: "flex-start" },
        }}
      >
        <Typography
          sx={{
            zIndex: 0,
            fontSize: { sm: 150, lg: 200 },
            fontFamily: "monoton",
            color: "#c7d9f7fd",
            marginTop: 3,
            marginBottom: { sm: 4, md: 1 },
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
            fontSize: { sm: 130, lg: 150 },
            marginBottom: { sm: 4, md: 1 },
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
          I am
        </Typography>
        <Typography
          sx={{
            zIndex: 0,
            fontFamily: "monoton",
            color: "#c7d9f7fd",
            fontSize: { sm: 150, lg: 150 },
            marginBottom: { sm: 4, md: 1 },
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
            display: "flex",
            justifySelf: "center",
            alignSelf: "center",
          }}
          startIcon={<FaLongArrowAltRight />}
          onClick={navigate}
        >
          click to Know more!
        </Button>
      </Box>
    </PageTransition>
  );
};

export default Home;
