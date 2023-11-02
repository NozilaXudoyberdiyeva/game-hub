import Header from "../components/Header";
import { Grid, GridItem, Show } from "@chakra-ui/react";
const Root = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Header />
        </GridItem>
        <Show above="md">
          <GridItem area="aside" bg="coral">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="purple">
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default Root;
