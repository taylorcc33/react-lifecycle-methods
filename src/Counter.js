import { useEffect, useState } from "react";
import { Button, Header, Progress, Statistic } from "semantic-ui-react";

export default () => {
  const [count, setCount] = useState(0);
  const [autoCount, setAutoCount] = useState(0);

  useEffect(() => {
    console.log("auto count state has changed");

    if (autoCount <= 100) {
      setTimeout(() => {
        setAutoCount(autoCount + 10);
      }, 1000);
    } else {
      setAutoCount(0);
    }
  });

  return (
    <>
      <div>
        <Header as="h3" style={{ marginTop: "30px" }}>
          Manual Counter
        </Header>
      </div>
      <div>
        <Button onClick={() => setCount(count + 1)}>Counter: {count}</Button>
        <Button onClick={() => setCount(count - count)}>Reset Counter</Button>
      </div>
      <div>
        <Header as="h3" style={{ marginTop: "30px" }}>
          Auto Counter
        </Header>
      </div>
      <div>
        <Statistic>
          <Statistic.Value>{autoCount}%</Statistic.Value>
        </Statistic>
      </div>
      <div>
        <Progress style={{ width: "400px" }} percent={autoCount} indicating />
      </div>
    </>
  );
};
