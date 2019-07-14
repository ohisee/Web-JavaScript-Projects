/**
 * @fileoverview Backup (Fake) time series line component
 */
import React from "react";
import TimeseriesLine from "./TimeseriesLine";

const BackupTimeseriesLine = () => {

  const init = [];
  for (let i = 1980; i < 2020; i++) {
    init.push({
      key: new Date(i, 11, 31),
      value: (Math.random() * 10) - 5
    });
  }

  return (
    <TimeseriesLine
      width={800}
      height={300}
      margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
      title={'Time Series of Growth'}
      data={init}
      showXaxis={true}
      showYaxis={true}
      timeYearInterval={5} />
  );
};

export default BackupTimeseriesLine;
