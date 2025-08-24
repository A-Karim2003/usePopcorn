import Box from "./Box";
import SearchResult from "./SearchResult";

function Main() {
  return (
    <main>
      <Box className={"left"}>
        <SearchResult />
      </Box>
      <Box>
        <h1>right</h1>
      </Box>
    </main>
  );
}

export default Main;
