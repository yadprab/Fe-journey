import { Steps } from "antd";
export type NonUndefined<T> = T extends undefined ? never : T;
export type Unpacked<T> = T extends (infer U)[] ? U : T;
export type StepsProps = React.ComponentProps<typeof Steps>;

export type StepItems = NonUndefined<StepsProps["items"]>;

export type StepStatus = NonUndefined<Unpacked<StepItems>["status"]>;

export type DotParams = Parameters<
  Exclude<NonUndefined<StepsProps["progressDot"]>, boolean>
>;
export interface TimeLineOptions {
  items: Unpacked<StepItems>;
  key: string;
  ytLinks?: string[];
  docLinks?: string[];
  project?: string;
  details: string;
}
export interface TimeLineInitialState {
  current: number;
  options: TimeLineOptions[];
}
