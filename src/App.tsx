import Button from "./components/common/Button";
import Typography from "./components/common/Typography";

function App() {
  return (
    <div
      style={{
        background: "black",
      }}
    >
      <Typography variant="button" as="h1">
        test
      </Typography>
      <Button color="fill-gray-300" round>
        C
      </Button>
      <Button color="fill-amber-600" round>
        C
      </Button>
      <Button color="fill-gray-800" round>
        C
      </Button>
    </div>
  );
}

export default App;
