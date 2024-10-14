import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component }) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 =>
  });
  return (
    <div>
      <div>----------여기는 언더바 app.js 컴포넌트----------</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>----------여기는 언더바 app.js 컴포넌트----------</div>
    </div>
  );
}
