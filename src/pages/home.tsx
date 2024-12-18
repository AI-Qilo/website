import {
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Text,
} from "@mantine/core";
import "../styles/pages/home.css";
import ShowcaseCard from "../components/pages/home/Card";
import FeatureCard from "../components/pages/home/FeatureCard";
import Footbar from "../components/layout/footbar";
import Navbar from "../components/layout/navbar";
import { color } from "../contants/color";
import { TrackingEvents } from "../utils/tracking";
import { CALENDERLY_URL, PORTAL_URL } from "../contants/url";

const SHOWCASE_DATA = [
  {
    tag: "Talent Acquisition",
    title: (
      <>
        I Want to Test
        <br />
        Candidates Before Hiring
      </>
    ),
    description: (
      <>
        Ensure you’re hiring the best fit for your team with our AI-powered
        behavioural analysis tests. Quickly assess candidates' traits and
        decision-making skills to make informed hiring decisions with
        confidence.
      </>
    ),
    url: PORTAL_URL,
  },
  {
    tag: "Talent Development",
    title: (
      <>
        I Want to Test Current <br /> Employees for Training
      </>
    ),
    description: (
      <>
        Identify growth opportunities within your team using our AI-powered
        behvioral analysis tests. Assess your employees' strengths and areas for
        improvement to tailor training programs that drive their success.
      </>
    ),
    url: PORTAL_URL,
  },
];

const FEATURE_DATA = [
  {
    title: "Identify traits for<br/> any job",
    description: (
      <>
        Our AI pinpoints the key traits needed for any job, ensuring a perfect
        fit by aligning personality with role requirements.
      </>
    ),
    link_text: "Try it for free",
    url: PORTAL_URL,
    features: [
      "Evaluate Job in 1 min",
      "Identify trait for any profile",
      "Choose traits for test generation",
      "Classified traits for easy mapping",
    ],
  },
  {
    title: "Generate Test Personalised<br/> to the Job Role",
    description: (
      <>
        Create tailored tests for any job role, with questions designed to match
        the specific traits and skills needed for success.
      </>
    ),
    link_text: "Generate for free",
    url: PORTAL_URL,
    features: [
      "Get reliable tests within seconds",
      "AI conversation like ChatGPT",
      "Open-ended SJT questions",
      "Test duration is less than 30 mins",
    ],
  },
  {
    title: "In-Depth analysis with<br/> highly trained AI",
    description: (
      <>
        Our AI analyses responses in real-time and asks follow-up questions to
        provide a deeper, more insightful analysis.
      </>
    ),
    link_text: "Get more info",
    url: CALENDERLY_URL,
    features: [
      "Detailed report on the traits",
      "Secured report for your eyes only",
      "Removes bias for accurate report",
      "Visuals to understand the report",
    ],
  },
];

