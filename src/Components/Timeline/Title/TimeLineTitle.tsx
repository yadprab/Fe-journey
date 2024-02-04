import { Alert, Button, Flex, Typography } from "antd";

interface TimeLineTitleProps {
  ytLinks?: string[];
  project?: string;
  onComplete: () => void;
  details: string;
  onPrevious: () => void;
  hasPrevious: boolean;
}

function TimeLineTitle(props: TimeLineTitleProps) {
  const { ytLinks, onComplete, details, project, onPrevious, hasPrevious } =
    props;

  const Action = (
    <Flex justify="flex-end">
      <Flex gap="4px">
        {hasPrevious ? (
          <Button
            type="text"
            ghost
            onClick={() => {
              onPrevious();
            }}
          >
            Previous
          </Button>
        ) : null}
        <Button
          type="primary"
          onClick={() => {
            onComplete();
          }}
        >
          Complete
        </Button>
      </Flex>
    </Flex>
  );

  const YT = (
    <>
      {ytLinks?.map((f) => (
        <Flex key={f}>
          <Typography.Link href={f} target="_blank">
            Reference
          </Typography.Link>
        </Flex>
      ))}
    </>
  );

  const projectDesc = (
    <Typography.Paragraph
      style={{ maxWidth: "250px", color: "rgb(133, 105, 15)" }}
    >
      {project}
    </Typography.Paragraph>
  );

  const Project = project ? (
    <Flex vertical gap="8px">
      <Alert
        type="info"
        description={projectDesc}
        style={{
          backgroundColor: "#fff8e1",
          borderColor: "#eae3b9",
          padding: "8px",
        }}
      />
    </Flex>
  ) : null;
  return (
    <Flex vertical gap={"12px"}>
      <Typography.Paragraph style={{ margin: 0, maxWidth: "300px" }}>
        {details}
      </Typography.Paragraph>
      {YT}
      {Project}
      {Action}
    </Flex>
  );
}

export { TimeLineTitle };
