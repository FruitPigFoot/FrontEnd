import { gql, useMutation } from "@apollo/client";

const 나의그래프큐엘셋틸 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋틸);
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables:{ // variables 이게 $와 같음
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다"
      }
    });
    console.log(result);
  };

  //한 주일때는 괄호() 필요없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
