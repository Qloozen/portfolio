import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

const ReactMarkDownWrapper = ({ content }: Props) => {
  return <ReactMarkdown className="line-break">{content}</ReactMarkdown>;
};

export default ReactMarkDownWrapper;
