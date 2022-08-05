import React, { useState, useMemo } from "react";
import { memo } from "_/utilities/memo";
import { Chart2 } from "_/assets/images";
import { SearchContainer } from "#";
import { ChartContainer, DateSelect } from "./style";
import { headerJustify } from "_/components/SearchContainer";
import * as chart from "echarts";
import ReactEcharts from "echarts-for-react";
import { colors } from "_/constants";

function ChartSection(): React.ReactElement {
  const [XData, setXData] = useState([""]);
  const [seriesData, setSeriesData] = useState([0]);
  const [filter, setFilter] = useState("Last Year");

  useMemo(() => {
    switch (filter) {
      case "Last Year":
        setXData(["", "", "", "", "", "", "", "", "", "", "", ""]);
        setSeriesData([4, 8, 4, 6, 9, 1, 12, 3, 14, 3, 2, 7]);
        break;
      case "Last Month":
        setXData(["", "", "", ""]);
        setSeriesData([4, 8, 4, 6]);
        break;
      case "Last 7 Days":
        setXData(["", "", "", ""]);
        setSeriesData([4, 2, 2, 6, 7, 8, 4]);
        break;
      case "Last Day":
        setXData([""]);
        setSeriesData([8]);
        break;
    }
  }, [filter]);

  var axisCommon = function () {
    return {
      axisLine: {
        lineStyle: {
          color: colors.DarkGunmetal80,
        },
      },
      splitLine: {
        lineStyle: {
          color: colors.DarkGunmetal80,
        },
      },
    };
  };

  var theme = {
    color: [colors.Sunray100],
    textStyle: {
      color: colors.Platinum60,
    },
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),

    line: {
      symbol: "circle",
    },
  };

  chart.registerTheme("dark", theme);

  return (
    <ChartContainer>
      <SearchContainer
        headerItemsPlacement={headerJustify.spaceBetween}
        title="Signal Chart"
        icon={<Chart2 />}
      >
        <DateSelect
          onChange={(item: any) => {
            setFilter(item.text);
          }}
          value={{ text: filter }}
          items={[
            { text: "Last Day" },
            { text: "Last 7 Days" },
            { text: "Last Month" },
            { text: "Last Year" },
          ]}
        />
      </SearchContainer>

      <ReactEcharts
        theme={"dark"}
        style={{ height: "100%", width: "100%" }}
        option={{
          xAxis: {
            type: "category",
            data: XData || "",
            boundaryGap: false,
          },
          yAxis: {
            type: "value",
            boundaryGap: false,
          },

          series: [
            {
              data: seriesData || 0,
              type: "line",
              symbol: "none",
              areaStyle: {
                color: new chart.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(226, 176, 76, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(226, 176, 76, 0)",
                  },
                ]),
              },
              showSymbol: false,
            },
          ],
        }}
      />
    </ChartContainer>
  );
}

export default memo(ChartSection);
