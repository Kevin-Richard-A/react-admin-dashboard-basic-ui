import { Box, useTheme, Typography } from "@mui/material";
import Header from "src/components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "src/theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the purpose of this Page?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This application is designed to provide users with a platform to
            access frequently asked questions and their answers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I use this application?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Users can navigate through the FAQ section to find answers to common
            questions. Each question can be expanded to view its answer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Who can I contact for further assistance?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For further assistance, users can contact our support team via the
            contact page or email us directly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where can I find more information?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            More information can be found on our website or by visiting the help
            section.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I provide feedback?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Users can provide feedback through the feedback form available on
            our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What should I do if I encounter an issue?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you encounter any issues, please report them through our support
            page or contact our customer service.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
