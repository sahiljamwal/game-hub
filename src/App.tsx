import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import DynamicHeading from "./components/DynamicHeading";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformList from "./components/PlatformList";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
