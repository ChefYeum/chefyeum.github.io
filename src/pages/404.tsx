import React, { useEffect } from "react";
import Template from "../Template";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Not found';
  }, []);

  return (
    <Template>
      <div css={{ fontSize: '1.35em' }}>
        This page does not exist
        (or perhaps in development hehe)
      </div>
    </Template>
  );
};

export default NotFoundPage;
