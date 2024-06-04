import { HeadFC } from "gatsby"
import Template from "../Template";

const NotFoundPage = () => (
  <Template>
    <div css={{fontSize: '1.35em'}}>
      This page does not exist
      (or perhaps in development hehe)
    </div>
  </Template>
);

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
