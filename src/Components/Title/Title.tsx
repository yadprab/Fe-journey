import { Flex, Typography } from "antd";

function Title() {
  return (
    <Flex vertical gap="8px" align="center">
      <Typography.Text style={{ fontSize: "72px", color: "#433712" }} strong>
        Frontend Journey
      </Typography.Text>
      <Typography.Paragraph
        style={{ textAlign: "center", color: "#3d3c39", maxWidth: "700px" }}
      >
        Embark on a frontend development journey, mastering HTML, CSS, and
        JavaScript basics. Dive into frameworks like React, explore styling with
        preprocessors, and grasp version control with Git. Prioritize responsive
        design, accessibility, and stay current with industry trends. Build a
        strong foundation, engage with the community, and never stop learning
      </Typography.Paragraph>
    </Flex>
  );
}

export { Title };
