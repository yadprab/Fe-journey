import { Flex, Popover, Steps } from "antd";
import { produce } from "immer";
import { useAtom } from "jotai";
import { timeLineAtom, timeLinesOptionPredicate } from "../../store/timeline";
import { DotParams } from "../../store/type";
import { TimeLineTitle } from "./Title/TimeLineTitle";

function TimeLine() {
  const [timeline, setTimeLine] = useAtom(timeLineAtom);
  const timelineOptions = timeline.options.map(timeLinesOptionPredicate);

  function dotRenderer(...params: DotParams) {
    const [dot, info] = params;
    const isExits = timeline.options.findIndex(
      (f) => f.items.title === info.title
    );

    const op = timeline.options[isExits];

    function handleComplete() {
      setTimeLine((value) => {
        return produce(value, (draft) => {
          draft.current = draft.current + 1;
          draft.options[isExits].items.status = "finish";
        });
      });
    }
    function handlePrevious() {
      setTimeLine((value) => {
        return produce(value, (draft) => {
          draft.current--;
          draft.options[isExits].items.status = "wait";
        });
      });
    }
    return (
      <Popover
        open={info.index === timeline.current}
        placement="left"
        content={
          <TimeLineTitle
            details={op.details}
            ytLinks={op.ytLinks}
            onComplete={handleComplete}
            project={op.project}
            onPrevious={handlePrevious}
            hasPrevious={info.index > 0}
          />
        }
      >
        {dot}
      </Popover>
    );
  }
  return (
    <Flex justify="center">
      <Steps
        items={timelineOptions}
        progressDot={dotRenderer}
        direction="vertical"
      />
    </Flex>
  );
}

export { TimeLine };
