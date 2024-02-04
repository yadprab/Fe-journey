import { Flex, Layout } from "antd";
import { Title } from "../Title/Title";
import { TimeLine } from "../Timeline/TimeLine";

function Roadmap() {
  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Content style={{ backgroundColor: "#FFFFEC" }}>
        <Flex align="center" justify="center" style={{ height: "100%" }} gap={48} vertical>
          <Title />
          <TimeLine/>
        </Flex>
      </Layout.Content>
    </Layout>
  );
}

export default Roadmap;
