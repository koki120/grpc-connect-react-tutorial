import { useQuery } from "@tanstack/react-query";
import { greet } from "./gen/greet/v1/greet-GreetService_connectquery";

function App() {
  const { isLoading, isError, error, data } = useQuery(greet.useQuery());

  return (
     <div>
      {isLoading && <p>読み込み中...</p>}
      {isError && <p role="alert">{error?.message}</p>}
      {!isLoading && !isError && data != null && <h3>{data.greeting}</h3>}
    </div>
  )
}

export default App
