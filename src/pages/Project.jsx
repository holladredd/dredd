import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import PageTransition from "./../components/PageTransition";
import ElementTransition from "./../components/ElementTransition";
import { useNavigate, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "My Dashboard",
    link: "https://github.com/holladredd/dashboards",
    techs: "ReactJs, Material UI, Framer-Motion ",
    desc: "Dashboard project is a comprehensive web application designed to provide users with a centralized platform to manage their account activities and access various features. With an intuitive interface and robust functionality, the User Dashboard simplifies the user experience and enhances engagement.",

    viewlink: "",
  },
  {
    id: 2,
    name: "First Portfolio",
    link: "https://github.com/holladredd/dredd",
    techs: "Html, Bootstrap",
    desc: "The Portfolio Website project serves as a showcase of my work, skills, and accomplishments as a web developer. It's a dynamic and visually appealing platform designed to highlight my expertise, creativity, and passion for web development.",
    viewlink: "https://dredd.netlify.app/",
  },
  {
    id: 3,
    name: "AIVers",
    link: "https://github.com/holladredd/aivers",
    techs: "JavaScript, Bootstrap (on Hold for now)",
    desc: "The AIVers for AI updates is a dedicated platform aimed at providing the latest news, trends, and advancements in the field of artificial intelligence (AI). As an authoritative source of information and insights, the website serves AI enthusiasts, professionals, researchers, and businesses seeking to stay informed about the rapidly evolving landscape of AI technology.",

    viewlink: "",
  },
  {
    id: 4,
    name: "Diet-Preg",
    link: "https://github.com/holladredd/diet-preg",
    techs: "html, bootstrap (still in development level)",
    desc: "Diet-Preg is an educational project developed as part of a school curriculum to provide expectant mothers with a comprehensive and personalized pregnancy diet planner. This web application aims to offer guidance, support, and valuable information to pregnant women, helping them make informed choices about their nutrition and well-being during this crucial stage of life.",

    viewlink: "",
  },
];

