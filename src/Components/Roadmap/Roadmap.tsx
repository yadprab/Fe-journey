import { Flex, Layout } from "antd";
import { TimeLine } from "../Timeline/TimeLine";
import { Title } from "../Title/Title";

function Roadmap() {
  return (
    <Layout style={{ height: "100%", overflow: "auto" }}>
      <Layout.Content style={{ backgroundColor: "#FFFFEC" }}>
        <Flex
          align="center"
          justify="center"
          style={{ height: "100%" }}
          gap={48}
          vertical
        >
          <Title />
          <TimeLine />
        </Flex>
      </Layout.Content>
    </Layout>
  );
}

export default Roadmap;
