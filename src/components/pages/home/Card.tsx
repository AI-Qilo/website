import { ActionIcon, Box, Group, Paper, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { color } from "../../../contants/color";
import useDeviceSize from "../../../utils/useDeviceSize";
import { useState, useRef, useEffect } from "react";

interface IShowcaseCard {
  tag: string;
  title: JSX.Element | string;
  description: JSX.Element | string;
  background?: string;
  url: string; 
  onClick?: () => void;
}

const ShowcaseCard: React.FC<IShowcaseCard> = (props) => {
  const { isMobile } = useDeviceSize();
  const [inView, setInView] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
      }
    );

    const currentRef = componentRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Paper
      radius={50}
      className={`showcase-white ${inView ? "animate__animated animate__fadeInUp" : ""}`}
      ref={componentRef}
      style={{
        backgroundColor: props?.background ? props?.background : "#F4F5DC",
      }}
    >
      {isMobile ? (
        <Box>
          <Text className='showcase-tag'>{props.tag}</Text>
          <Box>
            <Text className='mobile-showcase-title'>{props.title}</Text>
            <Text className='mobile-showcase-description'>{props.description}</Text>
            <Group mt='1em'>
              <Text className='showcase-learn-more'>Learn More</Text>
              <ActionIcon
                color={color.green}
                size={25}
                radius={10}
                className='showcase-icon'
                component="a" 
                href={props.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <IconArrowUpRight stroke={1.5} size={18} />
              </ActionIcon>
            </Group>
          </Box>
        </Box>
      ) : (
        <Box>
          <Group justify='space-between'>
            <Text className='showcase-tag'>{props.tag}</Text>
            <ActionIcon
              component="a" 
              href={props.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              color={color.green}
              size={35}
              radius={10}
              className='showcase-icon'
            >
              <IconArrowUpRight stroke={1.5} />
            </ActionIcon>
          </Group>
          <Box>
            <Text className='showcase-title'>{props.title}</Text>
            <Text className='showcase-description'>{props.description}</Text>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default ShowcaseCard;
