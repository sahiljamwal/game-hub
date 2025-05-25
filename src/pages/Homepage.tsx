import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import DynamicHeading from "../components/DynamicHeading";
import PlatformList from "../components/PlatformList";
import SortSelector from "../components/SortSelector";
import GamesGrid from "../components/GamesGrid";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <DynamicHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformList />
            <SortSelector />
          </HStack>
        </Box>

        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