const Home = () => {
  return (
    <section className="main">
      {/* header */}
      <Navbar />
      <Container fluid pb={75} pt={60} className="main-container">
        {/* Hero Section */}
        <Paper radius={50}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 12 }} p={0}>
              <Box className="hero-card-left-top">
                <Text className="hero-title">
                  <span
                    // className="text-typewriter"
                    style={{
                      whiteSpace: "pre",
                      display: "block",
                    }}
                  >
                    Test Yourself.
                  </span>
                  <span
                    // className="text-typewriter"
                    style={{
                      whiteSpace: "pre",
                      display: "block",
                      // animationDelay: "2.8s",
                    }}
                  >
                    Improve Yourself.
                  </span>
                </Text>
                <Text
                  // className="text-typewriter"
                  style={{
                    whiteSpace: "pre",
                    display: "block",
                    // animationDelay: "4.8s",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  c={color.green}
                >
                  Behavioural analysis powered by GenAI
                </Text>

                <Button
                  className="tryFreeButton "
                  size={"sm"}
                  px={15}
                  h={35}
                  color={"#F8E805"}
                  style={{
                    marginTop: "-1px",
                    borderRadius: "8px",
                    fontWeight: 600,
                  }}
                  mt={40}
                >
                  <Anchor
                    c={color.green}
                    fw={700}
                    href={PORTAL_URL}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: 700,
                    }}
                    onClick={() => {
                      TrackingEvents.TRY_FOR_FREE();
                    }}
                  >
                    Try for Free
                  </Anchor>
                </Button>
              </Box>
              <Box className="hero-card-left-bottom">
                <Text className="hero-description  animate__animated animate__fadeInUp">
                  Our{" "}
                  <span className="hero-description-bold">
                    AI-powered behvioral analysis tests
                  </span>{" "}
                  are made just for you. Get personalised insights, whether
                  you're looking for a new job or trying to grow in your career.
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Showcase Section */}
        <Grid mt={65}>
          {SHOWCASE_DATA.map((item, index) => (
            <Grid.Col span={{ base: 12, md: 6 }} p={0} key={index}>
              <ShowcaseCard
                tag={item.tag}
                title={item.title}
                description={item.description}
                background={index % 2 === 1 ? "#CBDCBD" : "#F4F5DC"}
                url={item.url}
                onClick={() => {
                  if (item.tag === "Talent Acquisition") {
                    TrackingEvents.Talent_Acquisition();
                  } else if (item.tag === "Talent Development") {
                    TrackingEvents.Talent_Development();
                  } else if (item.tag) window.open(item.url, "_blank");
                }}
              />
            </Grid.Col>
          ))}
        </Grid>

        {/* AI Tools Section */}
        <Box mt={75} id="ai-tools-help">
          <Text className="section-heading">Our AI tools help</Text>
          {FEATURE_DATA.map((item, index) => {
            const isLastItem = index === FEATURE_DATA.length - 1;

            return (
              <FeatureCard
                key={index}
                title={item.title as string}
                description={item.description}
                features={item.features}
                link_text={item.link_text}
                url={item.url}
                className={
                  isLastItem ? "feature-card no-border" : "feature-card"
                }
                onClick={() => {
                  if (item.link_text.includes("Try it for free")) {
                    TrackingEvents.Identify_traits();
                  } else if (item.link_text.includes("Generate for free")) {
                    TrackingEvents.Generate_For_Free();
                  } else if (item.link_text.includes("Get more info")) {
                    TrackingEvents.Get_More_Info();
                  }
                }}
              />
            );
          })}
        </Box>
      </Container>

      {/* About Us Section */}

      <Box mt={75} className="showcase-white dassh-showcase" id="about-us">
        <Box className="inner-flex-container">
          <Box className="left-inner-box">
            <Text
              className="section-title"
              style={{ color: "#063A3A", fontWeight: 700 }}
            >
              Meet the Brains <br /> Behind Dassh.AI
            </Text>

            <Button
              className="custom-button"
              onClick={() => {
                TrackingEvents.BOOK_A_CALL_ABOUT_US();
                window.open(CALENDERLY_URL, "_blank");
              }}
            >
              Book a Call
            </Button>
          </Box>

          <Box className="right-inner-box">
            <Text mt="md" style={{ fontWeight: 430, textAlign: "justify" }}>
              We’re the minds behind Dassh.Ai, a GenAI tool designed to assess
              employees' behavioural traits within organisations. Built by three
              IIT Bombay alumni with guidance from CHROs and Learning &
              Development experts of global firms, our tool delivers innovative
              solutions for today’s challenges.
            </Text>
            <Text mt="md" style={{ fontWeight: 430, textAlign: "justify" }}>
              We’re keeping our identities a mystery (for now), but here’s a
              hint: one of us is a software developer at a major global bank,
              another is a serial entrepreneur with global ventures, and the
              third is a Gujarati consultant at a top MNC.
            </Text>
            <Text mt="md" style={{ fontWeight: 430, textAlign: "justify" }}>
              You can trust us - we thrive on solving challenges and bringing
              innovative solutions to life. We’re committed to delivering the
              highest quality. Try our tool for free, give us feedback, and help
              us make it even better!
            </Text>
          </Box>
        </Box>

        <Box className="pre-footer-box">
          <Text className="pre-footer-text" style={{ fontWeight: 700 }}>
            Are you ready to{" "}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="pre-footer-text-underline"
            >
              Transform?
            </a>
          </Text>
        </Box>
      </Box>

      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default Home;