const Project = () => {
  const subComponent = {
    hidden: {
      y: 0,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      scale: 1,
      borderLeft: "0px solid #c7d9f7fd",
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    visible2: {
      y: 0,
      scale: 1,

      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    visible3: {
      y: 0,
      scale: 1,
      transform: "rotate(-90deg)",
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      borderLeft: "6px solid #c7d9f7fd",
      color: "#009b4d",
      // borderRight: "5px solid #c7d9f7fd",
    },
    borderLeft: {
      borderLeft: "5px solid #c7d9f7fd",
      borderBottom: "5px solid #c7d9f7fd",
      color: "#0694c6",
    },
    scaleone: {
      scale: 0.9,
      rotate: 0.5,
      color: "#c5b206be",
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };
  const [show, setShow] = useState();
  const handleClick = (projectId) => {
    if (show === projectId) {
      // Deselect if already selected
      setShow(null);
    } else {
      setShow(projectId);
    }
  };
  const navi = useNavigate();
  return (
    <PageTransition>
      <Button
        component={motion.div}
        variants={subComponent}
        initial="hidden"
        animate="visible3"
        whileHover="hover"
        exit="exit"
        variant="text"
        onClick={() => navi("/Graphics")}
        sx={{
          backgroundColor: "transparent",
          borderRight: "2px solid #c7d9f7fd",
          borderBottom: "2px solid #c7d9f7fd",
          position: "absolute",
          color: "#c7d9f7fd",
          fontFamily: "Short Stack",
          bottom: { xs: 250, md: 100 },
          right: 0,
          zIndex: 30,
        }}
      >
        Graphics
      </Button>
      <Box
        sx={{
          margin: "5px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: { xs: "fit", md: "85vh", lg: "90vh", xl: "100vh" },
          backgroundImage:
            "radial-gradient(at 100% 50% , #009B4D30 0px , #01011800 80%)",
        }}
      >
        <Typography
          component={motion.div}
          variants={subComponent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
          color="#c7d9f7fd"
          variant="h3"
          sx={{
            width: "98%",
            textAlign: "start",
            margin: "20px",
            marginTop: "45px",
            fontFamily: "Moirai One",
            fontSize: { xs: 70, md: 120 },
          }}
        >
          Project.
        </Typography>

        <Box
          sx={{
            width: "90%",
            margin: "10px",
            marginTop: 0,
          }}
          component={motion.div}
          variants={subComponent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          <Typography
            color="#c7d9f7fd"
            variant="caption"
            sx={{
              textAlign: "start",
              fontFamily: "Short Stack",
              fontSize: { md: 20 },
            }}
          >
            Here, you will find a list of my projects. Each project reflects my
            dedication to crafting functional and visually appealing websites.
            Explore these projects to see how I bring ideas to life through code
          </Typography>
        </Box>

        <Box
          sx={{
            width: "fit",
            display: "flex",
            heigth: "20vh",
            marginLeft: 2,
            flexDirection: "column",
            borderRadius: "12px",
            borderLeft: "8px solid #c7d9f7fd ",

            justifyContent: "flex-start",
          }}
        >
          {projects.map((project) => (
            <Box key={project.id}>
              <List sx={{ padding: 0, width: "90%" }}>
                <ListItem
                  component={motion.div}
                  whileHover={{
                    backgroundColor: "#009b4d15",
                    color: "#009b4d",
                    scale: 0.8,
                  }}
                  onClick={() => handleClick(project.id)}
                  sx={{
                    width: { xs: "60%", md: "20%" },
                    justifyContent: "flex-start",
                  }}
                >
                  <ListItemText
                    component={motion.div}
                    whileHover={{
                      color: "#009b4d",
                    }}
                    sx={{
                      fontFamily: "Short Stack",
                      color: "#c7d9f7fd",
                      borderBottom: "2px solid #c7d9f7fd ",
                    }}
                  >
                    {project.name}
                  </ListItemText>
                </ListItem>
                <AnimatePresence initial={false} mode="wait">
                  {show === project.id && (
                    <ElementTransition>
                      <Box
                        elevation={3}
                        sx={{
                          width: { xs: "90%", md: "50%" },
                          heigth: "fit",
                          position: "fixed",
                          right: { xs: "5%", md: "10%" },
                          bottom: { xs: 0, md: 50, lg: 500 },
                          marginLeft: 1,
                          borderRadius: "12px",
                          justifyContent: "flex-start",
                          zIndex: 40,
                        }}
                      >
                        <Typography
                          variant="caption"
                          color="white"
                          sx={{
                            textDecoration: "none",
                            color: "#c7d9f7fd",
                            fontFamily: "Short Stack",
                            fontSize: 10,
                          }}
                        >
                          {project.desc}
                        </Typography>
                        <Box
                          sx={{
                            width: "100%",
                            margin: "10px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            variant="caption"
                            color="#c7d9f7fd"
                            sx={{
                              textDecoration: "none",
                              fontFamily: "Lexend Giga",
                              fontSize: 10,
                            }}
                          >
                            {project.techs}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            {project.link ? (
                              <Button
                                size="small"
                                variant="text"
                                component={Link}
                                to={project.link}
                                sx={{
                                  color: "#c7d9f7fd",
                                  justifyCOntentL: "space-between",
                                  alignItems: "center",
                                  borderBottom: "1px solid #c7d9f7fd",
                                  fontFamily: "Short Stack",
                                }}
                              >
                                Project code
                              </Button>
                            ) : null}
                            {project.viewlink ? (
                              <Button
                                size="small"
                                variant="text"
                                component={Link}
                                to={project.viewlink}
                                sx={{
                                  color: "#c7d9f7fd",
                                  justifyCOntentL: "space-between",
                                  alignItems: "center",
                                  borderBottom: "1px solid #c7d9f7fd",
                                  fontFamily: "Short Stack",
                                }}
                                endIcon={<FaEye />}
                              >
                                View
                              </Button>
                            ) : null}
                          </Box>
                        </Box>
                      </Box>
                    </ElementTransition>
                  )}
                </AnimatePresence>
              </List>
            </Box>
          ))}
        </Box>
      </Box>
    </PageTransition>
  );
};

export default Project;
